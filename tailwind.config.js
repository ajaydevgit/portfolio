/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Arial Narrow"', "Arial", "sans-serif"],
        body: ['"Inter"', "Arial", "sans-serif"],
        mono: ['"IBM Plex Mono"', '"SFMono-Regular"', "Consolas", "monospace"],
      },
      colors: {
        ink: "#11070a",
        paper: "#f4eadf",
        cobalt: "#6f1d2b",
        ember: "#c23645",
        acid: "#f1b07a",
        steel: "#a89691",
      },
      boxShadow: {
        hard: "8px 8px 0 #101010",
      },
    },
  },
  plugins: [],
};
