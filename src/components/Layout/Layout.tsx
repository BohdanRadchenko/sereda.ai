import { FC, PropsWithChildren } from "react";

import Stack from "@mui/material/Stack";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { LayoutContainerStyled } from "./styled.tsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<LayoutContainerStyled>
			<Stack
				spacing={10}
				sx={{
					flex: 1,
				}}
			>
				<Header/>
				<Stack
					component='main'
					sx={{
						flexGrow: 1,
					}}
				>
					{children}
				</Stack>
				<Footer/>
			</Stack>
		</LayoutContainerStyled>
	);
};