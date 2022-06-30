import { defineConfig } from "windicss/helpers";

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				mySans: "Open Sans",
				hylia: "HyliaSerif",
			},
			colors: {
				myBg: "#ece6d9",
				salary: "#17bf66",
				btn: "#1195c9",
				btnBg: "#d5f0ff",
			},
			letterSpacing: {
				mySpacing: "0.25em",
			},
		},
	},
});
