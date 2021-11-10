import styled from "styled-components";

export const ReadWrapper = styled.div`
    padding: 15px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .title{
        font-size: 30px;
        color: #142669;
    }
    .read_more{
        font-size: 15px;
        display: flex;
        justify-content: center;
        color: #142669;
        cursor: pointer;
        svg {
            color: #CC7191;
        }
        &:hover{
            text-decoration: underline;
        }
    }
`;

export const CardWrapper = styled.div`


`;