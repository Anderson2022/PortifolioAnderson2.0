module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/Front/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        base: '#e8e4df', surface: '#f0ece7', raised: '#f5f1ec',
        deep: '#ddd8d2', deepest: '#d2cdc6', teal: '#17191f',
        tealdark: '#050506', mint: '#484d58', coral: '#df5f52',
        amber: '#d88d22', sky: '#347fc0', plum: '#7656b5',
        ink: '#2d3040', muted: '#7a7e8f', faint: '#a5a8b6',
      },
      fontFamily: {
        display: ['Space Grotesk', 'IBM Plex Sans', 'sans-serif'],
        body: ['IBM Plex Sans', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
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
