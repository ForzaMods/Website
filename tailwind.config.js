module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins", "ui-serif"'],
      },
      spacing: {
        '0.75' : '0.1875rem',
        '1.5' : '0.375rem',
        '1.75' : '0.4375rem',
      }, 
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      colors: {
        font: 'var(--text-color)',
        background: 'var(--background-color)',
        accent: 'var(--accent-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      // colors: {
         primary : '#434c5e',
         secondary : '#4c566a',
      //   accent : '#3b4252',
      //   background : '#2e3440',
      //   font : '#f1f1f1',
      // }, 
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}