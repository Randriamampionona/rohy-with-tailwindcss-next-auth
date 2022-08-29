/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primaryColor: "hsl(335, 100%, 35%)",
				darkColor: "hsl(240, 3%, 6%)",
				whiteColor: "hsl(0, 0%, 98%)",
				lightColor: "hsl(334, 7%, 79%)",
			},
			height: {
				navbarHeight: "3.5rem",
				customScreen: "calc(100vh - 3.5rem)",
			},
		},
	},
	plugins: [],
};
