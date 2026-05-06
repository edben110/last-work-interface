/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        netflix: '#e50914',
        'netflix-dark': '#141414',
        'netflix-muted': '#111111',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'card-glow': '0 10px 30px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
