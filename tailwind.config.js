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
  darkMode: 'class', // Enable dark mode via class strategy
  safelist: [
    'bg-primary',
    'bg-secondary',
    'text-primary',
    'text-secondary',
    'font-sans',
  ], // Ensure these classes are always included in the output CSS
  corePlugins: {
    preflight: true, // Enable Tailwind's base styles
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['visited', 'group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true, // Only generate hover styles when supported
  },
  plugins: [forms],
}
/**
 * Additional Tailwind CSS configuration options for enhanced customization.
 * See https://tailwindcss.com/docs/configuration for more details.
 */
// Note: Ensure that you have the necessary Tailwind CSS plugins installed in your project.
// You can install them using npm or yarn: