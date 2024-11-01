import { Components } from "@mui/material/styles/components";

export const MuiSvgIcon: Components['MuiSvgIcon'] = {
	defaultProps: {
		color: 'action'
	},
	styleOverrides: {
		colorAction: {
			color: '#797979',
			width: 24,
			height: 24,
		},
	},
};
