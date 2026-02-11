"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { conversationFlow, type ChatMessage, type ChatChoice } from "@/lib/conversationFlow";
import {
  trackDemoView,
  trackDemoStart,
  trackChoiceSelected,
  trackDemoComplete,
  trackDemoRestart,
} from "@/lib/analytics";
import PhoneMockup from "@/components/PhoneMockup";

interface DisplayMessage {
  id: string;
  sender: "rilo" | "user";
  text: string;
  displayedText: string;
  isTyping: boolean;
  isComplete: boolean;
}

const TYPING_SPEED = 30;
const MESSAGE_DELAY = 600;
const INITIAL_DELAY = 1000;

export default function ChatDemo() {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [currentChoices, setCurrentChoices] = useState<ChatChoice[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [stepCount, setStepCount] = useState(0);
  const [demoStartTime, setDemoStartTime] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion.current ? "auto" : "smooth" });
  }, []);

  const typeMessage = useCallback(
    (message: ChatMessage, onComplete: () => void) => {
      if (prefersReducedMotion.current) {
        setMessages((prev) => [
          ...prev,
          { ...message, displayedText: message.text, isTyping: false, isComplete: true },
        ]);
        scrollToBottom();
        onComplete();
        return;
      }

      const displayMsg: DisplayMessage = {
        ...message,
        displayedText: "",
        isTyping: true,
        isComplete: false,
      };
      setMessages((prev) => [...prev, displayMsg]);
      setIsTyping(true);
      scrollToBottom();

      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < message.text.length) {
          charIndex++;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === message.id ? { ...m, displayedText: message.text.slice(0, charIndex) } : m
            )
          );
          if (charIndex % 10 === 0) scrollToBottom();
          typingTimeoutRef.current = setTimeout(typeChar, TYPING_SPEED);
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === message.id ? { ...m, isTyping: false, isComplete: true } : m
            )
          );
          setIsTyping(false);
          scrollToBottom();
          onComplete();
        }
      };
      typingTimeoutRef.current = setTimeout(typeChar, TYPING_SPEED);
    },
    [scrollToBottom]
  );

  const playMessages = useCallback(
    (stepMessages: ChatMessage[], choices?: ChatChoice[], terminal?: boolean, pathName?: string) => {
      let index = 0;
      const playNext = () => {
        if (index < stepMessages.length) {
          const msg = stepMessages[index];
          index++;
          typeMessage(msg, () => {
            if (index < stepMessages.length) {
              setTimeout(playNext, MESSAGE_DELAY);
            } else {
              if (terminal) {
                setIsTerminal(true);
                setCurrentPath(pathName ?? "");
                trackDemoComplete(pathName ?? "", stepCount, Date.now() - demoStartTime);
              }
              if (choices && choices.length > 0) {
                setTimeout(() => {
                  setCurrentChoices(choices);
                  scrollToBottom();
                }, 300);
              }
            }
          });
        }
      };
      playNext();
    },
    [typeMessage, scrollToBottom, stepCount, demoStartTime]
  );

  const startDemo = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    setDemoStartTime(Date.now());
    const step = conversationFlow.step0;
    setTimeout(() => {
      playMessages(step.messages, step.choices, step.isTerminal, step.pathName);
    }, INITIAL_DELAY);
  }, [hasStarted, playMessages]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          trackDemoView(window.scrollY / document.body.scrollHeight);
          startDemo();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [hasStarted, startDemo]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const handleChoice = (choice: ChatChoice, stepId: string) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackDemoStart(Date.now() - demoStartTime);
    }
    setStepCount((prev) => prev + 1);
    trackChoiceSelected(stepCount + 1, choice.text, currentPath || "main");

    const userMsg: DisplayMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: choice.text,
      displayedText: choice.text,
      isTyping: false,
      isComplete: true,
    };
    setMessages((prev) => [...prev, userMsg]);
    setCurrentChoices([]);
    scrollToBottom();

    const nextStep = conversationFlow[choice.nextStepId];
    if (nextStep) {
      setTimeout(() => {
        playMessages(nextStep.messages, nextStep.choices, nextStep.isTerminal, nextStep.pathName);
      }, MESSAGE_DELAY);
    }
  };

  const handleRestart = () => {
    trackDemoRestart(currentPath);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    setMessages([]);
    setCurrentChoices([]);
    setIsTyping(false);
    setIsTerminal(false);
    setCurrentPath("");
    setStepCount(0);
    setHasStarted(false);
    setHasInteracted(false);
    setTimeout(() => {
      setHasStarted(true);
      setDemoStartTime(Date.now());
      const step = conversationFlow.step0;
      setTimeout(() => {
        playMessages(step.messages, step.choices, step.isTerminal, step.pathName);
      }, INITIAL_DELAY);
    }, 300);
  };

  const handleWaitlistCta = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-[1100px] relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="meta-label !text-black mb-4 block animate-fade-up">
            Interactive Demo
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-tighter text-text-primary mb-5 animate-fade-up [animation-delay:100ms]">
            See what payday coaching
            <br className="hidden sm:block" />
            actually looks like.
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-lg font-body animate-fade-up [animation-delay:200ms]">
            Interactive, no-judgment conversations that keep you on track.
          </p>
        </div>

        {/* Content grid */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 items-center animate-fade-up [animation-delay:350ms]">

          {/* Annotation callouts — Desktop only */}
          <div className="hidden md:flex flex-col gap-6">
            {[
              {
                title: "Checks in on payday",
                desc: "Rilo starts the conversation the moment your pay hits, so you have a plan before you spend.",
              },
              {
                title: "Paces your spending",
                desc: "It splits your disposable income across your cycle, giving you absolute certainty every day.",
              },
              {
                title: "No judgment, just nudges",
                desc: "Want to splurge today? Rilo just adjusts the rest of the week. No lectures.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:scale-[1.02] group"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <p className="text-primary font-bold text-base mb-1.5 group-hover:translate-x-1 transition-transform duration-500">
                  {item.title}
                </p>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Chat phone mockup */}
          <div className="mx-auto max-w-[340px] md:max-w-none">
            <PhoneMockup>
              <div
                className="h-full flex flex-col bg-bg-subtle"
                role="log"
                aria-label="Rilo chat demo conversation"
                aria-live="polite"
              >
                {/* Chat header */}
                <div className="px-5 py-4 border-b border-zinc-100 flex items-center gap-3 bg-white/90 backdrop-blur-md sticky top-0 z-10">
                  <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-black">R</span>
                  </div>
                  <div>
                    <p className="text-black text-sm font-bold tracking-tight">Rilo</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      <p className="text-black text-[10px] font-bold tracking-widest uppercase opacity-60">Active Coach</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth scrollbar-none pb-20">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={[
                          "max-w-[85%] rounded-[18px] px-4 py-3 text-[13px] leading-relaxed",
                          "transition-all duration-400 ease-smooth",
                          msg.sender === "user"
                            ? "bg-black text-white font-medium rounded-tr-sm"
                            : "bg-zinc-100 text-black border border-zinc-200/50 rounded-tl-sm",
                        ].join(" ")}
                      >
                        {msg.isComplete ? msg.text : msg.displayedText}
                        {msg.isTyping && (
                          <span className="inline-block ml-0.5 w-0.5 h-3.5 bg-black/20 animate-pulse rounded-full align-middle" />
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && messages.length > 0 && !messages[messages.length - 1]?.isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-zinc-100 border border-zinc-200/50 rounded-[18px] rounded-tl-sm px-4 py-3 flex gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}

                  {/* Choice buttons */}
                  {currentChoices.length > 0 && !isTyping && (
                    <div className="flex flex-col gap-2 pt-3">
                      {currentChoices.map((choice, i) => (
                        <button
                          key={i}
                          onClick={() => handleChoice(choice, choice.nextStepId)}
                          className="w-full text-left border border-zinc-200 bg-white hover:border-black hover:bg-zinc-50 text-black rounded-2xl px-4 py-3 text-[13px] font-bold tracking-tight cursor-pointer active:scale-[0.97] transition-all duration-300"
                          aria-label={`Choose: ${choice.text}`}
                        >
                          {choice.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Terminal state */}
                  {isTerminal && (
                    <div className="flex flex-col gap-3 pt-6 animate-fade-up">
                      <button
                        onClick={handleRestart}
                        className="w-full border border-zinc-200 bg-white text-zinc-400 hover:text-black font-bold rounded-2xl px-4 py-3 text-xs tracking-widest uppercase cursor-pointer transition-all duration-300"
                      >
                        Try another path
                      </button>
                      <button
                        onClick={handleWaitlistCta}
                        className="w-full bg-black text-white font-bold rounded-2xl px-4 py-3 text-xs tracking-widest uppercase shadow-lg shadow-black/10 hover:scale-[1.02] cursor-pointer transition-all duration-300"
                      >
                        Join the waitlist
                      </button>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>

        {/* Mobile callouts */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-12 max-w-md mx-auto">
          {[
            { title: "Checks in on payday", desc: "Rilo starts the conversation when your pay hits." },
            { title: "Paces your spending", desc: "Splits your money so you never guess on day 12." },
          ].map((item, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <p className="text-black font-bold text-base mb-1">{item.title}</p>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

