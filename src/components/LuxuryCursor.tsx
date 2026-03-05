"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function LuxuryCursor() {
    const [mounted, setMounted] = useState(false);
    const [hoverLink, setHoverLink] = useState(false);
    const [hoverCard, setHoverCard] = useState(false);

    // Direct position (no lag) for the dot
    const dotX = useRef(0);
    const dotY = useRef(0);
    const dotRef = useRef<HTMLDivElement>(null);

    // Spring position for the ring (lagged)
    const ringX = useSpring(0, { stiffness: 130, damping: 22, mass: 0.5 });
    const ringY = useSpring(0, { stiffness: 130, damping: 22, mass: 0.5 });

    useEffect(() => {
        // Only show on desktop
        if (window.innerWidth < 1024) return;
        setMounted(true);

        const onMove = (e: MouseEvent) => {
            dotX.current = e.clientX;
            dotY.current = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            }
            ringX.set(e.clientX - 16);
            ringY.set(e.clientY - 16);
        };

        const onEnterLink = () => setHoverLink(true);
        const onLeaveLink = () => setHoverLink(false);
        const onEnterCard = () => setHoverCard(true);
        const onLeaveCard = () => setHoverCard(false);

        window.addEventListener("mousemove", onMove);

        // Attach hover listeners to interactive elements
        const attachListeners = () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.addEventListener("mouseenter", onEnterLink);
                el.addEventListener("mouseleave", onLeaveLink);
            });
            document.querySelectorAll(".product-card").forEach((el) => {
                el.addEventListener("mouseenter", onEnterCard);
                el.addEventListener("mouseleave", onLeaveCard);
            });
        };
        attachListeners();

        // Re-attach on DOM changes (for dynamic content)
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            observer.disconnect();
        };
    }, [ringX, ringY]);

    if (!mounted) return null;

    const ringSize = hoverCard ? 56 : hoverLink ? 44 : 32;
    const ringOpacity = hoverCard ? 0.5 : hoverLink ? 0.6 : 0.4;
    const ringBg = hoverCard ? "rgba(201,168,76,0.08)" : "transparent";

    return (
        <>
            {/* Dot — follows mouse instantly */}
            <div
                ref={dotRef}
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    pointerEvents: "none",
                    zIndex: 9999,
                    willChange: "transform",
                    mixBlendMode: "difference",
                }}
            />

            {/* Ring — follows with spring lag */}
            <motion.div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    x: ringX,
                    y: ringY,
                    pointerEvents: "none",
                    zIndex: 9998,
                    willChange: "transform",
                }}
            >
                <motion.div
                    animate={{
                        width: ringSize,
                        height: ringSize,
                        opacity: ringOpacity,
                        background: ringBg,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        borderRadius: "50%",
                        border: "1px solid rgba(201,168,76,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            </motion.div>

            <style>{`
        @media (min-width: 1024px) {
          html, * { cursor: none !important; }
        }
      `}</style>
        </>
    );
}
