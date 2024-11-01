import { Theme } from '@mui/material/styles';

import { Components } from "@mui/material/styles/components";

export const MuiButton: Components<Theme>['MuiButton'] = {
	defaultProps: {
		disableTouchRipple: true,
		disableElevation: true,
		disableFocusRipple: true,
		color: 'primary',
		size: 'medium',
		variant: 'contained',
	},
	styleOverrides: {
		root: ({ theme }) => ({
			boxSizing: 'border-box',
			flexShrink: 0,
			whiteSpace: 'nowrap',
			textTransform: 'none',
			position: 'relative',
			width: 'auto',
			minWidth: 'auto',
			borderRadius: 0,
			padding: theme.spacing(2, 4),

			height: 'auto',
			minHeight: 10,
			fontSize: 20,
			fontWeight: 500,
			lineHeight: '24px',

			['&:hover']: {},
			['&:focus']: {
				outline: 'none',
			},
			['&:active']: {
				['&:focus']: {
					outline: 'none',
				},
			},
			variants: [
				{
					props: { variant: 'text' },
					style: {
						padding: theme.spacing(2, 0),
						['&:hover']: {
							backgroundColor: 'transparent',
						},
					}
				}
			]
		}),
	},
};