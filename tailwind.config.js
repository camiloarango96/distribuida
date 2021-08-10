module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#EF3054',
				secondary: '#2F3061',
				terceary: '#E5E5E5',
				myYellow: '#FFE047',
			},

			borderRadius: {
				custom: '0.313rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
