const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4A90E2',
        'brand-blue-light': '#E9F3FE',
        'brand-blue-dark': '#377CC8',
        'brand-gray-light': '#F7F8FA',
        'brand-gray-medium': '#E0E0E0',
        'brand-gray-dark': '#A0A4A8',
        'brand-text': '#333333',
        'status-green': '#34D399',
        'status-red': '#EF4444',
        'indigo-100': '#E0E7FF',
        'brand-orange': '#F59E0B',
        'indigo-600': '#4F46E5',

        'activity-bar-gray': colors.slate[300], 
        'activity-bar-teal': colors.cyan[400],  
        'activity-bar-blue': colors.indigo[500],
      },
      borderRadius: {
        'card': '1rem',
        '2xl': '1rem', 
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      height: {
        'bar-xs': '30%',    
        'bar-sm': '45%',    
        'bar-md': '60%',    
        'bar-lg': '75%',    
        'bar-xl': '90%',    
        ...require('tailwindcss/defaultTheme').height,
      }
    },
  },
  plugins: [],
};