"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { curtainVariants, fadeIn } from "@/lib/motion";

interface CurtainProps {
    onComplete: () => void;
}

export default function Curtain({ onComplete }: CurtainProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Start exit after a brief moment to let the logo be seen
        const timer = setTimeout(() => {
            setVisible(false);
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {visible && (
                <motion.div
                    key="curtain"
                    variants={curtainVariants}
                    initial="initial"
                    exit="exit"
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "#0D0D0D",
                        zIndex: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformOrigin: "top",
                    }}
                >
                    {/* Logo centered on curtain — white version */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                    >
                        <Image
                            src="/images/iconic_luxe_no_bg.png"
                            alt="ICONIC LUXE"
                            width={160}
                            height={80}
                            priority
                            style={{
                                objectFit: "contain",
                                height: "72px",
                                width: "auto",
                                filter: "brightness(0) invert(1)",
                                opacity: 0.9,
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
