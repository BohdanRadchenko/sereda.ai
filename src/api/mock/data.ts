import { eventTypesList } from "@/constants/events.constants.ts";
import { IEvent } from "@/interfaces/IEvent.ts";

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOffset = (length: number) => {
	return getRandomInt(0, length - 1);
};

const getRandomNumFromDayOfWeek = (dayOfWeek: number) => {
	const getMin = () => {
		switch (dayOfWeek) {
			case 0:
			case 6:
				return 2;
			default:
				return 0;
		}
	};
	const getMax = () => {
		switch (dayOfWeek) {
			case 0:
			case 5:
			case 6:
				return 4;
			case 3:
				return 2;
			case 4:
				return 2;
			default:
				return 0;
		}
	};
	return getRandomInt(getMin(), getMax());
};

const titles = [
	'Nothing But Thieves',
	'Alchemist live: MAZEPA Band',
	'',
];

const descriptions = [
	'',
	'The popular indie rock band Nothing But Thieves will come to Kyiv on October 29, 2022 with a big solo concert. The British have repeatedly given cool performances at the largest Ukrainian festivals, filmed music videos in Kyiv, and now they are preparing a special show for the most loyal fans!',
	'Ukrainian Baroque in Kyiv!\n The band MAZEPA will play a charity concert in the center of the capital of Ukraine on October 22.',
];

const locations = [
	'offline',
	'Stereo Plaza, Kyiv, Ukraine',
	'Alchemist Bar, Kyiv, Ukraine',
	'National Palace of Arts "Ukraina", Kyiv, Ukraine',
];

const times = [ 14, 16, 18, 20 ].reverse();

export const createEvents = (): IEvent[] => {
	const MONTH_COUNT = 6;
	const y = new Date().getFullYear();
	const m = new Date().getMonth();
	const startDate = new Date(y, m);
	const endDate = new Date(y, m + MONTH_COUNT);

	const daysArray: Date[] = [];
	const currentDate = new Date(startDate);
	while (currentDate <= endDate) {
		daysArray.push(new Date(currentDate));
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return daysArray.reduce((acc, date) => {
		const eventsPerDay = getRandomNumFromDayOfWeek(date.getDay());
		const events = Array(eventsPerDay)
			.fill(null)
			.map((_, index) => {
				const datetime = new Date(date.setHours(times[index])).getTime();
				const type = eventTypesList[getRandomOffset(eventTypesList.length)];
				return {
					id: String(datetime),
					type,
					datetime,
					title: titles[getRandomOffset(titles.length)] || type,
					description: descriptions[getRandomOffset(descriptions.length)] || `${type} description...`,
					location: locations[getRandomOffset(locations.length)],
				};
			})
			.sort((a, b) => a.datetime - b.datetime);
		return [ ...acc, ...events ];
	}, [] as IEvent[]);
};