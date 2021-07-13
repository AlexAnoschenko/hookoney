module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      defaultBg: "#16181b",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
