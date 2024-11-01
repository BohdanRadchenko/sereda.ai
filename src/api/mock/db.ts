import { IEvent } from "@/interfaces/IEvent.ts";

import { createEvents } from "@/api/mock/data.ts";

const EVENTS_LOCAL_KEY = 'events';

const sleep = async (ms: number = 200) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const getLocalEvents = (): IEvent[] => {
	return JSON.parse(localStorage.getItem(EVENTS_LOCAL_KEY) || '[]');
};

const setLocalEvents = (data: IEvent[]) => {
	localStorage.setItem(EVENTS_LOCAL_KEY, JSON.stringify(data));
};

export class Db {
	public async get(): Promise<{ data: IEvent[] }> {
		await sleep(800);
		const saveAndGetDefault = () => {
			const data = createEvents();
			setLocalEvents(data);
			return data;
		};
		try {
			let data: IEvent[] = getLocalEvents();
			if (!data?.length) {
				data = saveAndGetDefault();
			}
			return { data };
		} catch (e) {
			console.error('Error parsing events:', e);
			return {
				data: saveAndGetDefault()
			};
		}
	}

	public async delete(id: IEvent['id']): Promise<void> {
		await sleep(200);
		const events = getLocalEvents();
		const newEvents = events.filter((e) => e.id !== id);
		setLocalEvents(newEvents);
	}

	public async create(event: Partial<IEvent>): Promise<{ data: IEvent }> {
		await sleep(200);
		const newEvent = {
			...event,
			id: String(+Date.now()),
		} as IEvent;
		const events = getLocalEvents();
		events.push(newEvent);
		const newEvents = events.sort((a, b) => a.datetime - b.datetime);
		setLocalEvents(newEvents);
		return { data: newEvent };
	}

	public async update(event: Partial<IEvent>): Promise<{ data: IEvent }> {
		await sleep(200);
		const events = getLocalEvents();
		let newEvent;
		const newEvents = events
			.map((e) => {
				if (e.id === event.id) {
					newEvent = {
						...e,
						...event,
					};
					return newEvent;
				}
				return e;
			})
			.sort((a, b) => a.datetime - b.datetime);
		if (!newEvent) {
			throw new Error('Event not found');
		}
		setLocalEvents(newEvents);
		return { data: newEvent };
	}
}

export default new Db();