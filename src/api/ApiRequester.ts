import { CalendarService } from "./services";

export class ApiRequester {
	public readonly calendarService: CalendarService = new CalendarService();
}

export default new ApiRequester();