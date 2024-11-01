import { JSX, LazyExoticComponent, Suspense } from 'react';

import { Loading } from "@/components/Loading";

export const LazyLoader =
	(Component: LazyExoticComponent<() => JSX.Element>) =>
		(props: any): JSX.Element =>
			(
				<Suspense fallback={<Loading fullscreen/>}>
					<Component {...props} />
				</Suspense>
			);
