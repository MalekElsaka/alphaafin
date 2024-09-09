/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        alpha_gray: '#2A2C38',
        alpha_orange: '#FF9021',
        alpha_black: '#2A2C38'
      },
      fontFamily:{
        cairo: ['Cairo', 'sans-serif'],
      },
         screens: {
        'xs': '480px',  // Custom breakpoint for extra small screens
        'sm': '640px',  // Small screens
        'md1': '768px',  // Medium screens
        'md2': '826px',
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px' // 2x extra large screens
      }
    },
  },
  plugins: [],
}

