import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		setIsDark((prev) => {
			const newValue = !prev;
			if (newValue) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
			return newValue;
		});
	};

	const theme = {
		isDark,
		toggleTheme,
		colors: isDark
			? {
					background: "bg-dark-bg",
					surface: "bg-dark-surface",
					text: "text-dark-text",
					subtext: "text-dark-subtext",
					border: "border-dark-border",
					primary: "bg-dark-primary",
					secondary: "bg-dark-secondary",
					hover: "hover:bg-dark-hover",
					accent: "bg-dark-accent",
			  }
			: {
					background: "bg-white",
					surface: "bg-gray-50",
					text: "text-text",
					subtext: "text-subText",
					border: "border-border",
					primary: "bg-primary",
					secondary: "bg-secondary",
					hover: "hover:bg-gray-100",
					accent: "bg-tertiary",
			  },
	};

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};
