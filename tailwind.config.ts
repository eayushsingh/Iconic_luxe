import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
                sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
            },
            colors: {
                gold: "#C9A84C",
                "gold-light": "#E8C96A",
                champagne: "#E8E0D0",
                "off-white": "#F5F4F2",
                "near-black": "#0D0D0D",
            },
            letterSpacing: {
                editorial: "0.3em",
                luxury: "0.45em",
            },
        },
    },
    plugins: [],
    plugins: [],
    plugins: [],
};

export default config;
