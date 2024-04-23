
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
};
