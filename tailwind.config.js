/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	darkMode: "class", 
	theme: {
		extend: {
			colors: {
				// Light Mode Colors
				primary: "#9A4C1E",
				secondary: "#6A1039",
				success: "#027A48",
				danger: "#F15046",
				tertiary: "#F195C3",
				sub: "#bo9ad9",
				lighter: "#c9DDEE",
				subText: "#6B788E",
				text: "#091E42",
				border: "#EFF1F4",

				"dark-bg": "#121212",
				"dark-surface": "#1E1E1E",
				"dark-border": "#2D2D2D",
				"dark-card": "#333",


				//dark mode colors
				dark: {
					primary: "#CF7FD3",
					secondary: "#A359DB",
					success: "#2DD4BF",
					danger: "#EF4444",
					text: "#F3F4F6", 
					subtext: "#9CA3AF",
					border: "#333333",
					surface: "#1F2937",
					hover: "#2D3748", 
					muted: "#4B5563", 
					accent: "#8B5CF6", 
					highlight: "#374151", 

					"dark-bg": "#121212",
					"dark-surface": "#1E1E1E",
					"dark-border": "#2D2D2D",
					"dark-card": "#333",
					"dark-hover": "#444",
					"dark-focus": "#4A5568", 
					"dark-shadow": "rgba(255, 255, 255, 0.1)", 
				},
			},
		},
	},
	plugins: [],
};
