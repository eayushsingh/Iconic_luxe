"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { luxury, scaleReveal, fadeUp, fadeIn, lineReveal, staggerFast, viewport } from "@/lib/motion";

const InstagramIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const footerColumns = [
    {
        title: "Shop",
        links: [
            { label: "New Arrivals", href: "#collections" },
            { label: "Collections", href: "#collections" },
            { label: "Necklaces", href: "#collections" },
            { label: "Rings", href: "#collections" },
            { label: "Earrings", href: "#collections" },
            { label: "Bracelets", href: "#collections" },
        ],
    },
    {
        title: "Help",
        links: [
            { label: "Sizing Guide", href: "#" },
            { label: "Care Guide", href: "#" },
            { label: "Shipping & Returns", href: "#" },
            { label: "Contact Us", href: "#contact" },
            { label: "FAQs", href: "#" },
        ],
    },
    {
        title: "Follow",
        links: [
            { label: "@iconic_luxe_", href: "https://www.instagram.com/iconic_luxe_/?hl=en", external: true, isInstagram: true },
            { label: "Pinterest", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Press", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            id="footer"
            style={{ background: "var(--dark)", padding: "clamp(60px, 9vw, 120px) clamp(24px, 5vw, 80px) 52px" }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

                {/* Logo */}
                <motion.div
                    variants={scaleReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", marginBottom: "clamp(48px, 7vw, 96px)", gap: "4px",
                    }}
                >
                    <Image
                        src="/images/iconic_luxe_no_bg.png"
                        alt="ICONIC LUXE"
                        width={140}
                        height={70}
                        style={{
                            objectFit: "contain", height: "64px", width: "auto",
                            filter: "brightness(0) invert(1)", opacity: 0.88,
                        }}
                    />
                    <p style={{
                        fontFamily: "var(--font-montserrat)", fontSize: "0.55rem",
                        fontWeight: 300, letterSpacing: "0.35em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.45)", marginTop: "12px",
                    }}>
                        Fine Jewelry · Civil Lines, Prayagraj
                    </p>

                    {/* Gold line */}
                    <div style={{ width: "100px", marginTop: "20px", overflow: "hidden" }}>
                        <motion.div
                            variants={lineReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            style={{
                                height: "1px",
                                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
                                width: "100%",
                            }}
                        />
                    </div>
                </motion.div>

                {/* 3-column grid */}
                <motion.div
                    variants={staggerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "clamp(32px, 5vw, 64px)",
                        marginBottom: "clamp(48px, 6vw, 80px)",
                        textAlign: "center",
                    }}
                    className="footer-grid"
                >
                    {footerColumns.map((col) => (
                        <motion.div key={col.title} variants={fadeUp}>
                            <h4 style={{
                                fontFamily: "var(--font-montserrat)", fontSize: "0.58rem",
                                fontWeight: 500, letterSpacing: "0.32em",
                                textTransform: "uppercase", color: "var(--gold)", marginBottom: "28px",
                            }}>
                                {col.title}
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                            style={{
                                                fontFamily: "var(--font-montserrat)", fontSize: "0.65rem",
                                                fontWeight: 300, letterSpacing: "0.1em",
                                                color: "rgba(232,224,208,0.4)", textDecoration: "none",
                                                transition: "color 0.5s ease",
                                                display: link.isInstagram ? "inline-flex" : "block",
                                                alignItems: "center",
                                                gap: "8px",
                                                justifyContent: "center",
                                                minHeight: link.isInstagram ? "44px" : undefined,
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.9)")}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,224,208,0.4)")}
                                        >
                                            {link.isInstagram && <InstagramIcon />}
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div style={{ overflow: "hidden", marginBottom: "36px" }}>
                    <motion.div
                        variants={lineReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        style={{ height: "1px", background: "rgba(201,168,76,0.1)" }}
                    />
                </div>

                {/* Copyright */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ duration: 1.2, ease: luxury, delay: 0.6 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}
                >
                    <p style={{
                        fontFamily: "var(--font-montserrat)", fontSize: "0.58rem",
                        fontWeight: 300, letterSpacing: "0.18em",
                        color: "rgba(201,168,76,0.45)", textAlign: "center",
                    }}>
                        © 2025 ICONIC LUXE. All rights reserved. · Civil Lines, Prayagraj, UP 211001
                    </p>
                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
                        {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-montserrat)", fontSize: "0.52rem",
                                    fontWeight: 300, letterSpacing: "0.08em",
                                    color: "rgba(201,168,76,0.22)", textDecoration: "none",
                                    transition: "color 0.5s ease",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.6)")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.22)")}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </footer>
    );
}
