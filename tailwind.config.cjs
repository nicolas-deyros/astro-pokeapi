/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
	'system-ui',
	'-apple-system',
	'BlinkMacSystemFont',
	'Segoe UI',
	'Roboto',
	'Oxygen',
	'Ubuntu',
	'Cantarell',
	'Open Sans',
	'Helvetica Neue',
	'sans-serif',
]

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			body: FONT_FAMILY_BASE,
			display: ['RT Alias Medium', ...FONT_FAMILY_BASE],
			mono: [
				'Menlo',
				'Monaco',
				'Lucida Console',
				'Liberation Mono',
				'DejaVu Sans Mono',
				'Bitstream Vera Sans Mono',
				'Courier New',
				'monospace',
			],
		},
		extend: {
			colors: {
				bug: '#aedf78',
				water: '#43ccff',
				grass: '#00ca91',
				fire: '#e95c4d',
				normal: '#a5a5a5',
			},
		},
	},
	plugins: [],
}
