/** @type {import('tailwindcss').Config} */ /*eslint-env node*/

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				black: '#252525',
				'light-gray': '#d9d9db',
				gray: '#a9a19e',
				green: '#3b5032'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				shadowOpacity: 'animationShadow .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
