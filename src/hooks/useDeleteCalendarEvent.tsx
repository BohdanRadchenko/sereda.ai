import { useMutation, useQueryClient } from "@tanstack/react-query";

import { GET_EVENTS_QUERY_KEY } from "@/constants/query.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

import api from "@/api/ApiRequester.ts";

interface IUseDeleteCalendarEventOptions {
	onSuccess?: () => void;
}

export const useDeleteCalendarEvent = (options: IUseDeleteCalendarEventOptions = {}) => {
	const { onSuccess } = options;
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id?: IEvent['id']) => api.calendarService.deleteEventById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [ GET_EVENTS_QUERY_KEY ],
				refetchType: 'all',
			});
			onSuccess?.();
		}
	});
};