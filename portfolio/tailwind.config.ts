import type { Config } from "tailwindcss";
import { blackA, violet, mauve } from "@radix-ui/colors";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                ...blackA,
                ...violet,
                ...mauve,
            },
            fontFamily: {
                bebas: ["Bebas Neue", "sans-serif"],
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "white"
                    }
                }
            },
            animation: {
                typing: "typing 4.8s steps(32) infinite alternate, blink 0.8s infinite"
            }
        },
    },
    plugins: [],
} satisfies Config;
