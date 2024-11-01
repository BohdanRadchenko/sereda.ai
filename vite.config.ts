import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 5100
	},
	plugins: [
		react(),
		tsconfigPaths(),
		svgr(),
	],
});