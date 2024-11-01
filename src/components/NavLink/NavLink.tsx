import { memo } from "react";

import { INavLinkProps } from "./types.ts";

import { NavLinkStyled, NavLinkTypographyStyled } from "./styled.tsx";


export const NavLink = memo((props: INavLinkProps) => {
	const {
		size = 'medium',
		label,
		shouldActivity = true,
		...restProps
	} = props;
	return (
		<NavLinkStyled
			{...restProps}
			size={size}
		>
			{({ isActive }) => (
				<NavLinkTypographyStyled
					isActive={isActive}
					shouldActivity={shouldActivity}
				>
					{label}
				</NavLinkTypographyStyled>
			)}
		</NavLinkStyled>
	);
});