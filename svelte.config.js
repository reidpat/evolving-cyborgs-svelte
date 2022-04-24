import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		vite: {
			define: {
			  'process.env': process.env,
			},
		  },
	},
	preprocess: preprocess()
};



export default config;
