"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { luxury, fadeUp, fadeIn, wordReveal, stagger, viewport } from "@/lib/motion";

const business = {
    mapsDirections: "https://www.google.com/maps/dir//ICONIC+LUXE,+Vinayak+city+Square+building,+5-A,+Sardar+Patel+Marg,+opposite+to+Puma+showroom,+Civil+Lines,+Prayagraj,+Uttar+Pradesh+211001/@25.442456,81.7458836,15z",
    instagram: "https://www.instagram.com/iconic_luxe_/?hl=en",
    instagramHandle: "@iconic_luxe_",
};

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const line1Words = ["YOUR", "ICONIC", "LOOK"];
const line2Words = ["AWAITS."];

export default function CtaBanner() {
    return (
        <section
            id="cta-banner"
            style={{
                background: "var(--dark)",
                padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Radial glow */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury }}
                    style={{
                        fontFamily: "var(--font-montserrat)", fontWeight: 300,
                        fontSize: "0.58rem", letterSpacing: "0.42em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                        marginBottom: "48px",
                    }}
                >
                    Civil Lines, Prayagraj
                </motion.p>

                {/* Headline line 1 */}
                <motion.div
                    variants={stagger(0.1, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(3.5rem, 9vw, 8rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        lineHeight: 0.9,
                        color: "var(--champagne)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0 0.3em",
                        marginBottom: "0.05em",
                    }}
                >
                    {line1Words.map((word) => (
                        <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
                            <motion.span variants={wordReveal} style={{ display: "inline-block" }}>
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.div>

                {/* Headline line 2 — gold */}
                <motion.div
                    variants={stagger(0.1, 0.25)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(3.5rem, 9vw, 8rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        lineHeight: 0.9,
                        color: "var(--gold)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0 0.3em",
                        marginBottom: "clamp(32px, 4vw, 56px)",
                    }}
                >
                    {line2Words.map((word) => (
                        <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
                            <motion.span variants={wordReveal} style={{ display: "inline-block" }}>
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.div>

                {/* Subtext */}
                <motion.p
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ duration: 1.4, ease: luxury, delay: 0.3 }}
                    style={{
                        fontFamily: "var(--font-montserrat)", fontWeight: 300,
                        fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
                        letterSpacing: "0.3em", textTransform: "uppercase",
                        color: "rgba(232,224,208,0.38)", marginBottom: "clamp(40px, 5vw, 64px)",
                    }}
                >
                    Visit us in Civil Lines, Prayagraj
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury, delay: 0.8 }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "16px",
                        justifyContent: "center",
                        marginBottom: "clamp(32px, 4vw, 56px)",
                    }}
                    className="cta-buttons"
                >
                    {/* Primary */}
                    <Link
                        href="#collections"
                        id="cta-shop-now"
                        style={{
                            display: "inline-block",
                            background: "var(--gold)",
                            color: "#0D0D0D",
                            padding: "16px 44px",
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "0.65rem",
                            fontWeight: 500,
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "background 0.4s ease, color 0.4s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.85)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")}
                    >
                        Shop Now
                    </Link>

                    {/* Secondary */}
                    <a
                        href={business.mapsDirections}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="cta-get-directions"
                        className="btn-gold"
                        style={{
                            display: "inline-block",
                            border: "1px solid var(--gold)",
                            color: "var(--gold)",
                            padding: "16px 44px",
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "0.65rem",
                            fontWeight: 400,
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                        }}
                    >
                        Get Directions
                    </a>
                </motion.div>

                {/* Instagram link */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ duration: 1.4, ease: luxury, delay: 1.2 }}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <a
                        href={business.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow ICONIC LUXE on Instagram"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "10px",
                            color: "rgba(201,168,76,0.4)",
                            textDecoration: "none",
                            transition: "color 0.4s ease",
                            minHeight: "44px",
                            padding: "8px 0",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.4)")}
                    >
                        <InstagramIcon />
                        <span style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 300,
                            fontSize: "0.6rem", letterSpacing: "0.28em",
                            textTransform: "uppercase",
                        }}>
                            {business.instagramHandle}
                        </span>
                    </a>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 480px) {
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          .cta-buttons a { width: 100%; max-width: 280px; text-align: center; }
        }
      `}</style>
        </section>
    );
}
