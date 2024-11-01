import { FC, useMemo } from "react";

import Stack from "@mui/material/Stack";

import { getMonthDaysMatrix } from "@/helpers/calendar.helpers.ts";
import { ICalendarMonthDaysProps } from "../types.ts";

import { CalendarMonthDaysItem } from "./CalendarMonthDaysItem.tsx";

const defaultLocale = window.navigator.language;

export const CalendarMonthDays: FC<ICalendarMonthDaysProps> = (props) => {
	const {
		locale = defaultLocale,
		date,
		badgesList,
		renderDayPopup,
	} = props;
	const year = useMemo(() => date.getFullYear(), [ date ]);
	const month = useMemo(() => date.getMonth(), [ date ]);

	const mx = useMemo(() => getMonthDaysMatrix({
		year,
		month,
		locale,
	}), [ year, month, locale ]);

	return (
		<Stack spacing={0}>
			{mx.map((row, rowIndex) => (
				<Stack
					key={rowIndex}
					direction='row'
					justifyContent='space-between'
				>
					{row.map((d) => (
						<CalendarMonthDaysItem
							key={Number(d)}
							date={d}
							isCurrentMonth={d.getMonth() === month}
							badgesList={badgesList}
							renderDayPopup={renderDayPopup}
						/>
					))}
				</Stack>
			))}
		</Stack>
	);
};