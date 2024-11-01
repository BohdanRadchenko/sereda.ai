import { FC, memo } from "react";

import Box from "@mui/material/Box";

export const CalendarBadge: FC<{ color: string }> = memo(({ color }) => {
	return (
		<Box
			sx={{
				width: 6,
				aspectRatio: '1/1',
				borderRadius: '50%',
				backgroundColor: color,
			}}
		/>
	);
});