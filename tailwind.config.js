import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
}
// Note: Ensure that you have the necessary Tailwind CSS plugins installed in your project.
// You can install them using npm or yarn: