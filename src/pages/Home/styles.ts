import styled from 'styled-components';

export const Cards = styled.div`
  margin: 50px auto;
  max-width: 750px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
`;

export const Card = styled.div`
  background-color: #FFF;
  padding: 10px;
  border-radius: 20px;
  text-align: center;

  img{
    border-radius: 20px;
    height: 180px;
  }

  h2{
    font-size: 16px;
  }

  h3{
    font-size: 14px;
  }

`;