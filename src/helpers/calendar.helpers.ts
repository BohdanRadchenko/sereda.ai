const defaultLocale = window.navigator.language;

export const getFirstDayOfWeekByLocale = (locale: string = defaultLocale) => {
	const intl = new Intl.Locale(locale);
	return 'weekInfo' in intl ? (intl.weekInfo as { firstDay: number }).firstDay : 7;
};

const daysInMonth = (month: number, year: number) => {
	return 32 - new Date(year, month, 32).getDate();
};

const firstDayOfMonth = (month: number, year: number) => {
	return new Date(year, month, 1).getDay();
};

export const getLocalizedDaysOfWeek = (locale: string = defaultLocale): string[] => {
	const firstDayOfWeek = getFirstDayOfWeekByLocale(locale);

	const now = new Date();
	while (now.getDay() !== 0) {
		now.setDate(now.getDate() - 1);
	}

	const baseDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + firstDayOfWeek);

	const weekDays = [];

	for (let i = 0; i < 7; i++) {
		const date = new Date(baseDate);
		date.setDate(baseDate.getDate() + i);
		weekDays.push(new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date));
	}

	return weekDays;
};

// TODO: implement offset days of week
export const getMonthDaysMatrix = (
	params: {
		year?: number;
		month?: number;
		locale?: string
	}
): Date[][] => {
	const {
		year = new Date().getFullYear(),
		month = new Date().getMonth(),
	} = params;

	const daysLength = daysInMonth(month, year);
	const startDay = firstDayOfMonth(month, year);

	const daysPerWeek = 7;
	const length = Math.ceil((daysLength + startDay) / daysPerWeek) * daysPerWeek;
	const matrix: Date[][] = [];
	Array
		.from({ length }).forEach((_, i) => {
		const d = new Date(year, month, i - startDay + 1);
		const weekIndex = Math.floor(i / 7);
		if (!matrix[weekIndex]) {
			matrix[weekIndex] = [];
		}
		matrix[weekIndex].push(d);
		return matrix;
	});
	return matrix;
};

