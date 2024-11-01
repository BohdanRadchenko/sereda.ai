import { FC, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { eventDateAtFormat } from "@/helpers/time.helpers.ts";
import { eventLabelsByType, eventTypesList } from "@/constants/events.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

import { useCalendarContext, useCreateOrUpdateCalendarEvent, useDeleteCalendarEvent } from "@/hooks";

const timesList = [ ...Array(24).keys() ].map((t) => ({
	value: String(t),
	label: `${t}:00`
}));

interface ICalendarEventDialogFormProps {
	onClose?: () => void;
}

interface IFormFields extends Partial<Omit<IEvent, 'datetime'>> {
	time?: number;
}

const getDefaultTime = (datetime?: number) => {
	if (!datetime) return 0;
	return new Date(datetime).getHours();
};

export const CalendarEventDialogForm: FC<ICalendarEventDialogFormProps> = (props) => {
	const { onClose } = props;
	const {
		state: { currentEvent },
	} = useCalendarContext();

	const { mutate: onDelete, isPending: isPendingDelete } = useDeleteCalendarEvent({
		onSuccess: () => onClose?.(),
	});

	const {
		mutate: onCreateOrUpdate,
		isPending,
	} = useCreateOrUpdateCalendarEvent({
		onSuccess: () => onClose?.(),
	});

	const isLoading = isPending || isPendingDelete;

	const { reset, control, handleSubmit, formState: { errors, isDirty } } = useForm<IFormFields>({
		defaultValues: {
			title: currentEvent?.title || '',
			description: currentEvent?.description || '',
			location: currentEvent?.location || '',
			time: getDefaultTime(currentEvent?.datetime),
			type: currentEvent?.type || eventTypesList[0],
		},
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});
	const onSubmit = useCallback(({ time, ...data }: IFormFields) => {
		onCreateOrUpdate({
			...data,
			id: currentEvent?.id,
			datetime: new Date(currentEvent?.datetime || Date.now()).setHours(time || 0, 0, 0),
		});
	}, [ currentEvent?.datetime, currentEvent?.id, onCreateOrUpdate ]);

	const handleCancel = useCallback(() => {
		if (!isDirty) return onClose?.();
		const isConfirmed = confirm('Are you sure you want to discard changes?');
		if (isConfirmed) {
			reset();
		}
	}, [ onClose, isDirty, reset ]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={6}>

				<Controller
					name="title"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							placeholder='Event name...'
							error={Boolean(errors.title)}
							helperText={errors.title?.message}
						/>
					)}
					disabled={isLoading}
					rules={{ required: 'Please enter event title' }}
				/>

				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							multiline
							minRows={3}
							maxRows={6}
							placeholder='Event description...'
						/>
					)}
					disabled={isLoading}
				/>

				<Controller
					name="location"
					control={control}
					render={({ field }) => (
						<TextField {...field} placeholder='Location...'/>
					)}
					disabled={isLoading}
				/>

				<Stack
					direction='row'
					spacing={4.5}
					alignItems='center'
				>
					<Typography>{eventDateAtFormat(new Date(currentEvent?.datetime || Date.now()))}</Typography>
					<Stack direction='row' flexGrow={1}>
						<Controller
							name="time"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									select
								>
									{timesList.map(({ label, value }) => (
										<MenuItem key={value} value={value}>{label}</MenuItem>
									))}
								</TextField>
							)}
							disabled={isLoading}
						/>
					</Stack>
				</Stack>

				<Controller
					name="type"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							select
						>
							{eventTypesList.map(type => (
								<MenuItem key={type} value={type}>{eventLabelsByType[type]}</MenuItem>
							))}
						</TextField>
					)}
					disabled={isPendingDelete || isPending}
				/>

				<Stack
					direction='row'
					spacing={6}
					sx={{
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<Button
						variant='text'
						onClick={handleCancel}
						disabled={isLoading}
					>
						Cancel
					</Button>
					{currentEvent?.id && (
						<Button
							color='error'
							onClick={() => onDelete(currentEvent?.id)}
							disabled={isLoading}
						>
							Delete
						</Button>
					)}
					<Button
						type='submit'
						disabled={isLoading || !isDirty}
					>
						{currentEvent?.id ? 'Save' : 'Add'}
					</Button>
				</Stack>

			</Stack>
		</form>
	);
};