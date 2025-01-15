import type { Config } from "tailwindcss";

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
            typing: "typing 4s steps(28) infinite alternate, blink 1s infinite"
          }
        },
  },
  plugins: [],
} satisfies Config;
