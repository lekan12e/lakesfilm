/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#030014",
				secondary: "#151313",
				light: {
					100: "#d5c6ff",
					200: "#a8b5db",
					300: "#9ca4ab",
				},
				dark: {
					100: "#221f3d",
					200: "#0f0d23",
					300: "#4d2f7f",
				},
				accent: "#ab8bff",
			},
		},
	},
	plugins: [],
};
