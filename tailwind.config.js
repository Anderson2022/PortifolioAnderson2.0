module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/Front/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      maxHeight: {
        '1000px': '1000px',
      },
      backgroundImage: {
        'hero-pattern': "url('public/assets/red.png')",
        
      }
    },
    animation: {
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
    },
    keyframes: {
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),
      function({ addUtilities }) {
    addUtilities({
      '.transition-max-height': {
        transition: 'max-height 0.3s ease-in-out',
      },
    });
  },],
  darkMode: "class"
};
