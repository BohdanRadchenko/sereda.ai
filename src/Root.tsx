import { StrictMode } from 'react';
import { RouterProvider } from "react-router-dom";

import { RootProvider } from "@/providers";
import router from "@/router";

export const Root = () => {
	return (
		<StrictMode>
			<RootProvider>
				<RouterProvider router={router}/>
			</RootProvider>
		</StrictMode>
	);
};