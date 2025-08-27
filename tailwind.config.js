/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xs: { max: "320px" }, // 가장 작은 모바일
      // sm: "375px", // 일반 모바일
      // md: "768px", // 기본값
    },
    fontSize: {
      "3xs": "6px",
      "2xs": "8px",
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "30px",
    },
    extend: {
      colors: {
        black: {
          dark: "#000",
          medium: "#2F2F2F",
        },
        gray: {
          medium: "#8A8A8A",
          light: "#9B9B9B",
        },
        red: {
          medium: "#C23030",
        },
        turquoise: "#18868C",
      },
    },
  },
  plugins: [],
};
