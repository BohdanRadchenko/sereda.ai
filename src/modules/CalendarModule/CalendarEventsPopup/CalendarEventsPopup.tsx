import { FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { IEvent } from "@/interfaces/IEvent.ts";

import { CalendarEventsPopupEvent, ICalendarEventsPopupEventProps } from "./CalendarEventsPopupEvent.tsx";

interface ICalendarEventsPopupProps {
	events?: IEvent[];
	handleNewEvent?: () => void;
	handleEditEvent?: ICalendarEventsPopupEventProps['onEdit'];
}

export const CalendarEventsPopup: FC<ICalendarEventsPopupProps> = (props) => {
	const { events = [], handleNewEvent, handleEditEvent } = props;
	return (
		<Stack
			spacing={6}
			divider={<Divider orientation='horizontal'/>}
			sx={({ spacing }) => ({
				width: 360,
				padding: spacing(6),
				overflow: 'hidden',
				maxHeight: 'inherit',
				flex: 1,
			})}
		>
			<Stack
				sx={{
					overflowX: 'hidden',
					overflowY: 'auto',
					flexGrow: 1,
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					msOverflowStyle: 'none',
					scrollbarWidth: 'none',
				}}
				spacing={6}
				divider={<Divider orientation='horizontal'/>}
			>
				<Typography variant='title'>Events</Typography>

				{events.map((event) => (
					<CalendarEventsPopupEvent
						key={event.id}
						event={event}
						onEdit={handleEditEvent}
					/>
				))}
			</Stack>

			<Stack
				direction='row'
				sx={{
					justifyContent: 'flex-end'
				}}
			>
				<Box>
					<Button
						variant='contained'
						onClick={handleNewEvent}
					>
						Add event
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
};