"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { luxury, scaleReveal, stagger, viewport } from "@/lib/motion";

const CurtainWipe = ({ delay = 0.1 }: { delay?: number }) => (
    <motion.div
        className="absolute inset-0 bg-[#0D0D0D] z-10 origin-left"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay }}
    />
);

export default function InsideIconic() {
    return (
        <section
            id="inside"
            style={{
                background: "#0D0D0D",
                padding: "clamp(80px, 11vw, 160px) clamp(24px, 5vw, 80px)",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
                {/* Heading Block */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury }}
                    style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}
                >
                    <p style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.58rem",
                        fontWeight: 300,
                        letterSpacing: "0.42em",
                        textTransform: "uppercase",
                        color: "rgba(201,168,76,0.5)",
                        marginBottom: "16px",
                    }}>
                        The Experience
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(3rem, 6vw, 5rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "var(--champagne)",
                        lineHeight: 1.1,
                    }}>
                        Inside Our World
                    </h2>
                    <div style={{
                        width: "48px",
                        height: "1px",
                        background: "var(--gold)",
                        marginTop: "24px",
                    }} />
                </motion.div>

                {/* Asymmetric Grid */}
                <motion.div
                    variants={stagger(0.15, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="inside-grid"
                >
                    {/* Photo 1 — Large Left */}
                    <motion.div
                        variants={scaleReveal}
                        className="inside-item large relative overflow-hidden h-[600px] md:h-[680px]"
                        style={{ gridColumn: "span 7", gridRow: "span 2" }}
                    >
                        <CurtainWipe delay={0.1} />
                        <Image
                            src="/image copy 2.png"
                            alt="Iconic Luxe Showroom"
                            fill
                            className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Photo 2 — Top Right */}
                    <motion.div
                        variants={scaleReveal}
                        className="inside-item top relative overflow-hidden h-[300px] md:h-[332px]"
                        style={{ gridColumn: "span 5", gridRow: "span 1" }}
                    >
                        <CurtainWipe delay={0.25} />
                        <Image
                            src="/image copy.png"
                            alt="Interior Detail"
                            fill
                            className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </motion.div>

                    {/* Photo 3 — Bottom Right */}
                    <motion.div
                        variants={scaleReveal}
                        className="inside-item bottom relative overflow-hidden h-[300px] md:h-[332px]"
                        style={{ gridColumn: "span 5", gridRow: "span 1" }}
                    >
                        <CurtainWipe delay={0.4} />
                        <Image
                            src="/image.png"
                            alt="Premium Collection Display"
                            fill
                            className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        {/* Label Badge */}
                        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-gold/20 px-5 py-3 z-20">
                            <p className="text-gold text-[0.6rem] tracking-[0.3em] font-sans uppercase">
                                Premium Collection
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
        .inside-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .inside-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .inside-item {
            height: auto !important;
            aspect-ratio: 16/9;
          }
          .inside-item.top, .inside-item.bottom {
            aspect-ratio: 4/3;
          }
        }
      `}</style>
        </section>
    );
}
