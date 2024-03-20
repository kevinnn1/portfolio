/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgMain:{
          light: '#F4F4F4',
          DEFAULT: '#F4F4F4',
          dark: '#2D2D2D',
        },
        bgSecondary:{
          light: '#ECECEC',
          DEFAULT: '#ECECEC',
          dark: '#3C3C3C',
        },
        textHead: {
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#FFFFFF',
        },
        textSub: {
          light: '#666666',
          DEFAULT: '#666666',
          dark: '#CCCCCC',
        },
        buttonBg: {
          light: '#4B9CD3',
          DEFAULT: '#4B9CD3',
          dark: '#8B0000',
        },
        buttonText: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
        },
        linkDefault: {
          light: '#3F83C3',
          DEFAULT: '#3F83C3 ',
          dark: '#FF6B6B',
        },
        linkHover: {
          light: '#60A5FA',
          DEFAULT: '#60A5FA',
          dark: '#FF8F8F',
        },
        inputBg: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#d6d6d6',
        },
        inputText: {
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#FFFFFF',
        },
        cardBg: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#4A4A4A',
        },
        cardText: {
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#FFFFFF',
        },
      },
    },
    
  },
  plugins: [],
}

