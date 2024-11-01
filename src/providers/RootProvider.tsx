import { FC, PropsWithChildren } from "react";

import { ReactQueryProvider } from "./ReactQueryProvider.tsx";
import { ThemeProvider } from "./ThemeProvider.tsx";

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ReactQueryProvider>
			<ThemeProvider>
				{children}
			</ThemeProvider>
		</ReactQueryProvider>
	);
};