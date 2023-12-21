import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        big: "0 0 20px 20px",
        small: "0 0 12px 12px",
      },
      textColor: {
        "custom-white": "#FAFAFA",
      },
      height: {
        80: "80px",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundColor: {
        "custom-blue": "#1B4A9D",
      },
      borderColor: {
        "custom-blue": "#1B4A9D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        openSans: ["var(--font-openSans)"],
      },
    },
  },
  plugins: [],
};
export default config;
