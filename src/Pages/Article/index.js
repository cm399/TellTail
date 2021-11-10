import { useParams } from "react-router";
import MockData from "./../../Static/index.json";

const Article = (props) => {

    const { title } = useParams();
    console.log("title", MockData[title]);


    return (
        <>
            {title}
        </>
    )
}

export default Article;