import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { pagesNavList } from "@/constants/navigation.constants.ts";

import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";

export const Footer = () => {
	return (
		<Stack
			component='footer'
			spacing={6}
			sx={{
				alignItems: 'center'
			}}
		>
			<Divider orientation='horizontal' flexItem variant='fullWidth'/>
			<Logo/>
			<Navbar
				list={pagesNavList}
				size='small'
				shouldActivity={false}
			/>
			<Typography
				variant='caption'
				color='textSecondary'
			>
				&#169; {new Date().getFullYear()} All rights reserved
			</Typography>
		</Stack>
	);
};