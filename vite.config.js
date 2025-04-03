import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/components",
			"@hooks": "/src/hooks",
			"@libs": "/src/libs",
			"@store": "/src/store",
			"@api": "/src/api",
			"@global": "/src/global",
			"@pages": "/src/pages",
			"@data": "/src/data",
			"@contexts": "/src/contexts",
		},
	},
	define: {
		"process.env": {},
	},
});
