/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        'button-ping': {
          '0%': {
            'opacity': 1,
            'box-shadow': '#fff 0 0 0 0',
          },
          '100%': {
            'opacity': 0.15,
            'box-shadow': '#6d28d9 0 0 0 12px',
          },
        },
      },
      animation: {
        'button-ping': 'button-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}
