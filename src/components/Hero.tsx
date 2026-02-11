"use client";

import { trackHeroCtaClick } from "@/lib/analytics";
import Image from "next/image";

export default function Hero() {
    const handleWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        trackHeroCtaClick("Waitlist Join - " + email);
        // Add waitlist logic here
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
            {/* 3D Decorations - Positioned like the design image */}

            {/* Subtle background */}
            <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true" />

            {/* Top Left Pins */}
            <div className="absolute top-[15%] left-[10%] animate-float pointer-events-none select-none opacity-90">
                <div className="relative w-16 h-16">
                    <Image src="/pin-purple.png" alt="" fill className="object-contain rotate-[-15deg]" />
                </div>
            </div>
            <div className="absolute top-[18%] left-[12%] animate-float [animation-delay:1s] pointer-events-none select-none opacity-90">
                <div className="relative w-12 h-12">
                    <Image src="/pin-orange.png" alt="" fill className="object-contain rotate-[10deg]" />
                </div>
            </div>
            <div className="absolute top-[22%] left-[8%] animate-float [animation-delay:2s] pointer-events-none select-none opacity-90">
                <div className="relative w-14 h-14">
                    <Image src="/pin-blue.png" alt="" fill className="object-contain rotate-[-30deg]" />
                </div>
            </div>

            {/* Pink Cursor Pointer */}
            <div className="absolute top-[20%] right-[20%] animate-float [animation-delay:0.5s] pointer-events-none select-none">
                <div className="relative w-20 h-20">
                    <Image src="/cursor-pink.png" alt="" fill className="object-contain rotate-[15deg]" />
                </div>
            </div>

            {/* Right Side Pin & Clip */}
            <div className="absolute top-[40%] right-[10%] animate-float [animation-delay:1.5s] pointer-events-none select-none">
                <div className="relative w-14 h-14">
                    <Image src="/pin-purple.png" alt="" fill className="object-contain rotate-[45deg]" />
                </div>
            </div>
            <div className="absolute bottom-[25%] right-[12%] animate-float [animation-delay:3s] pointer-events-none select-none">
                <div className="relative w-24 h-24">
                    <Image src="/clip-red.png" alt="" fill className="object-contain rotate-[-15deg] brightness-110" />
                </div>
            </div>

            {/* Left Bottom Clip */}
            <div className="absolute bottom-[20%] left-[15%] animate-float [animation-delay:2.5s] pointer-events-none select-none">
                <div className="relative w-20 h-20">
                    <Image src="/clip-red.png" alt="" fill className="object-contain rotate-[20deg] brightness-110" />
                </div>
            </div>

            {/* Yellow Sticky Note */}
            <div className="absolute bottom-[5%] left-[28%] animate-float [animation-delay:4s] pointer-events-none select-none">
                <div className="relative w-48 h-48 drop-shadow-2xl">
                    <Image src="/note-yellow.png" alt="" fill className="object-contain rotate-[-5deg]" />
                    <div className="absolute inset-0 flex items-center justify-center p-6 pt-10">
                        <span className="text-black font-['Permanent_Marker',cursive] text-xl rotate-[-5deg] opacity-80 leading-tight">
                            What's this for?
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl w-full flex flex-col items-center">
                <span className="meta-label tracking-[0.3em] font-bold text-black mb-12">RILO®</span>

                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-black leading-[1.1] mb-8">
                    It used to start with a dream,
                    <br />
                    now you can start here.
                </h1>

                <p className="text-zinc-500 text-lg md:text-xl max-w-lg leading-relaxed mb-12 font-medium">
                    The ultimate AI spending coach to pace your spending,
                    <br className="hidden md:block" />
                    nudge your habits, and build your wealth.
                </p>

                {/* Minimalist Waitlist Form */}
                <form
                    onSubmit={handleWaitlist}
                    className="w-full max-w-md flex flex-col md:flex-row items-center gap-4 bg-white/50 backdrop-blur-sm border border-black/10 rounded-full p-2 pl-6 shadow-sm mb-6"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="ENTER YOUR EMAIL HERE"
                        className="flex-1 bg-transparent border-none outline-none text-xs tracking-widest font-bold placeholder:text-zinc-300 py-3"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-black text-white text-[10px] tracking-widest font-bold px-8 py-4 rounded-full hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                    >
                        JOIN WAITLIST <span className="text-lg">→</span>
                    </button>
                </form>

                <div className="flex items-center gap-3 mt-4">
                    <span className="meta-label !text-[10px] !text-zinc-400 font-bold">1,248 PEOPLE JOINED</span>
                </div>

                {/* Footer rights like in design - following the form instead of absolute bottom */}
                <div className="mt-20 opacity-30">
                    <span className="meta-label !text-[9px] font-bold tracking-[0.2em]">COPYRIGHT 2025© ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </section>
    );
}

