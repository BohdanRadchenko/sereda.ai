import React, { FC, useCallback, useMemo, useState } from "react";

import Popover from '@mui/material/Popover';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ICalendarMonthDaysItemProps } from "@/components/Calendar/types.ts";

import { CalendarBadge } from "@/components/Calendar";

import { CalendarMonthDaysItemStyled } from "./styled.tsx";

const checkIsCurrentDay = (date: Date) => {
	const today = new Date();
	return (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear()
	);
};

export const CalendarMonthDaysItem: FC<ICalendarMonthDaysItemProps> = (props) => {
	const { date, isCurrentMonth, badgesList, renderDayPopup } = props;

	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

	const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
		if (!renderDayPopup || !isCurrentMonth) return;
		setAnchorEl(event.currentTarget);
	}, [ renderDayPopup, isCurrentMonth ]);

	const handleClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const isToday = useMemo(() => checkIsCurrentDay(date), [ date ]);

	return (
		<>
			<CalendarMonthDaysItemStyled
				isToday={isToday}
				isCurrentMonth={isCurrentMonth}
				onClick={handleOpen}
			>
				<Typography>{date.getDate()}</Typography>
				<Stack
					direction='row'
					spacing={0.5}
					sx={({ spacing }) => ({
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						justifyContent: 'center',
						padding: spacing(0, 0.5),
					})}
				>
					{isCurrentMonth && badgesList?.(date).map((color, index) => (
						<CalendarBadge
							key={index}
							color={color}
						/>
					))}
				</Stack>
			</CalendarMonthDaysItemStyled>
			<Popover
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: 'hidden',
							boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
							maxHeight: '96vh',
						},
					},
				}}
			>
				{Boolean(anchorEl) && renderDayPopup?.(date)}
			</Popover>
		</>
	);
};