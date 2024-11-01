import { FC, memo } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

interface ILoadingProps {
	fullscreen?: boolean;
}

export const Loading: FC<ILoadingProps> = memo(({ fullscreen }) => {
	return (
		<Stack
			sx={{
				alignItems: "center",
				justifyContent: "center",
				width: fullscreen ? "100%" : "auto",
				height: fullscreen ? "100%" : "auto",
				flex: fullscreen ? 1 : 'auto',
			}}
		>
			<CircularProgress/>
		</Stack>
	);
});