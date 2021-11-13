import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/UploadFile";

const TopBar = () => (
	<AppBar position="fixed">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Image Upload App
			</Typography>
			<Button variant="contained" startIcon={<UploadIcon />}>
				Upload
			</Button>
		</Toolbar>
	</AppBar>
);

export default TopBar;
