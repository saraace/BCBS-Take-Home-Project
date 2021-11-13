import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { setImages } from "../../services/redux/gallery";
import { ImageContainer } from "./ImageGrid.styles";
import Images from "../../services/api/images";
import ImageCard from "./ImageCard/ImageCard";

const ImageGrid = () => {
	const dispatch = useAppDispatch();
	const images = useAppSelector((state) => state.gallery.images);

	useEffect(() => {
		Images.fetch().then((res) => {
			dispatch(setImages({ images: res }));
		});
	}, [dispatch]);

	return (
		<ImageContainer>
			<Grid container spacing={2}>
				{images &&
					images.map((image, i) => (
						<Grid key={i} item xs={12} sm={6} md={4} lg={3}>
							<ImageCard {...image} />
						</Grid>
					))}
			</Grid>
		</ImageContainer>
	);
};

export default ImageGrid;
