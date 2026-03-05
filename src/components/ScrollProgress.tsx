"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "#C9A84C",
                scaleX,
                transformOrigin: "0%",
                zIndex: 150,
            }}
        />
    );
}
