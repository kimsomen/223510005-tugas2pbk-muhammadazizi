// tailwind.config.js using ES Module syntax
import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/flowbite//*.js',
    './src/App.vue'
    // Add other paths here where you use Tailwind classes (e.g., paths to your HTML or JS files)
  ],
  theme: {
    extend: {}
  },
  plugins: [flowbitePlugin]
}