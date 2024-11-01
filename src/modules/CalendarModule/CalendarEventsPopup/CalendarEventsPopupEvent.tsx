import { FC, useCallback } from "react";

import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { eventDateTimeFormat } from "@/helpers/time.helpers.ts";
import { eventColorsByType, eventLabelsByType } from "@/constants/events.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

import { EditIcon } from "@/icons";

export interface ICalendarEventsPopupEventProps {
	event: IEvent;
	onEdit?: (id: IEvent["id"]) => void;
}

export const CalendarEventsPopupEvent: FC<ICalendarEventsPopupEventProps> = (props) => {
	const {
		event: {
			id,
			title,
			type,
			description,
			location,
			datetime,
		},
		onEdit,
	} = props;

	const handleEditClick = useCallback(() => onEdit?.(id), [ onEdit, id ]);

	return (
		<Stack spacing={2}>
			<Stack
				direction='row'
				spacing={4}
			>
				<Tooltip
					title={title}
					placement='top'
				>
					<Typography
						variant='subtitle'
						sx={{
							fontWeight: 500,
							lineHeight: 1.4,
							flexGrow: 1,
						}}
						noWrap={title.split(' ')[0].length > 18}
					>
						{title}
					</Typography>
				</Tooltip>
				<IconButton aria-label="edit" onClick={handleEditClick}>
					<EditIcon/>
				</IconButton>
			</Stack>
			<Typography
				sx={{
					fontSize: 14,
					fontWeight: 200,
					lineHeight: '20px',
				}}
			>
				{description}
			</Typography>
			<Typography
				variant='body1'
				color='textSecondary'
			>
				{location}
			</Typography>

			<Stack
				spacing={2}
				direction='row'
				sx={{
					justifyContent: 'space-between',
				}}
			>
				<Typography
					variant='body2'
					sx={{
						fontWeight: 300,
						color: eventColorsByType[type].main,
					}}
				>
					{eventDateTimeFormat(datetime)}
				</Typography>

				<Stack
					sx={({ spacing }) => ({
						borderRadius: 16,
						backgroundColor: eventColorsByType[type].dark,
						padding: spacing(1, 2),
						alignItems: 'center',
						justifyContent: 'center',
						flexShrink: 0,
						height: 'fit-content',
					})}
				>
					<Typography
						variant='caption'
						sx={{
							fontWeight: 400,
							color: eventColorsByType[type].main,
						}}
					>
						{eventLabelsByType[type]}
					</Typography>
				</Stack>

			</Stack>
		</Stack>
	);
};