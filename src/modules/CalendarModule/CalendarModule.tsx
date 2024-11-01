import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { CalendarContextProvider } from "@/context/calendar.context.tsx";
import { CalendarContent } from "@/modules/CalendarModule/CalendarContent.tsx";
import { CalendarDialog } from "./CalendarDialog";
import { CalendarFilter } from "./CalendarFilter.tsx";

export const CalendarModule = () => {
	return (
		<CalendarContextProvider>
			<Stack
				spacing={10}
				component='section'
				sx={{
					flexGrow: 1,
				}}
			>
				<Stack spacing={4}>
					<Typography variant='head'>Calendar</Typography>
					<CalendarFilter/>
				</Stack>
				<CalendarContent/>
				<CalendarDialog/>
			</Stack>
		</CalendarContextProvider>
	);
};