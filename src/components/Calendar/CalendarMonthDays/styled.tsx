import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

interface ICalendarMonthDaysItemStyledProps {
	isToday?: boolean;
	isCurrentMonth?: boolean;
}

export const CalendarMonthDaysItemStyled = styled(
	Stack,
	{
		shouldForwardProp: prop => !([ "isCurrentMonth", "isToday" ].includes(prop as string)),
	}
)<ICalendarMonthDaysItemStyledProps>((
	{
		theme: { palette, spacing },
		isCurrentMonth,
		isToday
	}
) => {
	const baseColor = (isToday && isCurrentMonth) ? palette.primary.main : isCurrentMonth ? palette.text.primary : palette.text.secondary;
	const hoverColor = isCurrentMonth ? palette.primary.main : 'none';
	return {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: spacing(11),
		cursor: isCurrentMonth ? 'pointer' : 'default',
		position: 'relative',
		'& p': {
			color: baseColor,
			cursor: 'inherit',
		},
		'&:hover': {
			'& p': {
				color: hoverColor,
			},
		}
	};
});