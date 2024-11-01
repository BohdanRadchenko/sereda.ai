import { lazy } from 'react';
import { createHashRouter, Navigate, Outlet, RouteObject } from 'react-router-dom';

import {
	CALENDAR_ROUTE,
	DEFAULT_ROUTE,
	EVENTS_ROUTE,
	FAQ_ROUTE,
	MAIN_ROUTE,
	ROOT_ROUTE
} from "@/constants/routes.constants.ts";

import { Layout } from '@/components/Layout';
import LazyLoader from '@/components/LazyLoader';


const MainPageLazy = LazyLoader(
	lazy(() => import('../pages/MainPage.tsx'))
);

const EventsPageLazy = LazyLoader(
	lazy(() => import('../pages/EventsPage.tsx'))
);

const CalendarPageLazy = LazyLoader(
	lazy(() => import('../pages/CalendarPage.tsx'))
);

const FAQPageLazy = LazyLoader(
	lazy(() => import('../pages/FAQPage.tsx'))
);


export const routes: RouteObject[] = [
	{
		path: ROOT_ROUTE,
		element: (
			<Layout>
				<Outlet/>
			</Layout>
		),
		children: [
			{
				index: true,
				element: <Navigate to={DEFAULT_ROUTE} replace/>
			},
			{
				path: MAIN_ROUTE,
				element: <MainPageLazy/>,
			},
			{
				path: EVENTS_ROUTE,
				element: <EventsPageLazy/>,
			},
			{
				path: CALENDAR_ROUTE,
				element: <CalendarPageLazy/>,
			},
			{
				path: FAQ_ROUTE,
				element: <FAQPageLazy/>,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to={DEFAULT_ROUTE} replace/>
	}
];

// export default createBrowserRouter(routes);
export default createHashRouter(routes);
