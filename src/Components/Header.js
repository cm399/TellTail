import styled from "styled-components";

const Branding = styled.div`
    padding: 35px 40px;
    font-size: 30px;
    @media (max-width: 768px) {
    padding: 15px 20px;
    font-size: 24px;
    }
        
`;

const Header = () => {
    return (<Branding>The Breeder Resource Center</Branding>)
}

export default Header;