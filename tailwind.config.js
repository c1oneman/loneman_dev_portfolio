module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: [
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "'Segoe UI Emoji'",
        "Segoe UI Symbol",
      ],
      mono: [
        "'SFMono-Regular'",
        "Menlo",
        "Consolas",
        "'Liberation Mono'",
        "Courier",
        "monospace",
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
