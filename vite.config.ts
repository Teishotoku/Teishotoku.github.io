import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': '/src',
			src: '/src',
			routes: '/src/routes/',
			api: '/src/api/',
			store: '/src/store/',
			interfaces: '/src/interfaces/',
			reuse: '/src/reuse/',
			ui: '/src/ui/',
			blocks: '/src/ui/blocks/',
			elements: '/src/ui/elements/',
			sections: '/src/ui/sections/',
			fixed: '/src/ui/fixed/',
			popup: '/src/ui/popup/',
			inputs: '/src/ui/elements/inputs/',
			buttons: '/src/ui/elements/buttons/',
			img: '/src/assets/img/',
			font: '/src/assets/font/',
			style: '/src/css/',
			scss: '/src/css/_index.scss'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern"
			}
		}
	},
	server: {
		watch: {
			usePolling: true
		},
		host: true, // needed for the Docker Container port mapping to work
		strictPort: true,
		port: 4000 // you can replace this port with any port
	}
});
