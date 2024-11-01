import { NavLinkProps } from "react-router-dom";

export interface INavLinkProps extends Omit<NavLinkProps, 'children'> {
	size?: 'small' | 'medium';
	shouldActivity?: boolean;
	label?: string;
}
