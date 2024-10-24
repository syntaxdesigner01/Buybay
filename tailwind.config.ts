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
        secondary: '#FFBD27',
        background: '#F5F2F9',
        text: '#000000',
        textTitle:'#943C50',
        imageCardBg:'#F2F3F5',
        Gray:'#00000080',
        Yellow:'#FFC21F'
      },
    },
  },
  plugins: [],
};
export default config;
