/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';  // Use `import` instead of `require`

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    forms,  // Use the imported variable directly here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
