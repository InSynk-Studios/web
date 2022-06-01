module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 10s forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(-10, -10)",
          },
          "50%": {
            transform: "translate(-10rem, 25rem)",
          },
          "80%": {
            transform: "translate(-15rem, 30rem)",
          },
          "100%": {
            transform: "translate(-20rem, 35rem)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      inset: ["group-hover"],
    },
  },
  plugins: [],
};
