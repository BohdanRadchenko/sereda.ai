import { Theme } from '@mui/material/styles';

import { Components } from "@mui/material/styles/components";

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
	defaultProps: {
		disableRipple: true,
	},
	styleOverrides: {
		root: {
			padding: 0,
			borderRadius: 4,
			width: 24,
			height: 24,
		},
	},
};