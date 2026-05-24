import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          100: '#A7E0C2',
          200: '#8fd6b3'
        },
        softblue: {
          100: '#B7D7F7',
          200: '#9fc8f1'
        },
        charcoal: '#2E3440',
        slategray: '#6B7280',
        lightbg: '#F1F3F6'
      },
      fontFamily: {
        heading: ['var(--font-space)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
