import { Theme } from '@mui/material/styles';

import { Components } from "@mui/material/styles/components";

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(0),
			backgroundColor: 'transparent',
			boxShadow: 'none',
		}),
	},
};