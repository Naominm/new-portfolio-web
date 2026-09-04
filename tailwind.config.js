/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    container:{
      padding:{
        default:'15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors:{
        // channel triplets so opacity modifiers (bg-accent/20) still work
        primary:'rgb(var(--primary-rgb) / <alpha-value>)',
        accent:'rgb(var(--accent-rgb) / <alpha-value>)',
      },
      backgroundImage:{
        site:'var(--site-bg)',
      },
    },
  },
  plugins: [],
}
