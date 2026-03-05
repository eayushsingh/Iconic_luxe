import { Variants } from "framer-motion";

/** The ICONIC LUXE luxury easing curve — silky deceleration, no bounce */
export const luxury: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Standard viewport config for all whileInView triggers */
export const viewport = { once: true, amount: 0.2 } as const;

// ─── Base variants ────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: luxury } },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4, ease: luxury } },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: luxury } },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: luxury } },
};

export const scaleReveal: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.4, ease: luxury },
    },
};

export const lineReveal: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.0, ease: luxury, delay: 0.4 },
    },
};

export const lineRevealCenter: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.9, ease: luxury, delay: 0.5 },
    },
};

/** Word/letter mask reveal — parent must be overflow:hidden */
export const wordReveal: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: "0%",
        transition: { duration: 0.9, ease: luxury },
    },
};

// ─── Stagger containers ───────────────────────────────────────────────────────

export const stagger = (delay = 0.15, delayChildren = 0.1): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren: delay, delayChildren } },
});

export const staggerFast = stagger(0.06, 0.05);
export const staggerMed = stagger(0.12, 0.1);
export const staggerSlow = stagger(0.2, 0.15);

// ─── Curtain ─────────────────────────────────────────────────────────────────

export const curtainVariants: Variants = {
    initial: { scaleY: 1 },
    exit: {
        scaleY: 0,
        transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
    },
};
