module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        customBlue: '#0F69FF',
        customPurple: '#884DFF',
      },
      
      backgroundImage: {
        contactGradient:  'linear-gradient(90deg, #052275 0%, #040A19 100%)',
      },
      screens: {
        'vs': '320px', // Very small screen
        'sm': '640px', // Small screen
        'md': '768px', // Medium screen (tablet)
        'lg': '1024px', // Large screen
        'xl': '1280px', // Extra large screen
        '2xl': '1536px', // 2x extra large screen
      },
    },
  },
  plugins: [],
}




