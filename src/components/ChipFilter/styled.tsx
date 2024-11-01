import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from "@mui/material/Typography";

interface IChipFilterItemStyledProps {
	selected?: boolean;
	bgActive?: string;
	bgInactive?: string;
	textActive?: string;
	textInactive?: string;
}

const itemShouldForwardProp = (propName: string) => !([
	"selected",
	"bgActive",
	"bgInactive",
	"textActive",
	"textInactive",
].includes(propName));

export const ChipFilterItemStyled = styled(
	(props: TypographyProps) => <Typography {...props} component='span' variant='body1'/>,
	{
		shouldForwardProp: itemShouldForwardProp,
	}
)<IChipFilterItemStyledProps>(({ theme, selected, bgActive, bgInactive, textActive, textInactive }) => {
	const backgroundColor = selected
		? bgActive
		: bgInactive;
	const color = selected
		? textActive
		: textInactive;
	return {
		cursor: 'pointer',
		padding: theme.spacing(1, 4),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: backgroundColor || theme.palette.primary.dark,
		color: color || theme.palette.primary.main,
		borderRadius: 16,
	};
});