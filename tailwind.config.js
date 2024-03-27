/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif'],
				fixel: ['Fixel', 'sans-serif'],
			},
			colors: {
				primary: '#238CAA',
				'primary-hovered': '#2476A4',
				darkblue: '#272D4E',
				grey: '#5D6D85',
				lightgrey: '#92979E',
				lightblue: '#F8FAFD',
				light: '#8FA0B5',
				lightblack: '#374354',
				main: '#1E293B',
				'footer-text': '#606D83',
			},
			boxShadow: {
				button: '0px 6px 14px -6px rgba(35, 140, 170, 0.32), 0px 10px 32px -4px rgba(35, 140, 170, 0.30);#238CAA',
				card: '0px 18px 52.854px 0px rgba(215, 228, 249, 0.50)',
				slide: '0px 8px 28px -6px rgba(24, 39, 75, 0.16)',
				gold: '0px 3px 4px 0px rgba(255, 198, 87, 0.2)',
				'slide-vacancy':
					'0px 6px 10px 0px rgba(73, 73, 73, 0.04), 0px 1px 18px 0px rgba(73, 73, 73, 0.02);',
				'slide-payments': '0px 1px 3px 0px rgba(0, 0, 0, 0.08)',
			},
			backgroundImage: {
				'basic-gradient':
					'linear-gradient(328deg, #21BDB8 -37.75%, #280684 300.15%);',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
