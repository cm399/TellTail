import styled from 'styled-components';


export const ArticleWrapper = styled.div`

`;

export const Banner = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }

  .auther{
    float: right;
  }

`;

export const Heading = styled.div`
  font-size: 35px;
  color: #142669;
  line-height: 50px;
`;

export const Image = styled.img`
  height: 290px;
  width: 600px;
  object-fit: cover;
  border-radius: 10px;
  display: flex;
  margin: 35px auto;
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Description = styled.div`
  line-height: 20px;
  font-weight: 300;
  text-align: justify;
  p{
    margin: 25px 0px;
  }
`;
