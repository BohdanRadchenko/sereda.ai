import { IEvent } from "@/interfaces/IEvent.ts";

import db from '../mock/db.ts';

export class CalendarService {
	public async getEvents(): Promise<IEvent[]> {
		return db.get().then(({ data }) => data);
	}

	public async deleteEventById(id?: IEvent['id']): Promise<void> {
		if (!id) return;
		return db.delete(id);
	}

	public async create(event: Partial<IEvent>): Promise<IEvent> {
		return db.create(event).then(({ data }) => data);
	}

	public async update(event: Partial<IEvent>): Promise<IEvent> {
		return db.update(event).then(({ data }) => data);
	}
}