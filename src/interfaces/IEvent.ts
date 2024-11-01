import { EEventType } from "@/constants/events.constants.ts";

export interface IEvent {
	id: string;
	type: EEventType;
	datetime: number;
	title: string;
	description: string;
	location: string;
}