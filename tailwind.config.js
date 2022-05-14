module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        load: {
          "0%": {
            maxWidth: "0",
          },
          "100%": {
            maxWidth: "100%",
            boxShadow: "0 0 15px #f3c623",
          },
        },
      },
      animation: {
        load: "progress 2s",
      },
    },
  },
  plugins: [],
};
