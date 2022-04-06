module.exports = {
  content: ['.*/*/**/*.{html,js}', './index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-sm': "url('/src/asset/hero-code-sm.png.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
