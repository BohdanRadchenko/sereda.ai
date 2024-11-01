import { Children, FC, PropsWithChildren, ReactNode, useCallback } from "react";

import Box from "@mui/material/Box";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { CloseIcon } from "@/icons";

interface IModalProps extends Pick<DialogProps, 'open'> {
	title?: string;
	onClose?: () => void;
	actions?: ReactNode[];
}

export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
	const { children, title, onClose, open, actions } = props;

	const handleClose = useCallback(() => {
		onClose?.();
	}, [ onClose ]);

	return (
		<Dialog
			onClose={handleClose}
			open={open}
		>
			<Stack
				spacing={6}
				divider={<Divider orientation='horizontal'/>}
			>

				<Stack
					direction='row'
					sx={{
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography variant='subtitle' fontSize={24}>
						{title}
					</Typography>
					<Tooltip title="Reset filter" placement='top'>
						<IconButton onClick={handleClose}>
							<CloseIcon color='primary'/>
						</IconButton>
					</Tooltip>
				</Stack>

				<Stack spacing={6}>
					<Stack>
						{children}
					</Stack>

					<Stack
						direction='row'
						spacing={6}
						sx={{
							justifyContent: 'flex-end',
							alignItems: 'center',
						}}
					>
						{Children.map(actions, (action, index) => (
							<Box key={index}>
								{action}
							</Box>
						))}
					</Stack>
				</Stack>
			</Stack>
		</Dialog>
	);
};