import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "../../../interfaces/Image.interface";

const ImageCard: React.FC<Image> = ({ src, caption }) => {
	return (
		<Card>
			<CardMedia component="img" height="200" image={src} />
			<CardContent>
				<Typography variant="body2">{caption}</Typography>
			</CardContent>
		</Card>
	);
};

export default ImageCard;
