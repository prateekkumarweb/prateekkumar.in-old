module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  important: true,
  theme: {
    fontFamily: {
      display: ["Noto Sans", "sans-serif"],
      body: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#123456",
      },
    },
  },
  variants: {},
  plugins: [],
};
