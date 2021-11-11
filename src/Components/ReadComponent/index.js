import { ReadWrapper, Header, CardWrapper } from "./styled"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from "./../Card";
import MockData from "./../../Static/index.json";
import { useState } from "react";


const ReadComponent = () => {
    const [MockDataState] = useState(MockData);

    return (
        <ReadWrapper>
            <Header>
                <div className="title">Read:</div>
                <div className="read_more">More Resources <ArrowForwardIcon /></div>
            </Header>
            <CardWrapper>
                {Object.keys(MockDataState).map((key, i) => (<Card key={i} title={key} {...MockDataState[key]} />))}
            </CardWrapper>
        </ReadWrapper>
    )
}

export default ReadComponent