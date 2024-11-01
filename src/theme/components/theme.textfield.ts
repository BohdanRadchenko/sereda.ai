import { Theme } from '@mui/material/styles';

import { ArrowDownIcon } from '@/icons';

import { Components } from "@mui/material/styles/components";

export const MuiTextField: Components<Theme>['MuiTextField'] = {
	defaultProps: {
		variant: 'filled',
		fullWidth: true,
		slotProps: {
			select: {
				IconComponent: ArrowDownIcon,
			}
		},
	},
	styleOverrides: {
		root: ({ theme }) => ({
			fontWeight: 300,
			fontSize: 16,
			lineHeight: '20px',

			'& .MuiFormHelperText-root': {
				color: theme.palette.error.contrastText,
			},

			'& .MuiSvgIcon-root': {
				color: theme.palette.text.primary,
				width: 20,
				height: 20,
			},

			'& .MuiFilledInput-root': {
				borderRadius: 0,
				padding: theme.spacing(2.5, 3),
				backgroundColor: '#FFFAFB0A',
			},

			'& .MuiFilledInput-input': {
				padding: 0,
				minHeight: 20,
				height: 20,
			},

		}),
	},
};
