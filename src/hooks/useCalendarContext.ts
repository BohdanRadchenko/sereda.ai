import { useContext } from "react";

import { CalendarContext } from "@/context/calendar.context.tsx";

export const useCalendarContext = () => {
	const context = useContext(CalendarContext);

	if (!context) {
		throw new Error(
			"No CalendarContextProvider found in the component tree"
		);
	}
	return context;
};