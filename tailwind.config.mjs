/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00364a',
        secondary: '#0d4f66',
        accent: '#89c7d9',
        'accent-light': '#9ed2e5',
        'bg-alt': '#f8fafb',
        'bg-blue': '#e1eef2',
        'bg-soft': '#fdfdfd',
        'text-primary': '#2c3e50',
        'text-secondary': '#7f8c8d',
        'border-light': '#e0e0e0',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2.5rem, 5vw, 4rem)',
        section: 'clamp(2rem, 4vw, 3rem)',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.1)',
        hover: '0 4px 20px rgba(0, 0, 0, 0.15)',
        deep: '0 8px 32px rgba(0, 0, 0, 0.2)',
        glow: '0 0 20px rgba(137, 199, 217, 0.3)',
      },
    },
  },
  plugins: [],
};
