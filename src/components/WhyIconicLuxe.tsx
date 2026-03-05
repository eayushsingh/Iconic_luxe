"use client";

import { motion } from "framer-motion";
import { luxury, fadeUp, staggerSlow, viewport } from "@/lib/motion";

// SVG paths use strokeDasharray/strokeDashoffset for "draw" animation
const CrownSVG = () => (
    <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <motion.path
            d="M3 28L7.5 8L15 18.5L22 2L29 18.5L36.5 8L41 28H3Z"
            stroke="#C9A84C"
            strokeWidth="1"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="140"
            initial={{ strokeDashoffset: 140, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease: luxury, delay: 0.3 }}
        />
        <motion.line
            x1="3" y1="31" x2="41" y2="31"
            stroke="#C9A84C" strokeWidth="0.8"
            strokeDasharray="40"
            initial={{ strokeDashoffset: 40, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: luxury, delay: 0.8 }}
        />
        <motion.circle
            cx="22" cy="2" r="1.8" fill="#C9A84C"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: luxury, delay: 1.0 }}
        />
    </svg>
);

const DiamondSVG = () => (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <motion.path
            d="M18 3L34 14L18 37L2 14L18 3Z"
            stroke="#C9A84C"
            strokeWidth="1"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease: luxury, delay: 0.3 }}
        />
        <motion.path
            d="M2 14H34"
            stroke="#C9A84C" strokeWidth="0.8"
            strokeDasharray="34"
            initial={{ strokeDashoffset: 34, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: luxury, delay: 0.9 }}
        />
        <motion.path
            d="M10 14L18 3L26 14"
            stroke="#C9A84C" strokeWidth="0.5" opacity={0.5}
            strokeDasharray="30"
            initial={{ strokeDashoffset: 30, opacity: 0 }}
            whileInView={{ strokeDashoffset: 0, opacity: 0.5 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: luxury, delay: 1.1 }}
        />
    </svg>
);

const RibbonSVG = () => (
    <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {[
            "M22 17 C22 17 4 10 4 5 C4 2.5 7 1 10 3 C15 6 22 17 22 17Z",
            "M22 17 C22 17 40 10 40 5 C40 2.5 37 1 34 3 C29 6 22 17 22 17Z",
            "M22 17 C22 17 4 24 4 29 C4 31.5 7 33 10 31 C15 28 22 17 22 17Z",
            "M22 17 C22 17 40 24 40 29 C40 31.5 37 33 34 31 C29 28 22 17 22 17Z",
        ].map((d, i) => (
            <motion.path
                key={i}
                d={d}
                stroke="#C9A84C"
                strokeWidth="1"
                fill="none"
                strokeLinejoin="round"
                strokeDasharray="60"
                initial={{ strokeDashoffset: 60, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 1.0, ease: luxury, delay: 0.3 + i * 0.12 }}
            />
        ))}
        <motion.circle
            cx="22" cy="17" r="3"
            stroke="#C9A84C" strokeWidth="0.9" fill="none"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: luxury, delay: 0.9 }}
        />
    </svg>
);

const pillars = [
    {
        id: "pillar-timeless",
        Icon: CrownSVG,
        label: "Timeless Design",
        description: "Each piece is designed to transcend seasons — classic enough for life's greatest moments.",
    },
    {
        id: "pillar-ethical",
        Icon: DiamondSVG,
        label: "Ethically Sourced",
        description: "Every gemstone and metal is responsibly sourced, with full traceability from mine to showcase.",
    },
    {
        id: "pillar-guarantee",
        Icon: RibbonSVG,
        label: "Lifetime Guarantee",
        description: "Our commitment doesn't end at purchase. Every ICONIC LUXE piece is guaranteed for life.",
    },
];

export default function WhyIconicLuxe() {
    return (
        <section
            id="why"
            style={{ padding: "clamp(80px, 11vw, 160px) clamp(24px, 5vw, 80px)", background: "var(--bg)" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury }}
                    style={{ textAlign: "center", marginBottom: "clamp(56px, 8vw, 110px)" }}
                >
                    <p style={{
                        fontFamily: "var(--font-montserrat)", fontWeight: 300,
                        fontSize: "0.58rem", letterSpacing: "0.42em",
                        textTransform: "uppercase", color: "var(--gold)", marginBottom: "18px",
                    }}>
                        Our Promise
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                        fontWeight: 300, fontStyle: "italic", letterSpacing: "0.1em", color: "var(--text-primary)",
                    }}>
                        Why ICONIC LUXE
                    </h2>
                </motion.div>

                {/* Pillars */}
                <motion.div
                    variants={staggerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "clamp(32px, 5vw, 80px)",
                    }}
                    className="pillars-grid"
                >
                    {pillars.map((pillar) => (
                        <motion.div
                            key={pillar.id}
                            id={pillar.id}
                            variants={fadeUp}
                            style={{
                                display: "flex", flexDirection: "column",
                                alignItems: "center", textAlign: "center", gap: "20px",
                            }}
                        >
                            {/* Top vertical line */}
                            <div style={{
                                width: "1px", height: "44px",
                                background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.45))",
                            }} />

                            {/* SVG icon — draws itself via strokeDashoffset */}
                            <div style={{ width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <pillar.Icon />
                            </div>

                            {/* Label */}
                            <h3 style={{
                                fontFamily: "var(--font-montserrat)", fontSize: "0.65rem",
                                fontWeight: 500, letterSpacing: "0.28em",
                                textTransform: "uppercase", color: "var(--text-primary)",
                            }}>
                                {pillar.label}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontFamily: "var(--font-montserrat)", fontSize: "0.78rem",
                                fontWeight: 300, lineHeight: 1.9,
                                color: "rgba(13,13,13,0.58)", maxWidth: "260px", letterSpacing: "0.02em",
                            }}>
                                {pillar.description}
                            </p>

                            {/* Bottom vertical line */}
                            <div style={{
                                width: "1px", height: "44px",
                                background: "linear-gradient(to bottom, rgba(201,168,76,0.45), transparent)",
                            }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
        </section>
    );
}
