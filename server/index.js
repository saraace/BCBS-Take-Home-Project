const express = require("express");
const fs = require("fs");
const uploadFile = require("./upload");

const app = express();
const port = 3001;
const uploadFolder = __dirname + "/../public/images";

app.use(express.urlencoded({ extended: true }));

app.post("/upload", async (req, res) => {
	try {
		await uploadFile(req, res);

		if (req.file === undefined) {
			return res.status(400).send({ message: "Please select an image." });
		}

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
	fs.readdir(uploadFolder, function (err, files) {
		if (err) {
			res.status(500).send({
				message: "Unable to scan files!"
			});
		}

		let images = files.map((file) => ({
			name: file
		}));

		res.status(200).send(images);
	});
});

app.listen(port, () => {
	console.log(`API server running on localhost:${port}`);
});
