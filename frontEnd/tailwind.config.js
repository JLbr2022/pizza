/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        avatar: "url('/src/public/images/avatar.svg')"
      }
    },
    plugins: []
  }
}
