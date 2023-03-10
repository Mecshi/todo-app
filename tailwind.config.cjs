/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      pop: ['Poppins', 'system-ui']

    },
    extend: {
      colors: {
        tahiti: {
          100: '#FCFCFC',
          200: '#FFB43A',
          300: '#E94141',
          400: '#272833',
          500: '#1C1C27',
          600: '#1C1C25'
        }
      }
    }
  },
  plugins: []
}
