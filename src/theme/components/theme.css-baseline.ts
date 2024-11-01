import { Components } from "@mui/material/styles/components";

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
	styleOverrides: () => {
		return {
			body: {
				width: '100vw',
				minHeight: '100vh',
			},
			['*']: {
				boxSizing: 'border-box',
			},
		};
	}
};
