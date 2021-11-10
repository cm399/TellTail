import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const HomeWrapper = styled.div`

`;

export const MainTab = styled(Box)`
    background-color: #142669;

    button{
        color: white !important;
    }
`;

export function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Typography component="div">{children}</Typography>
			)}
		</div>
	);
}

export function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};