import Stack from "@mui/material/Stack";

import { IChipFilterProps } from "./types.ts";

import { ChipFilterItem } from "./ChipFilterItem.tsx";

export function ChipFilter<Value extends string | number>(props: IChipFilterProps<Value>) {
	const {
		list,
		selected = {} as Record<Value, boolean>,
		onClick,
	} = props;

	return (
		<Stack direction='row' spacing={6}>
			{list.map((item,) => (
				<ChipFilterItem<Value>
					key={item.value}
					value={item.value}
					mainColor={item.mainColor}
					darkColor={item.darkColor}
					contrastColor={item.contrastColor}
					label={item.label}
					selected={Boolean(selected[item.value])}
					onClick={onClick}
				/>
			))}
		</Stack>
	);
}