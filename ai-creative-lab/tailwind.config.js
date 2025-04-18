/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f97316",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}
