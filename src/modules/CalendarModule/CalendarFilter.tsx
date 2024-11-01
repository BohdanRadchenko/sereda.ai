import { useCallback, useMemo } from "react";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

import { EEventType, eventTypeFilterList } from "@/constants/events.constants.ts";

import { useCalendarContext } from "@/hooks";
import { CloseIcon } from "@/icons";
import { ChipFilter } from "@/components/ChipFilter";
import { clearEventTypeFilter, toggleEventTypeFilter } from "@/context/calendar.context.tsx";

export const CalendarFilter = () => {
	const {
		state: {
			selected
		},
		dispatch,
	} = useCalendarContext();

	const stateSelected = useMemo(() => {
		return selected.reduce((acc, item) => {
			acc[item] = true;
			return acc;
		}, {} as Record<EEventType, boolean>);
	}, [ selected ]);

	const handleToggle = useCallback((event: EEventType) => {
		if (!event) return;
		dispatch(toggleEventTypeFilter(event));
	}, [ dispatch ]);

	const handleClear = useCallback(() => {
		dispatch(clearEventTypeFilter());
	}, [ dispatch ]);

	return (
		<Stack direction='row' spacing={6} alignItems={'center'}>
			<ChipFilter<EEventType>
				list={eventTypeFilterList}
				onClick={handleToggle}
				selected={stateSelected}
			/>
			{Boolean(selected?.length) && (
				<Tooltip title="Reset filter" placement='top'>
					<IconButton onClick={handleClear}>
						<CloseIcon color='primary'/>
					</IconButton>
				</Tooltip>
			)}
		</Stack>
	);
};