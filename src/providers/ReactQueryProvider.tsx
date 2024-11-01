import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { FC, PropsWithChildren } from "react";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			gcTime: 5,
		},
	}
});

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};