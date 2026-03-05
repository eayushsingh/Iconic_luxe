"use client";

import { motion } from "framer-motion";
import { luxury, scaleReveal, wordReveal, lineRevealCenter, staggerMed, viewport } from "@/lib/motion";

const products = [
    {
        id: "prod-lumiere",
        name: "Lumière Chain Necklace",
        category: "Necklaces",
        price: "$2,850",
        gradient: "linear-gradient(150deg, #e5ddd2 0%, #cfc5b4 100%)",
        aspect: "3/4",
    },
    {
        id: "prod-eternelle",
        name: "Éternelle Solitaire Ring",
        category: "Rings",
        price: "$4,200",
        gradient: "linear-gradient(150deg, #ece7de 0%, #d9d0c1 100%)",
        aspect: "1/1",
    },
    {
        id: "prod-aurore",
        name: "Aurore Drop Earrings",
        category: "Earrings",
        price: "$1,650",
        gradient: "linear-gradient(150deg, #e8e0d4 0%, #d2c9b8 100%)",
        aspect: "3/4",
    },
];

const headingStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

export default function CollectionGrid() {
    return (
        <section
            id="collections"
            style={{ padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)", background: "var(--bg)" }}
        >
            <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

                {/* Heading — word mask reveal */}
                <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 100px)" }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury }}
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 300,
                            fontSize: "0.58rem",
                            letterSpacing: "0.42em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            marginBottom: "20px",
                        }}
                    >
                        Curated Selection
                    </motion.p>

                    <motion.h2
                        variants={headingStagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 8vw, 7rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            letterSpacing: "0.1em",
                            color: "var(--text-primary)",
                            marginBottom: "28px",
                            lineHeight: 0.9,
                            display: "flex",
                            justifyContent: "center",
                            gap: "0 0.3em",
                            flexWrap: "wrap",
                        }}
                    >
                        {["THE", "COLLECTION"].map((word) => (
                            <span key={word} style={{ overflow: "hidden", display: "inline-block" }}>
                                <motion.span variants={wordReveal} style={{ display: "inline-block" }}>
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h2>

                    {/* Gold underline — draws in from center */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <motion.div
                            variants={lineRevealCenter}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                width: "48px",
                                height: "1px",
                                background: "var(--gold)",
                                originX: "50%",
                            }}
                        />
                    </div>
                </div>

                {/* Cards grid */}
                <motion.div
                    variants={staggerMed}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "clamp(20px, 3vw, 40px)",
                        alignItems: "end",
                    }}
                    className="collection-grid"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            id={product.id}
                            variants={scaleReveal}
                            className="product-card"
                            whileHover={{ y: -8, transition: { duration: 0.5, ease: luxury } }}
                        >
                            {/* Image */}
                            <motion.div
                                className="card-img"
                                style={{
                                    aspectRatio: product.aspect,
                                    background: product.gradient,
                                    border: "1px solid rgba(201,168,76,0.3)",
                                    marginBottom: "22px",
                                    position: "relative",
                                    overflow: "hidden",
                                    transitionProperty: "border-color, box-shadow",
                                    transitionDuration: "700ms",
                                    transitionTimingFunction: "ease",
                                }}
                                whileHover={{
                                    boxShadow: "0 0 0 1px #C9A84C, 0 20px 60px rgba(201,168,76,0.12)",
                                }}
                                transition={{ duration: 0.7, ease: luxury }}
                            >
                                {/* Inner frame */}
                                <div
                                    aria-hidden="true"
                                    style={{ position: "absolute", inset: "14px", border: "1px solid rgba(201,168,76,0.1)" }}
                                />
                                {/* Gold sparkle mark */}
                                <motion.div
                                    aria-hidden="true"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={viewport}
                                    transition={{ duration: 1.4, ease: luxury, delay: 0.3 }}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "3rem",
                                        fontStyle: "italic",
                                        color: "rgba(201,168,76,0.18)",
                                        fontWeight: 300,
                                        userSelect: "none",
                                    }}
                                >
                                    ✦
                                </motion.div>
                            </motion.div>

                            {/* Text info */}
                            <p style={{
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "0.55rem",
                                fontWeight: 400,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                color: "rgba(13,13,13,0.42)",
                                marginBottom: "8px",
                            }}>
                                {product.category}
                            </p>
                            <h3 style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.35rem",
                                fontWeight: 400,
                                fontStyle: "italic",
                                color: "var(--text-primary)",
                                marginBottom: "8px",
                                lineHeight: 1.2,
                            }}>
                                {product.name}
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "0.72rem",
                                fontWeight: 400,
                                color: "var(--gold)",
                                letterSpacing: "0.08em",
                            }}>
                                {product.price}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury }}
                    style={{ textAlign: "center", marginTop: "clamp(48px, 6vw, 80px)" }}
                >
                    <a href="#" className="btn-gold">View All Pieces</a>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 900px) { .collection-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .collection-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
