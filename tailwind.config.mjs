/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Chế độ tối dựa trên class "dark"
  theme: {
    extend: {
      colors: {
        // background: "var(--background-color-dark)",
        text: "var(--text-color-dark)",
      },
    },
  },
  plugins: [],
};
