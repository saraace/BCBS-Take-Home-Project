import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";
import UploadModal from "../UploadModal/UploadModal";

const TopBar = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const toggleModal = () => setModalOpen((modalOpen) => !modalOpen);

	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Image Upload App
				</Typography>
				<Button variant="contained" startIcon={<UploadIcon />} onClick={toggleModal}>
					Upload
				</Button>
			</Toolbar>
			<UploadModal open={modalOpen} handleClose={toggleModal} />
		</AppBar>
	);
};

export default TopBar;
