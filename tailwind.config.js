/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e4e4e4",
        gray: "#222",
        oldlace: "#f4eddd",
        linen: "#f1ebdf",
        red: "#e50010",
        black: "#000",
        dimgray: "#707070",
        whitesmoke: {
          "100": "#faf9f8",
          "200": "#f3f3f3",
        },
        lightskyblue: "#93cdff",
      },
      fontFamily: {
        "ms-pgothic": "'MS PGothic'",
        roboto: "Roboto",
      },
    },
    fontSize: {
      smi: "13px",
      "2xs": "11px",
      base: "16px",
      sm: "14px",
      "23xl": "42px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
