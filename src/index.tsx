import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";
import { CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import ImageGrid from "./components/ImageGrid/ImageGrid";

ReactDOM.render(
	<React.StrictMode>
		<Provider {...{ store }}>
			<CssBaseline />
			<TopBar />
			<ImageGrid />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
