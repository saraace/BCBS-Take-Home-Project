const express = require("express");
const loki = require("lokijs");
const uploadFile = require("./upload");

const app = express();
const db = new loki("project.db");
const images = db.addCollection("images");

const port = 3001;
const publicPath = "/uploads";

// adding demo images to collection
images.insert({ src: `${publicPath}/coffee-01.jpg`, caption: "Coffee Image 01" });
images.insert({ src: `${publicPath}/coffee-02.jpg`, caption: "Coffee Image 02" });
images.insert({ src: `${publicPath}/coffee-03.jpg`, caption: "Coffee Image 03" });
images.insert({ src: `${publicPath}/coffee-04.jpg`, caption: "Coffee Image 04" });
images.insert({ src: `${publicPath}/coffee-05.jpg`, caption: "Coffee Image 05" });
images.insert({ src: `${publicPath}/coffee-06.jpg`, caption: "Coffee Image 06" });
images.insert({ src: `${publicPath}/coffee-07.jpg`, caption: "Coffee Image 07" });

app.use(express.urlencoded({ extended: true }));

// POST endpoint for uploading images
app.post("/upload", async (req, res) => {
	try {
		await uploadFile(req, res);

		if (req.file === undefined) {
			return res.status(400).send({ message: "Please select an image." });
		}

		images.insert({
			name: req.file.originalname,
			src: `${publicPath}/${req.file.originalname}`,
			caption: req.body.caption
		});

		setTimeout(() => {
			res.status(200).send({
				message: "Image uploaded successfully: " + req.file.originalname
			});
		}, 3000);
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

// GET endpoint for fetching images
app.get("/images", (req, res) => {
	setTimeout(() => {
		res.status(200).send(images.data);
	}, 300);
});

app.listen(port, () => {
	console.log(`API server running on localhost:${port}`);
});
