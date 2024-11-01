import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import { eventColorsByType } from "@/constants/events.constants.ts";
import { GET_EVENTS_QUERY_KEY } from "@/constants/query.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

import { useCalendarContext } from "@/hooks";
import api from "@/api/ApiRequester.ts";
import { Calendar } from "@/components/Calendar";
import { Loading } from "@/components/Loading";
import { onEventCreate, onEventEdit } from "@/context/calendar.context.tsx";
import { CalendarEventsPopup } from "@/modules/CalendarModule/CalendarEventsPopup/CalendarEventsPopup.tsx";
import { calendarColWidth } from "@/modules/CalendarModule/constants.ts";

import { CalendarGridSContainerStyle } from "@/modules/CalendarModule/styled.tsx";

const RENDER_MONTHS = 6;
const months = [ ...Array(RENDER_MONTHS).keys() ]
	.map((i) => new Date(new Date().getFullYear(), new Date().getMonth() + i, 1));

export const CalendarContent = () => {
	const {
		state: {
			selected,
		},
		dispatch,
	} = useCalendarContext();

	const { isLoading, data: events } = useQuery({
		queryKey: [ GET_EVENTS_QUERY_KEY ],
		queryFn: () => api.calendarService.getEvents(),
	});

	const eventsDayMap = useMemo(() => {
		if (!events?.length) return new Map<number, IEvent[]>();
		return events.reduce((acc, event) => {
			if (selected?.length && !selected.includes(event.type)) return acc;
			const date = new Date(event.datetime).setHours(0, 0, 0, 0);
			const dayEvents = acc.get(date) || [];
			dayEvents.push(event);
			acc.set(date, dayEvents);
			return acc;
		}, new Map<number, IEvent[]>());
	}, [ events, selected ]);

	const handleEditEvent = useCallback((id: IEvent['id']) => {
		const event = events?.find((e) => e.id === id);
		if (!event) return;
		return dispatch(onEventEdit(event));
	}, [ dispatch, events ]);


	const handleNewEvent = useCallback((date: Date) => {
		dispatch(onEventCreate(new Date(date).setHours(0, 0, 0, 0)));
	}, [ dispatch ]);

	const renderBadgesList = useCallback((date: Date) => {
		const events = eventsDayMap.get(new Date(date).setHours(0, 0, 0, 0));
		if (!events?.length) return [] as string[];
		return events.map(({ type }) => eventColorsByType[type]?.main);
	}, [ eventsDayMap ]);

	const renderPopupComponent = useCallback((date: Date) => {
		const events = eventsDayMap.get(new Date(date).setHours(0, 0, 0, 0));
		return <CalendarEventsPopup
			events={events}
			handleNewEvent={() => handleNewEvent(date)}
			handleEditEvent={handleEditEvent}
		/>;
	}, [ eventsDayMap, handleEditEvent, handleNewEvent ]);

	return (
		<>
			{isLoading && !events && <Loading fullscreen/>}
			{!isLoading && Boolean(events?.length) && (
				<Stack
					sx={{
						overflowX: 'hidden',
						flexGrow: 1,
						minHeight: '100%',
					}}
				>
					<CalendarGridSContainerStyle>
						{months.map((d) => (
							<Grid
								size={calendarColWidth}
								key={Number(d)}
								className='calendar-module-grid__wrapper'
							>
								<Box className='calendar-module-grid__inner'>
									<Calendar
										date={d}
										fullWidth
										badgesList={renderBadgesList}
										renderDayPopup={renderPopupComponent}
									/>
								</Box>
							</Grid>
						))}
					</CalendarGridSContainerStyle>
				</Stack>
			)}
		</>
	);
};
