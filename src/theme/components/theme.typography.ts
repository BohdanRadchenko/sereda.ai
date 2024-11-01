// Supports weights 100-900
// @ts-expect-error: path lint exception
import '@fontsource-variable/lexend';

import { Theme, ThemeOptions } from "@mui/material/styles";

import { Components } from "@mui/material/styles/components";

const fontFamily = [ '"Lexend Variable"', 'sans-serif', ].join(', ');

// head - 40 | 40| 200
// title - 32 | 32 | 200
// subtitle - 20 | 20 | 200
// body1 - 16 | 20 | 400
// body2 - 16 | 20 | 200
// copy - 14 | 14 | 200

export const typography: ThemeOptions['typography'] = {
	fontFamily,
	fontSize: 16,
	head: {
		fontWeight: 200,
		fontSize: "2.5rem",
		lineHeight: 1,
	},
	title: {
		fontWeight: 200,
		fontSize: "2rem",
		lineHeight: 1,
		letterSpacing: "0.00938em",
	},
	subtitle: {
		fontWeight: 200,
		fontSize: "1.25rem",
		lineHeight: 1,
	},
	body1: {
		fontWeight: 400,
		fontSize: "1rem",
		lineHeight: 1.25,
	},
	body2: {
		fontWeight: 300,
		fontSize: "1rem",
		lineHeight: 1.25,
	},
	caption: {
		fontWeight: 200,
		fontSize: 14,
		lineHeight: 1,
	},
};

export const MuiTypography: Components<Theme>['MuiTypography'] = {
	defaultProps: {
		variant: 'body1',
		variantMapping: {
			head: 'h3',
			title: 'h4',
			subtitle: 'h5',
			body1: 'p',
			body2: 'p',
			caption: 'span',
		},
	},
	styleOverrides: {
		root: {
			fontFamily,
			cursor: 'default',
			userSelect: 'none',
		},
	}
};