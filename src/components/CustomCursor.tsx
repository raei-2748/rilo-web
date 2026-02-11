"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const scaleRef = useRef(1);
    const rafRef = useRef<number>(0);
    const visibleRef = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Check for touch device
        if (window.matchMedia("(pointer: coarse)").matches) return;

        document.body.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!visibleRef.current) {
                visibleRef.current = true;
                cursor.style.opacity = "1";
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, [role='button'], input, select, textarea, label")) {
                scaleRef.current = 2.5;
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, [role='button'], input, select, textarea, label")) {
                scaleRef.current = 1;
            }
        };

        const handleMouseLeave = () => {
            visibleRef.current = false;
            cursor.style.opacity = "0";
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.12);
            posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.12);

            cursor.style.transform =
                `translate(${posRef.current.x - 16}px, ${posRef.current.y - 16}px) scale(${scaleRef.current})`;

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseleave", handleMouseLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white opacity-0 transition-[transform,opacity] duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            aria-hidden="true"
        />
    );
}
