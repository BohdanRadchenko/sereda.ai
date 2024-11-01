import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

import { MAX_CONTAINER_WIDTH } from "@/constants/layout.constants.ts";

export const LayoutContainerStyled = styled(Stack)(({ theme }) => ({
	margin: '0 auto',
	minHeight: '100vh',
	padding: theme.spacing(6, 4),
	maxWidth: 'calc(100%-16px)',

	[theme.breakpoints.up('lg')]: {
		maxWidth: MAX_CONTAINER_WIDTH.lg,
		padding: theme.spacing(6, 0),
	},
}));