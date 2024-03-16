import * as palette from './palette.mjs';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				...palette,
			},
			fontFamily: {
				sans: ["Schibsted Grotesk", "sans-serif"],
				serif: ["Bitter", "serif"],
				mono: ["Sometype Mono", "monospace"],
			}
		},
	},
	plugins: [],
}
