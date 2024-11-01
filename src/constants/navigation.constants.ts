import { CALENDAR_ROUTE, EVENTS_ROUTE, FAQ_ROUTE, MAIN_ROUTE } from "@/constants/routes.constants.ts";

import { INavbarItem } from "@/components/Navbar";

export const pagesNavList: INavbarItem[] = [
	{
		label: 'Main',
		path: MAIN_ROUTE,
	},
	{
		label: 'Events',
		path: EVENTS_ROUTE,
	},
	{
		label: 'Calendar',
		path: CALENDAR_ROUTE,
	},
	{
		label: 'FAQ',
		path: FAQ_ROUTE,
	},
];