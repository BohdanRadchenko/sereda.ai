import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { ILogoProps } from "./Logo";

interface ILogoStyledProps extends Required<Pick<ILogoProps, 'size'>> {

}

export const LogoStyled = styled(
	(props: TypographyProps<'a'>) => <Typography component='a' {...props}/>,
	{
		shouldForwardProp: (prop) => prop !== 'size'
	}
)<ILogoStyledProps>(({ theme, size }) => {
	const fontSizes: Record<ILogoStyledProps['size'], string> = {
		'medium': '1.5rem',
		'large': '2rem',
	};
	return {
		color: theme.palette.primary.main,
		fontSize: fontSizes[size],
		lineHeight: 1,
		fontWeight: 600,
		textDecoration: 'none',
		cursor: 'pointer',
	};
});