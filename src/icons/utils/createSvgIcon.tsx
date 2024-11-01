import { ElementType, memo, NamedExoticComponent, ReactNode } from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export interface ISvgIcon extends Omit<SvgIconProps, 'color' | 'component'> {
	color?:
		| 'primary'
		| 'secondary'
		| 'action'
		| 'info'
		| 'inherit'
		| 'error'
		| 'success'
		| 'warning'
		| 'disabled';
	component?: ReactNode;
}

export const createSvgIcon = (IconComponent: ElementType, options: ISvgIcon = {}) => {
	const Component = (props: ISvgIcon) => <SvgIcon
		component={IconComponent}
		viewBox="0 0 24 24"
		{...options}
		{...props}
	/>;

	return memo(Component);
};

export type TIcon = NamedExoticComponent<ISvgIcon>;
