/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'not-found': "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",

      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        'brandPrimary/100': '#f8d4e5',
        'brandPrimary/200': '#f1aaca',
        'brandPrimary/300': '#eb7fb0',
        'brandPrimary/400': '#e45595',
        'brandPrimary/500': '#F4A424',
        'brandPrimary/600': '#DB9314',
        'brandPrimary/700': '##B27100',
        'brandPrimary/800': '#AA6A00',
        'brandPrimary/900': '#9D6C1B',
        'brandSecondary/100': '#fbd9d3',
        'brandSecondary/200': '#f7b3a6',
        'brandSecondary/300': '#f38d7a',
        'brandSecondary/400': '#ef674d',
        'brandSecondary/500': '#eb4121',
        'brandSecondary/600': '#bc341a',
        'brandSecondary/700': '#8d2714',
        'brandSecondary/800': '#5e1a0d',
        'brandSecondary/900': '#2f0d07',
      },
    },
  },
  plugins: [],
}