import { INavLinkProps } from "@/components/NavLink";

export interface INavbarItem {
	label: string,
	path: string
}

export interface INavbarProps<LinkItem extends INavbarItem> extends Pick<INavLinkProps, 'size' | 'shouldActivity'> {
	list?: LinkItem[];
}