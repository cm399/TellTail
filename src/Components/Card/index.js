import { Card as CardComp, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import styled from "styled-components";

const staticImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";

const useStyle = makeStyles({
	card: {
		borderRadius: '10px',
		margin: "15px 10px",
		float: "left",
		width: "33.33%",
		height: "300px",
		'@media (max-width: 1172px)': {
			width: '50%',
			maxWidth: '47%'
		},
		'@media (max-width: 746px)': {
			width: '100%',
			maxWidth: '100%'
		}
	}
})

const Card = ({ title, img }) => {

	const classes = useStyle();
	const { push } = useHistory();

	return (
		<CardComp className={classes.card} sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image={img[0] ?? staticImg}
				alt="green iguana"
			/>
			<CardContent>
				<Typography color="#142669" gutterBottom variant="h5" component="div">{title}</Typography>
			</CardContent>
			<ReadMore onClick={() => push(`/article/${title}`)}>Read More</ReadMore>
		</CardComp>
	)
}

export default Card;


const ReadMore = styled.div`
	font-size: 11px;
	text-decoration: underline;
	text-decoration-color: #8bc2de;
	color: #142669;
	margin: 6px 15px;
	float: right;
	cursor: pointer;
`;