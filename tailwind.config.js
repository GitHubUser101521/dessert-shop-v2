/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#faf8f6'
        }
    },
  },
  plugins: [],
}

