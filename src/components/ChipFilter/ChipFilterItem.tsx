import { memo, useCallback } from "react";

import { IChipFilterItemProps } from "./types.ts";

import { ChipFilterItemStyled } from "@/components/ChipFilter/styled.tsx";

function ChipFilterItemComponent<Value>(props: IChipFilterItemProps<Value>) {
	const {
		value,
		label,
		mainColor,
		darkColor,
		contrastColor,
		selected,
		onClick,
	} = props;

	const handleClick = useCallback(() => {
		onClick?.(value);
	}, [ onClick, value ]);

	return (
		<ChipFilterItemStyled
			selected={selected}
			bgInactive={darkColor}
			bgActive={mainColor}
			textInactive={mainColor}
			textActive={contrastColor}
			onClick={handleClick}
		>
			{label}
		</ChipFilterItemStyled>
	);
}

export const ChipFilterItem = memo(ChipFilterItemComponent) as typeof ChipFilterItemComponent;