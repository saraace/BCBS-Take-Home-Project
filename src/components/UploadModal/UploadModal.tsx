import { ChangeEvent, useState } from "react";
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField
} from "@mui/material";
import { Box } from "@mui/system";
import { green } from "@mui/material/colors";
import { useAppDispatch } from "../../services/redux/hooks";
import { setImages } from "../../services/redux/gallery";
import Images from "../../services/api/images";
import { FormField } from "./UploadModal.styles";

interface UploadModalProps {
	open: boolean;
	handleClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ open, handleClose }) => {
	const dispatch = useAppDispatch();
	const [image, setImage] = useState<File>();
	const [caption, setCaption] = useState<string>("");
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [uploading, setUploading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0]);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCaption(e.target.value);

	const upload = () => {
		setSubmitted(true);
		if (image && caption !== "") {
			setUploading(true);
			Images.upload(image, caption).then(() => {
				setSuccess(true);
				setUploading(false);
				Images.fetch().then((res) => {
					dispatch(setImages({ images: res }));
					handleClose();
				});
			});
		}
	};

	const buttonSx = {
		...(success && {
			bgcolor: green[500],
			"&:hover": {
				bgcolor: green[700]
			}
		})
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
							error={submitted && !image}
							helperText={submitted && !image ? "Please select an image." : ""}
							fullWidth
							disabled
						/>
					</Box>
					<Box>
						<Button variant="contained" component="label">
							Select Image
							<input type="file" hidden onChange={handleImageSelect} />
						</Button>
					</Box>
				</FormField>
				<FormField>
					<TextField
						onChange={handleChange}
						error={submitted && caption === ""}
						helperText={submitted && caption === "" ? "Please include a caption." : ""}
						variant="standard"
						id="caption"
						label="Caption"
						multiline
						fullWidth
					/>
				</FormField>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} disabled={uploading}>
					Cancel
				</Button>
				<Box sx={{ position: "relative" }}>
					<Button sx={buttonSx} variant="contained" onClick={upload} disabled={uploading}>
						Upload
					</Button>
					{uploading && (
						<CircularProgress
							size={24}
							sx={{
								color: green[500],
								position: "absolute",
								top: "50%",
								left: "50%",
								marginTop: "-12px",
								marginLeft: "-12px"
							}}
						/>
					)}
				</Box>
			</DialogActions>
		</Dialog>
	);
};

export default UploadModal;
