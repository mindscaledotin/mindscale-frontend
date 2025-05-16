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
    },
  },
  plugins: [],
}




