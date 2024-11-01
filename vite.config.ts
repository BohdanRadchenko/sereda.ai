import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 5100
	},
	// base: "bohdanradchenko.github.io/sereda.ai",
	base: "/sereda.ai",
	plugins: [
		react(),
		tsconfigPaths(),
		svgr(),
	],
});

/**
 * "homepage": "bohdanradchenko.github.io/sereda.ai",
 * */