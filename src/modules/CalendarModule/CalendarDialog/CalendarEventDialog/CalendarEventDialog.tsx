import { useCallback } from "react";

import { useCalendarContext } from "@/hooks";
import { Modal } from "@/components/Modal";
import { onCloseEventEditor } from "@/context/calendar.context.tsx";
import { CalendarEventDialogForm } from "./CalendarEventDialogForm.tsx";

export const CalendarEventDialog = () => {
	const {
		state: { currentEvent },
		dispatch,
	} = useCalendarContext();

	const handleClose = useCallback(() => {
		dispatch(onCloseEventEditor());
	}, [ dispatch ]);

	return (
		<Modal
			title={currentEvent?.id ? 'Edit event' : 'Add event'}
			onClose={handleClose}
			open={Boolean(currentEvent)}
		>
			<CalendarEventDialogForm
				onClose={handleClose}
			/>
		</Modal>
	);
};