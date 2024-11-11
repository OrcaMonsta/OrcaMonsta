/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cornerstone: ['var(--font-cornerstone)'],
      },
      animation: {
        'slow-spin': 'slow-spin 30s linear infinite',
        '3d-spin': 'rotate3d 20s linear infinite',
      },
    },
  },
  plugins: [],
}

