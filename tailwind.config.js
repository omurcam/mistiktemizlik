/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'natural': {
          // Sage Green - Doğal yeşil tonları
          'sage': {
            50: '#F7F8F5',
            100: '#EEF1E8',
            200: '#D8E0C8',
            300: '#C2CFA8',
            400: '#9CAF88',
            500: '#7A906D',
            600: '#627456',
            700: '#4F5C47',
            800: '#3D453A',
            900: '#2B302D',
          },
          // Cream/Beige - Krem ve bej tonları
          'cream': {
            50: '#FEFCF9',
            100: '#FDF9F2',
            200: '#F9F0E1',
            300: '#F5F1E8',
            400: '#EAE0CE',
            500: '#D4C4A8',
            600: '#C2A882',
            700: '#A68B5B',
            800: '#8B7355',
            900: '#6B5940',
          },
          // Golden - Altın sarısı tonları
          'gold': {
            50: '#FDF8F0',
            100: '#FAEFD9',
            200: '#F4DDB0',
            300: '#E8C782',
            400: '#D4A574',
            500: '#C19653',
            600: '#A67C44',
            700: '#8B6538',
            800: '#6F4F2D',
            900: '#553C22',
          },
          // Soft Brown - Yumuşak kahverengi
          'brown': {
            50: '#F7F5F3',
            100: '#EDE8E4',
            200: '#D9CFC6',
            300: '#C5B6A8',
            400: '#A0845C',
            500: '#8B7355',
            600: '#6F5B45',
            700: '#574638',
            800: '#42352C',
            900: '#312620',
          },
          // Warm Gray - Sıcak gri tonları  
          'gray': {
            50: '#FAFAF9',
            100: '#F5F4F2',
            200: '#E8E6E3',
            300: '#D1CEC8',
            400: '#9A9592',
            500: '#7D7C7A',
            600: '#656462',
            700: '#504F4E',
            800: '#3C3B3A',
            900: '#2A2928',
          },
          'natural-brown': {
            50: '#FEFCFA',
            100: '#F9F6F1',
            200: '#F1EBE1',
            300: '#E6DBD0',
            400: '#D4C4A8',
            500: '#C2A882',
            600: '#A67C44',
            700: '#8B7355',
            800: '#6B5B47',
            900: '#4A3F35',
          },
          'natural-charcoal': {
            50: '#F8F8F7',
            100: '#F0F0EF',
            200: '#DDDCDA',
            300: '#B8B6B3',
            400: '#95938F',
            500: '#7D7C7A',
            600: '#656560',
            700: '#4A4A47',
            800: '#333331',
            900: '#1F1F1D',
          },
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'natural-gradient': 'linear-gradient(135deg, #F7F8F5 0%, #EEF1E8 100%)',
        'sage-gradient': 'linear-gradient(135deg, #9CAF88 0%, #7A906D 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F5F1E8 0%, #D4C4A8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A574 0%, #C19653 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'gentle-sway': 'gentleSway 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gentleSway: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '33%': { transform: 'translateX(10px) rotate(1deg)' },
          '66%': { transform: 'translateX(-8px) rotate(-1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(12px)',
      },
    },
  },
  plugins: [],
}

