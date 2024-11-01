import { FC, useMemo } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getLocalizedDaysOfWeek } from "@/helpers/calendar.helpers.ts";
import { ICalendarWeekProps } from "./types.ts";

const defaultLocale = window.navigator.language;

export const CalendarWeek: FC<ICalendarWeekProps> = ({ locale = defaultLocale }) => {
	const weekList = useMemo(() => getLocalizedDaysOfWeek(locale), [ locale ]);

	return (
		<Stack
			direction='row'
			sx={{
				flex: 1,
				minHeight: 32,
			}}
		>
			{weekList.map((week) => (
				<Stack
					key={week}
					sx={{
						flexGrow: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography
						variant='body2'
						color='textSecondary'
						sx={{
							textTransform: 'capitalize',
						}}
					>
						{week}
					</Typography>
				</Stack>
			))}
		</Stack>
	);
};