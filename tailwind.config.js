/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        slate: {
          300: '#D5E1EF',
          500: '#68778D',
          900: '#1F314F'
        }
      },
      fontSize: {
        'qr-title': '22px',
        'qr-paragraph': '15px'
      },
      maxHeight: {
        'qr-code': '499px'
      },
      borderRadius: {
        'qr-code': '20px',
        'qr-icon': '10px'
      }
    }
  },
  plugins: []
}
