import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0989FF',
        // secondary: '#EFF0ED',
        background: '#F2F3F5',
        text: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
