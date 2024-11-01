import { JSX } from 'react';

interface ICalendarLocales {
	locale?: string;
}

export interface ICalendarWeekProps extends ICalendarLocales {

}

export interface ICalendarMonthDaysItemProps {
	date: Date;
	isCurrentMonth?: boolean;
	badgesList?: (date: Date) => string[];
	renderDayPopup?: (date: Date) => JSX.Element;
}

export interface ICalendarMonthDaysProps extends ICalendarLocales, ICalendarMonthDaysItemProps {

}

export interface ICalendarProps extends ICalendarMonthDaysProps {
	fullWidth?: boolean;
}