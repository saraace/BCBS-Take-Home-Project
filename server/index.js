const express = require("express");
const loki = require("lokijs");
const uploadFile = require("./upload");

const app = express();
const db = new loki("project.db");
const images = db.addCollection("images");

const port = 3001;
const publicPath = "/uploads";

app.use(express.urlencoded({ extended: true }));

app.post("/upload", async (req, res) => {
	try {
		await uploadFile(req, res);

		if (req.file === undefined) {
			return res.status(400).send({ message: "Please select an image." });
		}

		console.log(req.body.caption);

		images.insert({
			name: req.file.originalname,
			src: `${publicPath}/${req.file.originalname}`,
			caption: req.body.caption
		});

		res.status(200).send({
			message: "Image uploaded successfully: " + req.file.originalname
		});
	} catch (e) {
		console.log(e);

		if (e.code === "LIMIT_FILE_SIZE") {
			return res.status(500).send({
				message: "Image size cannot be larger than 2MB"
			});
		}

		res.status(500).send({
			message: `Could not upload the image: ${req.file.originalname}. ${e}`
		});
	}
});

app.get("/images", (req, res) => {
	res.status(200).send(images.data);
});

app.listen(port, () => {
	console.log(`API server running on localhost:${port}`);
});
