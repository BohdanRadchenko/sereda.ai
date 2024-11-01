import Grid, { Grid2Props } from "@mui/material/Grid2";
import { styled } from '@mui/material/styles';

import { calendarColumns, calendarColWidth } from "@/modules/CalendarModule/constants.ts";

export const CalendarGridSContainerStyle = styled(
	(props: Grid2Props) => <Grid
		container
		columns={calendarColumns}
		{...props}
	/>
)(({ theme }) => {
	const borderWidth = '1px';
	const borderColor = theme.palette.primary.dark;

	const resetRowBorder = (Object.keys(calendarColWidth) as Array<keyof typeof calendarColWidth>).reduce(
		(result, key) => {
			const resetStyle = {
				borderRight: 'none',
			};
			return {
				...result,
				[`&:nth-of-type(${calendarColumns / calendarColWidth[key]}n)`]: {
					[theme.breakpoints.only(key)]: {
						...resetStyle,
						'& > .calendar-module-grid__inner': {
							...resetStyle,
						}
					},

					[theme.breakpoints.down(key)]: {
						...resetStyle,
						'& > .calendar-module-grid__inner': {
							...resetStyle,
						}
					},
				},
			};
		}, {});


	return {
		width: 'calc(100% + 24px)',
		transform: 'translateX(-12px)',

		'& .calendar-module-grid__wrapper': {
			borderTop: `${borderWidth} solid`,
			borderColor,
			padding: theme.spacing(3, 0),

			'& > .calendar-module-grid__inner': {
				minHeight: '100%',
				borderRight: `${borderWidth} solid`,
				borderColor,
				padding: theme.spacing(3),
			},

			...resetRowBorder,
		},
	};
});