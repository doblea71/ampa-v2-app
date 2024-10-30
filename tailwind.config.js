/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}', // Incluye todos los archivos dentro de src
		'./src/routes/**/*.{html,js,svelte,ts}', // Incluye las rutas de SvelteKit
		'./static/**/*.{html,js,svelte,ts}', // Incluye las rutas estáticas si las usas.
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
