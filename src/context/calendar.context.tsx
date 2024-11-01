import { createContext, Dispatch, FC, PropsWithChildren, useReducer } from "react";

import { EEventType } from "@/constants/events.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

export enum EActionTypes {
	TOGGLE_EVENT_TYPE_FILTER = "TOGGLE_EVENT_TYPE_FILTER",
	CLEAR_EVENT_TYPE_FILTER = "CLEAR_EVENT_TYPE_FILTER",
	SET_CURRENT_EVENT = "SET_CURRENT_EVENT",
}

type SetEventTypeFilter = {
	type: EActionTypes.TOGGLE_EVENT_TYPE_FILTER;
	payload: EEventType
}

type ClearEventTypeFilter = {
	type: EActionTypes.CLEAR_EVENT_TYPE_FILTER;
}

type EventEditor = {
	type: EActionTypes.SET_CURRENT_EVENT;
	payload: Partial<IEvent> | null;
}

type CalendarActions = SetEventTypeFilter | ClearEventTypeFilter | EventEditor

type CalendarState = {
	selected: EEventType[];
	currentEvent?: Partial<IEvent> | null;
}

interface ICalendarContext {
	state: CalendarState;
	dispatch: Dispatch<CalendarActions>;
}

export const CalendarContext = createContext<ICalendarContext | null>(null);

const reducer = (state: CalendarState, action: CalendarActions) => {
	switch (action.type) {
		case EActionTypes.TOGGLE_EVENT_TYPE_FILTER:
			return {
				...state,
				selected: state.selected.includes(action.payload)
					? state.selected.filter(item => item !== action.payload)
					: [ ...state.selected, action.payload ]
			};
		case EActionTypes.CLEAR_EVENT_TYPE_FILTER:
			return {
				...state,
				selected: [],
			};
		case EActionTypes.SET_CURRENT_EVENT:
			return {
				...state,
				currentEvent: action.payload
			};
		default:
			return state;
	}
};

const initialState: CalendarState = {
	selected: [],
};

export const toggleEventTypeFilter = (payload: EEventType): SetEventTypeFilter => ({
	type: EActionTypes.TOGGLE_EVENT_TYPE_FILTER,
	payload,
});

export const clearEventTypeFilter = (): ClearEventTypeFilter => ({
	type: EActionTypes.CLEAR_EVENT_TYPE_FILTER,
});

export const onEventEdit = (payload: Partial<IEvent>): EventEditor => ({
	type: EActionTypes.SET_CURRENT_EVENT,
	payload,
});

export const onEventCreate = (datetime: number): EventEditor => ({
	type: EActionTypes.SET_CURRENT_EVENT,
	payload: { datetime } as Partial<IEvent>,
});

export const onCloseEventEditor = (): EventEditor => ({
	type: EActionTypes.SET_CURRENT_EVENT,
	payload: null,
});

export const CalendarContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	return (
		<CalendarContext.Provider value={{ state, dispatch }}>
			{children}
		</CalendarContext.Provider>
	);
};