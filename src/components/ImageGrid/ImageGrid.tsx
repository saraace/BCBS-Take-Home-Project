import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Image from "../../interfaces/Image.interface";
import Images from "../../services/api/images";
import ImageCard from "./ImageCard/ImageCard";
import { ImageContainer } from "./ImageGrid.styles";

const ImageGrid = () => {
	const [images, setImages] = useState<Image[]>([]);

	useEffect(() => {
		Images.fetch().then((res) => {
			console.log(res);
			setImages(res);
		});
	}, []);

	return (
		<ImageContainer>
			<Grid container spacing={2}>
				{images.map((image, i) => (
					<Grid key={i} item xs={12} sm={6} md={4} lg={3}>
						<ImageCard {...image} />
					</Grid>
				))}
			</Grid>
		</ImageContainer>
	);
};

export default ImageGrid;
