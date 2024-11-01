import { FC } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { CssBaselineProps } from "@mui/material/CssBaseline/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from "@mui/system";

import { theme } from '@/theme';

import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

export interface IThemeProvider extends Partial<Omit<ThemeProviderProps<DefaultTheme>, 'theme'>> {
	cssBaselineProps?: CssBaselineProps;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children, ...rest }) => {
	return (
		<MuiThemeProvider
			{...rest}
			theme={theme}
		>
			<CssBaseline enableColorScheme={true}/>
			{children}
		</MuiThemeProvider>
	);
};
