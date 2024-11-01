import { NavLink } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from "@mui/material/Typography";

import { INavLinkProps } from "@/components/NavLink/types.ts";

interface INavLinkStyledProps extends Required<Pick<INavLinkProps, 'size'>> {

}

interface INavLinkTypographyStyledProps {
	isActive?: boolean;
	shouldActivity?: boolean;
}

export const NavLinkStyled = styled(
	NavLink
)<INavLinkStyledProps>(({ theme, size }) => {
	const textVariant = size === 'medium' ? theme.typography.subtitle : theme.typography.body1;
	return {
		textDecoration: 'none',
		cursor: 'pointer',
		color: theme.palette.text.primary,
		fontSize: textVariant.fontSize,
		lineHeight: textVariant.lineHeight,
		fontWeight: textVariant.fontWeight,
		transition: 'all 0.2s ease',
		'&:hover': {
			color: theme.palette.primary.main,
		},
		'&:focus': {
			color: theme.palette.text.primary,
		},
		'&:active': {
			color: theme.palette.text.primary,
		},
	};
});

export const NavLinkTypographyStyled = styled(
	(props: TypographyProps) => <Typography {...props}/>,
	{
		shouldForwardProp: prop => !([ 'isActive', 'shouldActivity' ].includes(prop as string)),
	}
)<INavLinkTypographyStyledProps>(({ theme, isActive, shouldActivity }) => ({
	cursor: 'inherit',
	color: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	fontWeight: 'inherit',
	position: 'relative',
	paddingBottom: shouldActivity ? 24 : 0,
	'&:after': {
		content: '""',
		width: '100%',
		height: 1,
		borderRadius: 1,
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: (shouldActivity && isActive) ? theme.palette.primary.main : 'transparent',
	},
}));