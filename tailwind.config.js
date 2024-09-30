/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['"Kaushan Script"'],
        'slab': ['"Roboto Slab"'],
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translatey(0px)',
          },
          '50%': {
            transform: 'translatey(-6px)',
          },
        },
      },
    },
  },
  plugins: [],
}

