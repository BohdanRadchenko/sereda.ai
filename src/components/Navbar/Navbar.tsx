import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";

import { INavbarItem, INavbarProps } from "./types.ts";

import { NavLink } from "@/components/NavLink";

const spacingBySize: Record<NonNullable<INavbarProps<INavbarItem>['size']>, number> = {
	'small': 14.5,
	'medium': 20,
};

export const Navbar = <LinkItem extends INavbarItem, >(
	{
		list = [] as LinkItem[],
		size = 'medium',
		shouldActivity = true,
	}: INavbarProps<LinkItem>
) => {
	return (
		<Stack direction="row" component="nav">
			<Stack
				component={List}
				spacing={spacingBySize[size]}
				direction='row'
				sx={{
					padding: 0,
				}}
			>
				{list.map(({ label, path }) => (
					<ListItem
						key={path}
						sx={{
							padding: 0,
						}}
					>
						<NavLink
							to={path}
							size={size}
							shouldActivity={shouldActivity}
							label={label}
						/>
					</ListItem>
				))}
			</Stack>
		</Stack>
	);
};