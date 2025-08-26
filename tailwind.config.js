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
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "30px",
    },
  },
  plugins: [],
};
