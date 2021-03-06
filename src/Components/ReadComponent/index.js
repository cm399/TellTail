import { ReadWrapper, Header, CardWrapper } from "./styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from "./../Card";
import MockData from "./../../Static/index.json";
import { useState } from "react";


const ReadComponent = () => {
    const [MockDataState] = useState(MockData);
    const [moreResources, setMoreResources] = useState(false);

    return (
        <ReadWrapper>
            <Header>
                <div className="title">Read:</div>
                {!moreResources && <div className="read_more" onClick={() => setMoreResources(true)}>More Resources <ArrowForwardIcon /></div>}
            </Header>
            <CardWrapper>
                {Object.keys(MockDataState).map((key, i) => moreResources
                    ? (<Card key={i} title={key} {...MockDataState[key]} />) : i < 6
                        ? (<Card key={i} title={key} {...MockDataState[key]} />) : "")}
            </CardWrapper>
        </ReadWrapper>
    )
}

export default ReadComponent