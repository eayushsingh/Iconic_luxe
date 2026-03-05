"use client";

import { motion } from "framer-motion";
import { luxury, fadeUp, fadeLeft, fadeRight, lineReveal, stagger, viewport } from "@/lib/motion";

const business = {
    name: "ICONIC LUXE",
    address: "Vinayak City Square Building, 5-A, Sardar Patel Marg, Opposite Puma Showroom, Civil Lines, Prayagraj, Uttar Pradesh 211001",
    phone: "072759 19722",
    phoneHref: "tel:07275919722",
    hours: "Mon – Sun  ·  Open until 10 PM",
    mapsDirections: "https://www.google.com/maps/dir//ICONIC+LUXE,+Vinayak+city+Square+building,+5-A,+Sardar+Patel+Marg,+opposite+to+Puma+showroom,+Civil+Lines,+Prayagraj,+Uttar+Pradesh+211001/@25.442456,81.7458836,15z",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4!2d81.8350662!3d25.4520543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb383a445f6b%3A0xb210228b18bb4b40!2sICONIC%20LUXE!5e0!3m2!1sen!2sin!4v1",
    instagram: "https://www.instagram.com/iconic_luxe_/?hl=en",
    instagramHandle: "@iconic_luxe_",
};

const LocationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
);

const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const infoBlocks = [
    {
        Icon: LocationIcon,
        label: "VISIT",
        content: (
            <p style={{
                fontFamily: "var(--font-montserrat)", fontWeight: 300,
                fontSize: "0.8rem", lineHeight: 1.85,
                color: "rgba(232,224,208,0.65)", letterSpacing: "0.02em",
            }}>
                {business.address}
            </p>
        ),
    },
    {
        Icon: PhoneIcon,
        label: "CALL",
        content: (
            <a
                href={business.phoneHref}
                style={{
                    fontFamily: "var(--font-montserrat)", fontWeight: 300,
                    fontSize: "0.9rem", color: "rgba(232,224,208,0.65)",
                    textDecoration: "none", letterSpacing: "0.06em",
                    transition: "color 0.4s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,224,208,0.65)")}
            >
                {business.phone}
            </a>
        ),
    },
    {
        Icon: ClockIcon,
        label: "HOURS",
        content: (
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <span style={{
                    fontFamily: "var(--font-montserrat)", fontWeight: 300,
                    fontSize: "0.8rem", color: "rgba(232,224,208,0.65)", letterSpacing: "0.04em",
                }}>
                    {business.hours}
                </span>
                <span style={{
                    fontFamily: "var(--font-montserrat)", fontWeight: 400,
                    fontSize: "0.55rem", letterSpacing: "0.2em",
                    border: "1px solid rgba(52,211,153,0.35)",
                    color: "rgba(110,231,183,0.9)",
                    borderRadius: "100px",
                    padding: "3px 10px",
                    display: "inline-flex", alignItems: "center", gap: "5px",
                }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(110,231,183,0.9)", display: "inline-block" }} />
                    OPEN NOW
                </span>
            </div>
        ),
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            style={{ background: "var(--dark)", overflow: "hidden" }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "620px",
                }}
                className="contact-grid"
            >
                {/* ── Left: Info ──────────────────────────────────── */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        padding: "clamp(60px, 8vw, 112px) clamp(32px, 6vw, 96px)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    {/* Eyebrow */}
                    <p style={{
                        fontFamily: "var(--font-montserrat)", fontWeight: 300,
                        fontSize: "0.58rem", letterSpacing: "0.42em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        marginBottom: "18px",
                    }}>
                        Find Us
                    </p>

                    {/* Heading */}
                    <h2 style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                        fontWeight: 300, fontStyle: "italic",
                        color: "var(--champagne)", lineHeight: 1.05,
                        marginBottom: "0",
                    }}>
                        Come Experience<br />Iconic
                    </h2>

                    {/* Gold line */}
                    <div style={{ overflow: "hidden", margin: "36px 0" }}>
                        <motion.div
                            variants={lineReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{ width: "48px", height: "1px", background: "var(--gold)" }}
                        />
                    </div>

                    {/* Info blocks */}
                    <motion.div
                        variants={stagger(0.18, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        style={{ display: "flex", flexDirection: "column", gap: "36px" }}
                    >
                        {infoBlocks.map(({ Icon, label, content }) => (
                            <motion.div key={label} variants={fadeUp} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ marginTop: "2px", flexShrink: 0 }}>
                                    <Icon />
                                </div>
                                <div>
                                    <p style={{
                                        fontFamily: "var(--font-montserrat)", fontWeight: 400,
                                        fontSize: "0.55rem", letterSpacing: "0.32em",
                                        textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                                        marginBottom: "8px",
                                    }}>
                                        {label}
                                    </p>
                                    {content}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social row */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury, delay: 0.5 }}
                        style={{ marginTop: "44px", display: "flex", alignItems: "center", gap: "16px" }}
                    >
                        <a
                            href={business.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ICONIC LUXE on Instagram"
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                color: "rgba(201,168,76,0.5)",
                                textDecoration: "none",
                                transition: "color 0.4s ease",
                                minHeight: "44px",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.5)")}
                        >
                            <InstagramIcon />
                            <span style={{
                                fontFamily: "var(--font-montserrat)", fontWeight: 300,
                                fontSize: "0.6rem", letterSpacing: "0.25em",
                                textTransform: "uppercase",
                            }}>
                                {business.instagramHandle}
                            </span>
                        </a>
                    </motion.div>

                    {/* Directions CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={{ duration: 1.2, ease: luxury, delay: 0.7 }}
                        style={{ marginTop: "44px" }}
                    >
                        <a
                            href={business.mapsDirections}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="get-directions-btn"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "10px",
                                border: "1px solid var(--gold)",
                                color: "var(--gold)",
                                padding: "14px 36px",
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "0.65rem",
                                fontWeight: 400,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                background: "transparent",
                                position: "relative",
                                overflow: "hidden",
                                transition: "color 0.5s ease",
                                zIndex: 0,
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.color = "#0D0D0D";
                                const arrow = el.querySelector(".arrow") as HTMLElement;
                                if (arrow) arrow.style.transform = "translateX(4px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.color = "var(--gold)";
                                const arrow = el.querySelector(".arrow") as HTMLElement;
                                if (arrow) arrow.style.transform = "translateX(0)";
                            }}
                            className="btn-gold"
                        >
                            Get Directions
                            <span className="arrow" style={{ transition: "transform 0.4s ease", display: "inline-block" }}>→</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* ── Right: Map ──────────────────────────────────── */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        position: "relative",
                        minHeight: "500px",
                        overflow: "hidden",
                    }}
                    className="map-col"
                >
                    <iframe
                        src={business.mapsEmbed}
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            display: "block",
                            filter: "grayscale(100%) contrast(1.1) brightness(0.72)",
                            position: "absolute",
                            inset: 0,
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ICONIC LUXE location map"
                    />
                    {/* Gold border frame overlay */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute", inset: "0",
                            border: "1px solid rgba(201,168,76,0.18)",
                            pointerEvents: "none", zIndex: 10,
                        }}
                    />
                    {/* Bottom-left badge */}
                    <div
                        style={{
                            position: "absolute", bottom: "24px", left: "24px", zIndex: 20,
                            background: "rgba(13,13,13,0.85)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            padding: "12px 20px",
                            border: "1px solid rgba(201,168,76,0.2)",
                        }}
                    >
                        <p style={{
                            fontFamily: "var(--font-cormorant)", fontStyle: "italic",
                            fontSize: "1.05rem", color: "var(--gold)", lineHeight: 1.2,
                            marginBottom: "3px",
                        }}>
                            ICONIC LUXE
                        </p>
                        <p style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 300,
                            fontSize: "0.58rem", letterSpacing: "0.12em",
                            color: "rgba(232,224,208,0.5)",
                        }}>
                            Civil Lines, Prayagraj
                        </p>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .map-col { min-height: 350px !important; position: relative !important; height: 350px !important; }
        }
      `}</style>
        </section>
    );
}
