import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { DEFAULT_ROUTE } from "@/constants/routes.constants.ts";

import { LogoStyled } from './styled.tsx';

export interface ILogoProps {
	size?: 'medium' | 'large';
}

export const Logo: FC<ILogoProps> = ({ size = 'medium' }) => {
	const mavigate = useNavigate();

	const handleClick = useCallback(() => {
		mavigate(DEFAULT_ROUTE);
	}, [ mavigate ]);

	return (
		<LogoStyled
			size={size}
			onClick={handleClick}
		>
			LOGO
		</LogoStyled>
	);
};
