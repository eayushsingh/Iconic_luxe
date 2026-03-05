"use client";

import { motion } from "framer-motion";
import { luxury, fadeUp, scaleReveal, stagger, staggerMed, viewport } from "@/lib/motion";

const business = {
    rating: "5.0",
    reviewCount: 124,
    mapsDirections: "https://www.google.com/maps/dir//ICONIC+LUXE,+Vinayak+city+Square+building,+5-A,+Sardar+Patel+Marg,+opposite+to+Puma+showroom,+Civil+Lines,+Prayagraj,+Uttar+Pradesh+211001/@25.442456,81.7458836,15z",
};

const reviews = [
    {
        initial: "V",
        name: "Verified Customer",
        text: "Fabric quality and staff service is fantastic. The collection is absolutely premium.",
        stars: 5,
    },
    {
        initial: "R",
        name: "Verified Customer",
        text: "Quality with affordable price. Best shop for clothing accessories in Prayagraj.",
        stars: 5,
    },
    {
        initial: "A",
        name: "Verified Customer",
        text: "Premium collection and staff behavior was too good — highly recommend a visit!",
        stars: 5,
    },
];

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const GoogleGIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export default function ReviewsSection() {
    return (
        <section
            id="reviews"
            style={{
                background: "var(--bg)",
                padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

                {/* ── Heading block ──────────────────────────────── */}
                <motion.div
                    variants={stagger(0.14, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{ textAlign: "center", marginBottom: "clamp(56px, 8vw, 100px)" }}
                >
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 300,
                            fontSize: "0.58rem", letterSpacing: "0.42em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            marginBottom: "20px",
                        }}
                    >
                        What They Say
                    </motion.p>

                    {/* Rating number */}
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontFamily: "var(--font-cormorant)", fontWeight: 300,
                            fontSize: "clamp(5rem, 12vw, 8rem)", lineHeight: 0.9,
                            color: "var(--text-primary)", marginBottom: "20px",
                        }}
                    >
                        {business.rating}
                    </motion.p>

                    {/* Stars */}
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: "flex", justifyContent: "center", gap: "6px",
                            marginBottom: "16px",
                        }}
                    >
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </motion.div>

                    {/* Review count */}
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 300,
                            fontSize: "0.72rem", letterSpacing: "0.28em",
                            color: "rgba(13,13,13,0.45)", marginBottom: "28px",
                        }}
                    >
                        {business.reviewCount} Verified Reviews on Google
                    </motion.p>

                    {/* Gold divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={viewport}
                        transition={{ duration: 1.0, ease: luxury, delay: 0.4 }}
                        style={{ width: "64px", height: "1px", background: "var(--gold)", margin: "0 auto", originX: "50%" }}
                    />
                </motion.div>

                {/* ── Review cards ───────────────────────────────── */}
                <motion.div
                    variants={staggerMed}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "clamp(12px, 2vw, 24px)",
                    }}
                    className="reviews-grid"
                >
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            variants={scaleReveal}
                            style={{
                                background: "#fff",
                                border: "1px solid rgba(201,168,76,0.12)",
                                padding: "clamp(28px, 3vw, 40px)",
                                display: "flex",
                                flexDirection: "column",
                                cursor: "default",
                                transition: "border-color 0.7s ease, box-shadow 0.7s ease",
                            }}
                            whileHover={{
                                boxShadow: "0 8px 40px rgba(201,168,76,0.09)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.12)";
                            }}
                        >
                            {/* Avatar */}
                            <div
                                style={{
                                    width: "48px", height: "48px",
                                    background: "var(--dark)",
                                    borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "16px",
                                }}
                            >
                                <span style={{
                                    fontFamily: "var(--font-cormorant)", fontStyle: "italic",
                                    fontSize: "1.35rem", color: "var(--champagne)", fontWeight: 400,
                                }}>
                                    {review.initial}
                                </span>
                            </div>

                            {/* Stars */}
                            <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                                {Array.from({ length: review.stars }).map((_, j) => (
                                    <StarIcon key={j} />
                                ))}
                            </div>

                            {/* Opening quote + text */}
                            <div style={{ flex: 1 }}>
                                <span style={{
                                    fontFamily: "var(--font-cormorant)", fontSize: "3.5rem",
                                    color: "var(--gold)", lineHeight: 0.6,
                                    display: "block", marginBottom: "8px", opacity: 0.6,
                                }}>
                                    "
                                </span>
                                <p style={{
                                    fontFamily: "var(--font-cormorant)", fontStyle: "italic",
                                    fontSize: "1.2rem", lineHeight: 1.7,
                                    color: "rgba(13,13,13,0.78)",
                                }}>
                                    {review.text}
                                </p>
                            </div>

                            {/* Footer */}
                            <p style={{
                                fontFamily: "var(--font-montserrat)", fontWeight: 300,
                                fontSize: "0.55rem", letterSpacing: "0.25em",
                                textTransform: "uppercase", color: "rgba(13,13,13,0.28)",
                                marginTop: "24px",
                                paddingTop: "20px",
                                borderTop: "1px solid rgba(201,168,76,0.08)",
                            }}>
                                — Google Review
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Google badge ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury, delay: 0.3 }}
                    style={{ marginTop: "clamp(40px, 5vw, 64px)", display: "flex", justifyContent: "center" }}
                >
                    <a
                        href={business.mapsDirections}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Verified on Google"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "10px",
                            textDecoration: "none",
                            color: "rgba(13,13,13,0.3)",
                            transition: "color 0.4s ease",
                            minHeight: "44px",
                            padding: "8px 16px",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(13,13,13,0.65)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(13,13,13,0.3)")}
                    >
                        <GoogleGIcon />
                        <span style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 300,
                            fontSize: "0.6rem", letterSpacing: "0.28em",
                            textTransform: "uppercase",
                        }}>
                            Verified on Google
                        </span>
                    </a>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </section>
    );
}
