import createPalette, { PaletteOptions } from "@mui/material/styles/createPalette";

// TODO: create extended palette with color constants
export const paletteOptions: PaletteOptions = {
	background: {
		default: '#131315',
		paper: '#131315',
	},
	primary: {
		main: '#FF4E6B',
		dark: '#FF4E6B29',
		contrastText: '#131315',
	},
	error: {
		dark: '#FF4E6B29',
		main: '#FF4E6B29',
		contrastText: '#FF4E6B',
	},
	text: {
		primary: '#FFFAFB',
		secondary: '#797979',
		disabled: '#FFFAFB80',
	},
};

export const palette = createPalette(paletteOptions);