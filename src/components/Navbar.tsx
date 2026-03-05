"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, X, Menu } from "lucide-react";
import { luxury, fadeIn, fadeUp, stagger } from "@/lib/motion";

interface NavbarProps {
    curtainDone: boolean;
}

const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar({ curtainDone }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(true); // Default to true because Hero is dark

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            setScrolled(scrollPos > 60);

            // Simple logic to switch logo color based on scroll sections
            // Hero (0-800 approx) is dark
            // Collection (800-1600 approx) is light
            // We'll use a more reactive approach or just flip it on scrolled for now
            // as requested by most users unless specified otherwise.
            // But let's follow the "isDark" hint.
            // On start (scrolled=false), bg is dark Hero, so logo should be white.
            // On scrolled=true, bg is light Cream, so logo should be dark.
            setIsDarkBg(scrollPos < 60);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const animate = curtainDone ? "visible" : "hidden";

    return (
        <>
            <nav
                id="navbar"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 md:px-16 ${scrolled
                        ? "bg-[#F5F4F2]/95 backdrop-blur-md border-b border-[#C9A84C]/10 py-3"
                        : "bg-transparent py-6"
                    }`}
                style={{
                    height: scrolled ? "70px" : "90px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="flex items-center justify-between w-full h-full relative">

                    {/* LEFT — Nav Links */}
                    <motion.div
                        className="hidden md:flex items-center gap-10"
                        variants={stagger(0.1, 0)}
                        initial="hidden"
                        animate={animate}
                    >
                        {navLinks.map((item) => (
                            <motion.div key={item.name} variants={fadeUp}>
                                <Link
                                    href={item.href}
                                    className="hover-underline"
                                    style={{
                                        fontFamily: "var(--font-montserrat)",
                                        fontWeight: 300,
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.28em",
                                        textTransform: "uppercase",
                                        color: isDarkBg ? "#F5F4F2" : "#0D0D0D",
                                        transition: "color 0.7s ease",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CENTER — Logo */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate={animate}
                        transition={{ duration: 1.6, ease: luxury, delay: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center p-2"
                    >
                        <Link href="/" aria-label="ICONIC LUXE — Home" className="flex items-center">
                            <Image
                                src="/images/iconic_luxe_no_bg.png"
                                alt="ICONIC LUXE"
                                width={150}
                                height={65}
                                priority
                                className="object-contain transition-all duration-700"
                                style={{
                                    width: scrolled ? "125px" : "155px",
                                    height: "auto",
                                    filter: isDarkBg ? "brightness(0) invert(1)" : "none"
                                }}
                            />
                        </Link>
                    </motion.div>

                    {/* RIGHT — Icons */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate={animate}
                        transition={{ duration: 1.4, ease: luxury, delay: 0.2 }}
                        className="flex items-center gap-6"
                        style={{ color: isDarkBg ? "#F5F4F2" : "#0D0D0D", transition: "color 0.7s ease" }}
                    >
                        <button
                            aria-label="Search"
                            className="opacity-70 hover:opacity-100 transition-opacity"
                            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
                        >
                            <Search size={18} strokeWidth={1.2} />
                        </button>
                        <button
                            aria-label="Shopping Bag"
                            className="opacity-70 hover:opacity-100 transition-opacity"
                            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
                        >
                            <ShoppingBag size={19} strokeWidth={1.2} />
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            id="nav-hamburger"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen(true)}
                            className="md:hidden flex items-center justify-center"
                            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
                        >
                            <Menu size={22} strokeWidth={1.2} />
                        </button>
                    </motion.div>

                </div>
            </nav>

            {/* Mobile overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: luxury }}
                        className="fixed inset-0 z-[100] bg-[#F5F4F2]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-12"
                    >
                        {/* Close button */}
                        <button
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-8 right-8 text-[#0D0D0D] opacity-60 hover:opacity-100 transition-opacity"
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                        >
                            <X size={26} strokeWidth={1.2} />
                        </button>

                        {/* Nav links */}
                        <motion.div
                            variants={stagger(0.12, 0.2)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center gap-8"
                        >
                            {navLinks.map((item) => (
                                <motion.div key={item.name} variants={fadeUp}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-[#0D0D0D]"
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "3rem",
                                            fontWeight: 300,
                                            fontStyle: "italic",
                                            letterSpacing: "0.08em",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mobile Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-8 flex flex-col items-center gap-4"
                        >
                            <p className="font-montserrat text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A84C]">Follow Us</p>
                            <Link
                                href="https://www.instagram.com/iconic_luxe_/"
                                target="_blank"
                                className="font-montserrat text-xs tracking-widest text-[#0D0D0D]/40"
                            >
                                @iconic_luxe_
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
