"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  trackWaitlistFormView,
  trackWaitlistFormFocus,
  trackWaitlistSubmit,
  trackWaitlistSuccess,
  trackShareClick,
} from "@/lib/analytics";

type PayFrequency = "fortnightly" | "weekly" | "monthly" | "not_sure" | "";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [payFrequency, setPayFrequency] = useState<PayFrequency>("");
  const [biggestStress, setBiggestStress] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [showOptional, setShowOptional] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pageLoadTime = useRef(Date.now());
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedView.current) {
          hasTrackedView.current = true;
          trackWaitlistFormView(Date.now() - pageLoadTime.current);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const getUtmParams = useCallback(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_term: params.get("utm_term") || undefined,
      referred_by: params.get("ref") || undefined,
    };
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (honeypot) return;
    if (!email.trim()) { setError("Please enter your email address."); return; }
    if (!validateEmail(email)) { setError("That doesn't look like a valid email. Double-check?"); return; }

    setIsSubmitting(true);
    const utmParams = getUtmParams();
    trackWaitlistSubmit(payFrequency || "not_provided", biggestStress.length > 0, !!utmParams.referred_by);

    try {
      if (supabase) {
        const { data, error: dbError } = await supabase
          .from("waitlist_signups")
          .insert({
            email: email.toLowerCase().trim(),
            pay_frequency: payFrequency || null,
            biggest_stress: biggestStress.trim() || null,
            ...utmParams,
          })
          .select("referral_code")
          .single();

        if (dbError) {
          if (dbError.code === "23505") {
            setIsSuccess(true);
            trackWaitlistSuccess(Date.now() - pageLoadTime.current);
            return;
          }
          throw dbError;
        }
        setReferralCode(data?.referral_code ?? "");
      }
      setIsSuccess(true);
      trackWaitlistSuccess(Date.now() - pageLoadTime.current);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyLink = async () => {
    const url = referralCode
      ? `${window.location.origin}?ref=${referralCode}`
      : window.location.origin;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShareClick("clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      trackShareClick("clipboard_fallback");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /* ── Success state ──────────────────────────────────── */
  if (isSuccess) {
    return (
      <section id="waitlist" ref={sectionRef} className="py-28 md:py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 clean-bg pointer-events-none" aria-hidden="true" />
        <div className="mx-auto max-w-md text-center relative z-10">
          <div className="glass-card-solid p-12 animate-fade-up">
            <div className="text-5xl mb-6">🤟</div>
            <h2 className="text-3xl font-extrabold tracking-tighter text-text-primary mb-3 font-heading">
              You&apos;re in!
            </h2>
            <p className="text-text-secondary mb-10 font-body text-lg leading-relaxed">
              We&apos;ll be in touch before launch. Keep an eye on your inbox.
            </p>

            <div className="border-t border-zinc-100 pt-8">
              <p className="text-text-secondary text-sm mb-5 font-medium">
                Know someone who stresses about money? Share the link.
              </p>
              <button
                onClick={handleCopyLink}
                className="w-full bg-black text-white font-bold rounded-full px-6 py-4 text-base cursor-pointer transition-all duration-500 shadow-lg shadow-black/10"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {copied ? "Copied! ✓" : "Copy invite link"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Form state ─────────────────────────────────────── */
  return (
    <section id="waitlist" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-zinc-50">
      <div className="mx-auto max-w-2xl relative z-10 text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="meta-label !text-black mb-4 block animate-fade-up">
            READY TO START?
          </span>
          <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-bold tracking-tight text-black mb-4 animate-fade-up [animation-delay:100ms]">
            Get your spot on the list.
          </h2>
          <p className="text-zinc-500 font-medium text-lg animate-fade-up [animation-delay:200ms]">
            We&apos;re onboarding users in batches. Join the queue for early access.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-up [animation-delay:350ms] w-full max-w-md mx-auto"
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none h-0 w-0"
          />

          <div className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
              onFocus={() => trackWaitlistFormFocus("form")}
              placeholder="ENTER YOUR EMAIL"
              className="w-full bg-white border border-black/10 rounded-full px-8 py-5 text-black font-bold tracking-widest text-xs focus:border-black focus:outline-none transition-all duration-300 shadow-sm"
              autoComplete="email"
              inputMode="email"
            />

            {error && (
              <p
                className="text-black text-xs font-bold bg-white px-4 py-2 rounded-lg border border-red-500/20"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black disabled:opacity-50 text-white font-bold text-xs tracking-[0.3em] rounded-full px-8 py-5 shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {isSubmitting ? "PROCESSING..." : "JOIN WAITLIST"}
            </button>
          </div>

          <p className="meta-label !text-[10px] text-center opacity-40 pt-8 font-bold tracking-widest">
            PRIVATE BETA · NO SPAM · JOIN 1,248+ USERS
          </p>
        </form>
      </div>
    </section>
  );
}

