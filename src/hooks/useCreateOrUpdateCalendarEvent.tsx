import { useMutation, useQueryClient } from "@tanstack/react-query";

import { GET_EVENTS_QUERY_KEY } from "@/constants/query.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

import api from "@/api/ApiRequester.ts";

interface IUseCreateOrUpdateCalendarEventOptions {
	onSuccess?: () => void;
}

export const useCreateOrUpdateCalendarEvent = (options: IUseCreateOrUpdateCalendarEventOptions = {}) => {
	const { onSuccess } = options;
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (event: Partial<IEvent>) => {
			const action = event.id ? api.calendarService.update : api.calendarService.create;
			return action(event);
		},
		onError: (error) => {
			alert(error);
		},
		// onSuccess: (data,) => {
		// 	queryClient.setQueryData(
		// 		[ GET_EVENTS_QUERY_KEY ],
		// 		(oldData: IEvent[]) => {
		// 			const newData = !data.id
		// 				? [ ...oldData, data ]
		// 				: oldData.map(d => {
		// 					if (d.id !== data.id) return d;
		// 					return {
		// 						...d,
		// 						...data,
		// 					};
		// 				});
		// 			return newData.sort((a, b) => a.datetime - b.datetime);
		// 		});
		// 	onSuccess?.();
		// }
		onSuccess: () => {
			onSuccess?.();
			queryClient.invalidateQueries({
				queryKey: [ GET_EVENTS_QUERY_KEY ],
				refetchType: 'all',
			});
		}
	});
};