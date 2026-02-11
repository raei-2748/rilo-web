"use client";

import Image from "next/image";
import { useEffect, useRef, ReactNode } from "react";

interface PhoneMockupBaseProps {
    rotation?: number;
    delay?: number;
    className?: string;
}

interface PhoneMockupImageProps extends PhoneMockupBaseProps {
    imageUrl: string;
    children?: never;
}

interface PhoneMockupChildrenProps extends PhoneMockupBaseProps {
    children: ReactNode;
    imageUrl?: never;
}

type PhoneMockupProps = PhoneMockupImageProps | PhoneMockupChildrenProps;

export default function PhoneMockup({ imageUrl, rotation = 0, delay = 0, className = "", children }: PhoneMockupProps) {
    const phoneRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15,
            };
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.06);
            posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.06);

            if (phoneRef.current) {
                phoneRef.current.style.transform =
                    `rotateY(${rotation + posRef.current.x}deg) rotateX(${-posRef.current.y}deg)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, [rotation]);

    return (
        <div
            className={`perspective-container relative ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div
                ref={phoneRef}
                className="phone-3d relative w-[280px] h-[580px] rounded-[3rem] p-[3px] animate-fade-up"
                style={{
                    transform: `rotateY(${rotation}deg) rotateX(0deg)`,
                    animationDelay: `${delay}ms`,
                }}
            >
                {/* Outer glass bezel */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/40 via-white/10 to-white/30 backdrop-blur-xl border border-white/40 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] pointer-events-none z-20" />

                {/* Screen Content */}
                <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-white z-10 border border-black/[0.03]">
                    {children ? (
                        children
                    ) : imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt="Rilo App UI Preview"
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : null}
                </div>

                {/* Dynamic Island notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-30" />

                {/* Side buttons — subtle */}
                <div className="absolute top-28 -right-[2px] w-[3px] h-14 bg-black/10 rounded-l-sm z-0" />
                <div className="absolute top-48 -right-[2px] w-[3px] h-10 bg-black/10 rounded-l-sm z-0" />
                <div className="absolute top-28 -left-[2px] w-[3px] h-20 bg-black/10 rounded-r-sm z-0" />
            </div>
        </div>
    );
}

