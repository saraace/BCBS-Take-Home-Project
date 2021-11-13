import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";

ReactDOM.render(
	<React.StrictMode>
		<div>
			<CssBaseline />
			<TopBar />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
