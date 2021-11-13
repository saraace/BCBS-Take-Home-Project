import { ChangeEvent, useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import { Box } from "@mui/system";
import { FormField } from "./UploadModal.styles";
import Images from "../../services/api/images";

interface UploadModalProps {
	open: boolean;
	handleClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ open, handleClose }) => {
	const [image, setImage] = useState<File>();
	const [caption, setCaption] = useState<string>("");

	const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0]);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCaption(e.target.value);

	const upload = () => {
		if (image && caption !== "") {
			Images.upload(image, caption);
		}
	};

	return (
		<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
			<DialogTitle>Upload an Image</DialogTitle>
			<DialogContent>
				<DialogContentText>Files must be in png or jpg format</DialogContentText>
				<FormField>
					<Box sx={{ flexGrow: 1 }}>
						<TextField
							variant="standard"
							label="Image"
							value={image ? image.name : ""}
							fullWidth
							disabled
						/>
					</Box>
					<Box>
						<Button variant="contained" component="label">
							Select File
							<input type="file" hidden onChange={handleImageSelect} />
						</Button>
					</Box>
				</FormField>
				<FormField>
					<TextField
						onChange={handleChange}
						variant="standard"
						id="caption"
						label="Caption"
						multiline
						fullWidth
					/>
				</FormField>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button variant="contained" onClick={upload}>
					Upload
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UploadModal;
