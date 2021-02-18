module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2BD659',
        secondary: {
          dark: '#393A10',
          light: '#E8E9AF',
        },
        terciary: {
          dark: '#2274A5',
          light: '78BCE3',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
