export const eventDateTimeFormat = (timestamp: number, locale: string = 'en-GB'): string => {
	const date = new Date(timestamp);
	const dateFormatter = new Intl.DateTimeFormat(locale, {
		day: '2-digit',
		month: 'long',
	});

	const timeFormatter = new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});

	return [ dateFormatter.format(date), timeFormatter.format(date) ].join(', ');
};

export const eventDateAtFormat = (date: Date) => {
	const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		day: '2-digit',
		month: 'long',
	});

	const timeFormatter = new Intl.DateTimeFormat('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	});

	return dateTimeFormat.format(date).replace(timeFormatter.format(date), '');
};
