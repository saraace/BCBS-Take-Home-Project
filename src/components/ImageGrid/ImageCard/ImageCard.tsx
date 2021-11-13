import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ImageCardProps {
	image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
	return (
		<Card>
			<CardMedia component="img" height="200" {...{ image }} />
			<CardContent>
				<Typography variant="body2">caption will go here</Typography>
			</CardContent>
		</Card>
	);
};

export default ImageCard;
