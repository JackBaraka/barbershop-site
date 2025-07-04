import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Added components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Example custom color
        secondary: "#2d3748",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font
      },
    },
  },
  plugins: [forms],
}
// Note: Ensure that you have the necessary Tailwind CSS plugins installed in your project.
// You can install them using npm or yarn: