/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'color-letter-white': '#ffffff',
        'color-bg-principal': '#1b9dff',
        'color-bg-button': '#93d64b',
        'color-color-hover-button': '#f7d9bc',
        'color-bg-hover-button': '#e58628',
      },
    },
  },
  plugins: [],
};
