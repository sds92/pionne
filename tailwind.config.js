module.exports = {
  content: ['./pages/**/*.{html,tsx}', './components/**/*.{html,tsx}', './layout/**/*.{html,tsx}'],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 0.2s ease',
        hovertranslate: 'hovertranslate 1s ease-in-out',
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        hovertranslate: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};
