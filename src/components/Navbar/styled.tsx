import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface ILogoStyledProps {
	size: 'medium' | 'large';
}

export const HeaderBarStyled = styled(
	(props: TypographyProps) => <Typography {...props}/>,
	{
		shouldForwardProp: (prop) => prop !== 'size'
	}
)<ILogoStyledProps>(({ theme, size }) => {
	const fontSizes: Record<ILogoStyledProps['size'], string> = {
		'medium': '1.5rem',
		'large': '2rem',
	};
	return {
		fontSize: fontSizes[size],
		lineHeight: 1,
		fontWeight: 600,
		color: theme.palette.primary.main,
	};
});