import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import ImageGrid from "./components/ImageGrid/ImageGrid";

ReactDOM.render(
	<React.StrictMode>
		<div>
			<CssBaseline />
			<TopBar />
			<ImageGrid />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
