import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        foreground: "white",
        'dark': "#131313",
        'gold': "#c9a66d",
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
