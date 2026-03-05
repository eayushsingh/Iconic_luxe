"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { luxury, fadeIn, fadeUp, wordReveal, stagger } from "@/lib/motion";

interface HeroProps {
    curtainDone: boolean;
}

// Split a string into word-masked reveal spans
function WordMask({ words, className, style }: { words: string[], className?: string, style?: React.CSSProperties }) {
    return (
        <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.28em", justifyContent: "center", ...style }} className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    style={{ overflow: "hidden", display: "inline-block", lineHeight: 0.95 }}
                >
                    <motion.span
                        variants={wordReveal}
                        style={{ display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export default function HeroSection({ curtainDone }: HeroProps) {
    const animate = curtainDone ? "visible" : "hidden";

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                textAlign: "center",
                padding: "0 clamp(24px, 4vw, 64px)",
                background: "#0D0D0D", // Base color while loading
                overflow: "hidden",
            }}
        >
            {/* Layer 1: Real Photo with Ken Burns */}
            <div className="absolute inset-0 z-0">
                <div className="hero-photo relative w-full h-full">
                    <Image
                        src="/image copy 2.png"
                        alt="ICONIC LUXE Store Interior"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Layer 2: Gradient Overlays */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.75) 100%)"
                }}
            />

            {/* Layer 3: Noise Texture */}
            <div
                className="absolute inset-0 z-20 noise opacity-[0.04] pointer-events-none"
            />

            {/* Layer 4: Content */}
            <div style={{ position: "relative", zIndex: 30, maxWidth: "1000px", width: "100%" }}>

                {/* Eyebrow */}
                <motion.p
                    variants={fadeIn}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1.2, ease: luxury, delay: 0 }}
                    style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 300,
                        fontSize: "0.6rem",
                        letterSpacing: "0.45em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: "40px",
                    }}
                >
                    Spring / Summer 2025 Collection
                </motion.p>

                {/* Headline — word mask reveal */}
                <motion.h1
                    variants={stagger(0.08, 0.2)}
                    initial="hidden"
                    animate={animate}
                    style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(4.5rem, 12vw, 10.5rem)",
                        fontWeight: 300,
                        lineHeight: 0.9,
                        letterSpacing: "0.04em",
                        color: "var(--champagne)", // Light cream for contrast
                        fontStyle: "italic",
                        marginBottom: "48px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.08em",
                    }}
                >
                    <WordMask words={["WEAR", "WHAT"]} />
                    <WordMask words={["THEY", "REMEMBER"]} />
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1.2, ease: luxury, delay: 0.6 }}
                    style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 300,
                        fontSize: "clamp(0.65rem, 1.4vw, 0.82rem)",
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        color: "rgba(232,224,208,0.7)", // Muted cream
                        marginBottom: "64px",
                    }}
                >
                    Fine jewelry for the iconic woman
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={animate}
                    transition={{ duration: 1.2, ease: luxury, delay: 0.9 }}
                    style={{ display: "inline-block" }}
                >
                    <Link
                        href="#collections"
                        className="btn-gold"
                        style={{
                            border: "1px solid var(--gold)",
                            color: "var(--gold)",
                        }}
                    >
                        Explore the Collection
                    </Link>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={curtainDone ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.1, duration: 1.2, ease: luxury }}
                    style={{
                        position: "absolute",
                        bottom: "-130px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    {/* Animated vertical line — loops */}
                    <motion.div
                        animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
                        style={{
                            width: "1px",
                            height: "54px",
                            background: "linear-gradient(to bottom, var(--gold), transparent)",
                            transformOrigin: "top",
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "0.5rem",
                            letterSpacing: "0.38em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            opacity: 0.8,
                        }}
                    >
                        Scroll
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
