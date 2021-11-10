import { Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import ReadComponent from "../../Components/ReadComponent";
import { a11yProps, HomeWrapper, MainTab, TabPanel } from "./styled";

const useStyle = makeStyles({
	indicator: {
		backgroundImage: `url('data:image/svg+xml;utf8,<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15.3906" width="21.7694" height="21.7694" transform="rotate(45 15.3906 0)" fill="white" /></svg>')`,
		backgroundRepeat: "no-repeat",
		backgroundColor: "#142669",
		backgroundPosition: "top",
		height: "8px"
	},
	tabs: {
		padding: '0px 40px',
	},
	tab: {
		fontSize: "12px"
	}
});

const Home = () => {
	const classes = useStyle();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<HomeWrapper>
			<MainTab sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs className={classes.tabs} classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab className={classes.tab} label="Read" {...a11yProps(0)} />
					<Tab className={classes.tab} label="Watch & Listen" {...a11yProps(1)} />
				</Tabs>
			</MainTab>
			<TabPanel value={value} index={0}>
				<ReadComponent />
			</TabPanel>
			<TabPanel value={value} index={1}>
			</TabPanel>
		</HomeWrapper>
	)
}

export default Home;