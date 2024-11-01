import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';

import { SPACING_FACTOR } from "@/constants/theme.constants.ts";

import { MuiAppBar } from "./components/theme.appbar.ts";
import { MuiButton } from "./components/theme.button.ts";
import { MuiCssBaseline } from "./components/theme.css-baseline.ts";
import { MuiDialog } from "./components/theme.dialog.ts";
import { MuiDivider } from "./components/theme.divider.ts";
import { MuiIconButton } from "./components/theme.icon-button.ts";
import { MuiSvgIcon } from "./components/theme.svg-icons.ts";
import { MuiTextField } from "./components/theme.textfield.ts";
import { MuiTypography, typography } from "./components/theme.typography.ts";
import { palette } from "./palette";

import { Components } from "@mui/material/styles/components";

export const components: Components<Theme> = {
	MuiCssBaseline,
	MuiTypography,
	MuiAppBar,
	MuiDivider,
	MuiButton,
	MuiIconButton,
	MuiSvgIcon,
	MuiTextField,
	MuiDialog,
};

const sharedTheme: ThemeOptions = {
	spacing: (factor: number) => `${SPACING_FACTOR * factor}px`,
	typography,
	components,
	palette,
	shape: {
		borderRadius: 6,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
};

export const theme = responsiveFontSizes(createTheme(sharedTheme));