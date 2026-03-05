"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { luxury, scaleReveal, fadeUp, fadeIn, wordReveal, stagger, viewport } from "@/lib/motion";

const quoteWords = ["Crafted", "for", "those", "who", "are", "already", "iconic."];

const borderDrawH: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: luxury } },
};
const borderDrawV: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8, ease: luxury, delay: 0.3 } },
};

export default function BrandStatement() {
    return (
        <section
            id="about"
            style={{
                background: "var(--champagne)",
                padding: "clamp(80px, 11vw, 160px) clamp(24px, 5vw, 80px)",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(40px, 6vw, 100px)",
                    alignItems: "center",
                }}
                className="brand-grid group"
            >
                {/* Left — image with drawn border effect */}
                <motion.div
                    variants={scaleReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="relative aspect-[3/4] overflow-hidden"
                >
                    {/* Drawing border — offset ghost frame */}
                    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                        {/* Top edge */}
                        <motion.div
                            variants={borderDrawH}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                right: "-10px",
                                height: "1px",
                                background: "rgba(201,168,76,0.4)",
                            }}
                        />
                        {/* Bottom edge */}
                        <motion.div
                            variants={{ ...borderDrawH, visible: { ...borderDrawH.visible, transition: { duration: 0.8, ease: luxury, delay: 0.15 } } }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                position: "absolute",
                                bottom: "-10px",
                                left: "10px",
                                right: "-10px",
                                height: "1px",
                                background: "rgba(201,168,76,0.4)",
                            }}
                        />
                        {/* Right edge */}
                        <motion.div
                            variants={borderDrawV}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "-10px",
                                bottom: "-10px",
                                width: "1px",
                                background: "rgba(201,168,76,0.4)",
                            }}
                        />
                        {/* Left edge */}
                        <motion.div
                            variants={{ ...borderDrawV, visible: { ...borderDrawV.visible, transition: { duration: 0.8, ease: luxury, delay: 0.45 } } }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                bottom: "-10px",
                                width: "1px",
                                background: "rgba(201,168,76,0.4)",
                            }}
                        />
                    </div>

                    {/* Main image - Real Photo */}
                    <div
                        className="relative w-full h-full z-1 overflow-hidden"
                    >
                        <Image
                            src="/image copy.png"
                            alt="ICONIC LUXE Store Interior"
                            fill
                            className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Corner accents */}
                        {[
                            { top: "20px", left: "20px", borderTop: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" },
                            { top: "20px", right: "20px", borderTop: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" },
                            { bottom: "20px", left: "20px", borderBottom: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" },
                            { bottom: "20px", right: "20px", borderBottom: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" },
                        ].map((s, i) => (
                            <div key={i} className="absolute w-[22px] h-[22px] z-10" style={s} />
                        ))}

                        {/* Bottom caption overlay */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-20"
                        >
                            <p className="text-gold text-[0.6rem] tracking-[0.3em] uppercase font-sans">
                                Civil Lines, Prayagraj
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right — text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 36px)" }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury }}
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "0.58rem",
                            fontWeight: 300,
                            letterSpacing: "0.42em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                        }}
                    >
                        Our Story
                    </motion.p>

                    {/* Quote — word mask reveal */}
                    <motion.blockquote
                        variants={stagger(0.08, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            lineHeight: 1.3,
                            color: "var(--text-primary)",
                            borderLeft: "2px solid var(--gold)",
                            paddingLeft: "28px",
                            margin: 0,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0 0.3em",
                        }}
                    >
                        {quoteWords.map((word, i) => (
                            <span key={i} style={{ overflow: "hidden", display: "inline-block", lineHeight: 1.35 }}>
                                <motion.span variants={wordReveal} style={{ display: "inline-block" }}>
                                    {i === 0 ? `"${word}` : i === quoteWords.length - 1 ? `${word}"` : word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.blockquote>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury, delay: 0.4 }}
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "clamp(0.72rem, 1.2vw, 0.82rem)",
                            fontWeight: 300,
                            lineHeight: 1.95,
                            letterSpacing: "0.04em",
                            color: "rgba(13,13,13,0.6)",
                            maxWidth: "440px",
                        }}
                    >
                        ICONIC LUXE is born from a reverence for craftsmanship and a belief
                        that true luxury is about meaning, not excess.
                        <br />
                        Each piece is a quiet statement — designed for women who have already arrived.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury, delay: 0.8 }}
                    >
                        <a
                            href="#"
                            className="hover-underline"
                            style={{
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "0.65rem",
                                fontWeight: 400,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "var(--text-primary)",
                            }}
                        >
                            Discover Our Philosophy →
                        </a>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) { .brand-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
