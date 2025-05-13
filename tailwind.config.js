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
        contactGradient: "linear-gradient(121.07deg, rgba(25, 24, 139, 0.15) 0.68%, rgba(0, 0, 0, 0.15) 99.51%)",
      },
    },
  },
  plugins: [],
}




