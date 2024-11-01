import { Theme } from '@mui/material/styles';

import { Components } from "@mui/material/styles/components";

export const MuiDialog: Components<Theme>['MuiDialog'] = {
	defaultProps: {
		fullWidth: true,
		maxWidth: 'sm',
	},
	styleOverrides: {
		root: ({ theme }) => ({
			'& .MuiModal-backdrop': {
				backgroundColor: '#FFFAFB33',
				backdropFilter: 'blur(2px)',
			},
			variants: [
				{
					props: { maxWidth: 'sm' },
					style: {
						'& .MuiDialog-paper': {
							width: 552,
							maxHeight: '70vh',
							padding: theme.spacing(6),
						},
					}
				}
			]
		})
	},
};