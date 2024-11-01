import { FC } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ICalendarProps } from "./types.ts";

import { CalendarMonthDays } from "@/components/Calendar/CalendarMonthDays";
import { CalendarWeek } from "@/components/Calendar/CalendarWeek.tsx";

const defaultLocale = 'en'; //TODO: use window.navigator.language; after fixing calendar days matrix start day

export const Calendar: FC<ICalendarProps> = (props) => {
	const {
		date,
		fullWidth,
		locale = defaultLocale,
		badgesList,
		renderDayPopup,
	} = props;

	const monthTitle = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
	return (
		<Stack
			spacing={6}
			sx={{
				flexGrow: fullWidth ? 1 : 0,
			}}
		>
			<Typography
				variant='title'
				sx={{
					textTransform: 'capitalize'
				}}
			>
				{monthTitle}
			</Typography>
			<Stack spacing={2}>
				<CalendarWeek locale={locale}/>
				<CalendarMonthDays
					locale={locale}
					date={date}
					badgesList={badgesList}
					renderDayPopup={renderDayPopup}
				/>
			</Stack>
		</Stack>
	);
};