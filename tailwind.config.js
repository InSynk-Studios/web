module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
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
