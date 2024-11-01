import { Theme } from '@mui/material/styles';

import { Components } from "@mui/material/styles/components";

export const MuiDivider: Components<Theme>['MuiDivider'] = {
	styleOverrides: {
		root: ({ theme }) => ({
			borderColor: theme.palette.primary.dark,
		}),
	},
};