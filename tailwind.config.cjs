/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sd-primary': '#545DFF',
        'sd-success': '#36D189',
        'sd-danger': '#E94948',
        'sd-warning': '#FFDC7D',
        'sd-blacky': '#212121',
        'sd-muted': {
          1: '#C4C4C4',
          2: '#7A7A7A'
        },
        'sd-secondary': {
          1: '#FCFCFF',
          2: '#F3F4FF'
        }
      }
    }
  },
  plugins: []
};
