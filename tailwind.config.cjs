/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				body: "rgb(252, 252, 247)",
				"box-bg": "rgb(var(--box-sd))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#0c5959",
				"heading-1": "rgb(12, 89, 89)",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
				"heading-4": "#F0861A",
				"heading-5": "#F0861A"
			},
			screens:{
				midmd:"880px"
			}
		},
	},
	plugins: [],
}
