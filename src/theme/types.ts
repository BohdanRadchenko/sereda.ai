import * as React from "react";

declare module '@mui/material/styles' {
	interface TypographyVariants {
		head: React.CSSProperties;
		title: React.CSSProperties;
		subtitle: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		head: React.CSSProperties;
		title: React.CSSProperties;
		subtitle: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		head: true;
		title: true;
		subtitle: true;
		subtitle1: false;
		subtitle2: false;
	}
}