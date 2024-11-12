/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
	  "./*.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./css/**/*.{html,js}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#263754',
		  secondary: "#263754",
		},
		fontFamily: {
		  sans: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
		  mono: ['"Plus Jakarta Sans"', 'monospace'],
		},
	  },
	},
	plugins: [],
  }
  