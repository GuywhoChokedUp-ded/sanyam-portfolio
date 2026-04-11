/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          dark: "#131519",
          light: "#f4f2ee"
        },
        panel: {
          dark: "#1a1d23",
          light: "#ebe7df"
        },
        accent: {
          DEFAULT: "#264677",
          soft: "#355d96"
        },
        text: {
          dark: "#e7e5e1",
          light: "#1f252d"
        }
      },
      boxShadow: {
        lift: "0 18px 42px rgba(0, 0, 0, 0.24)"
      }
    }
  },
  plugins: []
};
