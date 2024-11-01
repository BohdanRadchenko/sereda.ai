import AppBar from '@mui/material/AppBar';
import Stack from "@mui/material/Stack";

import { pagesNavList } from "@/constants/navigation.constants.ts";

import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar/Navbar.tsx";

export const Header = () => {
	return (
		<AppBar position="static">
			<Stack
				component='header'
				direction='row'
				sx={({ palette }) => ({
					justifyContent: 'space-between',
					borderBottom: `1px solid ${palette.primary.dark}`,
				})}
			>
				<Logo/>
				<Navbar
					list={pagesNavList}
				/>
			</Stack>
		</AppBar>
	);
};