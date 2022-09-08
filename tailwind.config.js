/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant'],
      },
    },
    container: {
      padding: '4rem',
      center: true,
    },

    screens: {
      'tablet': '648px',
      'laptop': '1000px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
