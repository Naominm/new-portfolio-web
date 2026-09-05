/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    container:{
      center: true,
      // NB: the key must be DEFAULT. Lowercase 'default' is silently ignored,
      // which is why the container used to sit flush against the viewport.
      padding:{
        DEFAULT:'1.25rem',
        sm:'2rem',
        lg:'3rem',
        xl:'4rem',
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
