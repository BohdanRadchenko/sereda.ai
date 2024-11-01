import { IChipFilterProps } from "@/components/ChipFilter/types.ts";

export const enum EEventType {
	MEETING_WITH_AN_EXPERT = 'MEETING_WITH_AN_EXPERT',
	QUESTION_ANSWER = 'QUESTION_ANSWER',
	CONFERENCE = 'CONFERENCE',
	WEBINAR = 'WEBINAR',
}

export const eventLabelsByType: Record<EEventType, string> = {
	[EEventType.MEETING_WITH_AN_EXPERT]: 'Meeting with an expert',
	[EEventType.QUESTION_ANSWER]: 'Question-answer',
	[EEventType.CONFERENCE]: 'Conference',
	[EEventType.WEBINAR]: 'Webinar',
};

export const eventColorsByType: Record<EEventType, { main: string, dark: string, contrast: string }> = {
	[EEventType.MEETING_WITH_AN_EXPERT]: {
		main: '#FF4E6B',
		dark: '#FF4E6B29',
		contrast: '#131315',
	},
	[EEventType.QUESTION_ANSWER]: {
		main: '#00CC66',
		dark: '#00CC6629',
		contrast: '#131315',
	},
	[EEventType.CONFERENCE]: {
		main: '#FFBB33',
		dark: '#FFBB3329',
		contrast: '#131315',
	},
	[EEventType.WEBINAR]: {
		main: '#4DB4FF',
		dark: '#4DB4FF29',
		contrast: '#131315',
	},
};

export const eventTypesList: EEventType[] = [
	EEventType.MEETING_WITH_AN_EXPERT,
	EEventType.QUESTION_ANSWER,
	EEventType.CONFERENCE,
	EEventType.WEBINAR,
];

export const eventTypeFilterList: IChipFilterProps<EEventType>['list'] = eventTypesList.map((type) => ({
	label: eventLabelsByType[type],
	darkColor: eventColorsByType[type].dark,
	mainColor: eventColorsByType[type].main,
	contrastColor: eventColorsByType[type].contrast,
	value: type,
}));