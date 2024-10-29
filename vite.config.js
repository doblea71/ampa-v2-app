import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	plugins: [sveltekit()],
	server: {
        // host: process.env.HOST || '127.0.0.1', // Use the environment variable HOST if set, otherwise use localhost
        port: 5173, // Set the port to 3000
        // open: false, // Automatically open the browser when the server starts
    },
	resolve: {
		alias: {
			// '$': path.resolve(__dirname, './src'),
			'$assets': path.resolve(__dirname, './src/assets'),
			// '~': path.resolve(__dirname, './src'),
		},
	},
};

export default config;
