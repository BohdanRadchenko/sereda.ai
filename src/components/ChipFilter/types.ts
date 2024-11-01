export interface IChipFilterItem<Value> {
	value: Value;
	label?: string;
	mainColor?: string;
	darkColor?: string;
	contrastColor?: string;
}

export interface IChipFilterItemProps<Value> extends IChipFilterItem<Value> {
	onClick?: (value: Value) => void;
	selected?: boolean;
}

export interface IChipFilterProps<Value extends string | number> extends Pick<IChipFilterItemProps<Value>, 'onClick'> {
	list: Array<IChipFilterItem<Value>>;
	selected?: Record<Value, boolean>;
}