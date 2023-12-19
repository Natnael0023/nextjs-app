/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#fc61f0',
        'secondary': '#36c6e6',
        'bg-dark':'#000000',
        'bg-sec': '#2a2a2a',
        'bg-light': '#ffffff',
        'txt-dark': '#252327',
        'txt-light': '#ffffff'
      },
      fontFamily: {
        cabin: ['Cabin']
      }
    },
  },
  plugins: [],
}
