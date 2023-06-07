import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import https from "https";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react(), svgr()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		server: {
			port: 3000,
			proxy: {
				"/": {
					target: process.env.VITE_API_BASE_URL || "https://127.0.0.1:3001",
					changeOrigin: true,
					secure: true,
					agent: new https.Agent(),
					rewrite: (path) => path.replace(/^\//, ""),
				},
			},
		},
	});
}
