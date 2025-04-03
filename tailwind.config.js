/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	darkMode: "class", // Enable dark mode with the 'dark' class
	theme: {
		extend: {
			colors: {
				// Light Mode Colors
				primary: "#B665BC",
				secondary: "#792daf",
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

				dark: {
					primary: "#CF7FD3",
					secondary: "#A359DB",
					success: "#2DD4BF",
					danger: "#EF4444",
					text: "#F3F4F6", // Lighter text in dark mode
					subtext: "#9CA3AF", // Slightly muted subtext color
					border: "#333333",
					surface: "#1F2937", // Dark surface color
					hover: "#2D3748", // Dark hover effect
					muted: "#4B5563", // Muted dark text
					accent: "#8B5CF6", // Accent color in dark mode
					highlight: "#374151", // Highlighted elements in dark mode

					"dark-bg": "#121212",
					"dark-surface": "#1E1E1E",
					"dark-border": "#2D2D2D",
					"dark-card": "#333",
					"dark-hover": "#444", // Darker hover effect for cards/buttons
					"dark-focus": "#4A5568", // Dark focus effect for accessibility
					"dark-shadow": "rgba(255, 255, 255, 0.1)", // Light shadow for dark elements
				},
			},
		},
	},
	plugins: [],
};
