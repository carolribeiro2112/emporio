import styled from 'styled-components';

export const Table = styled.section`
  margin: 50px auto;
  max-width: 1000px;
`;

export const Thead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

export const Card = styled.div`
  padding: 15px;
  background-color: #FFF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  margin-top: 20px;
  border-radius: 20px;  
`;

export const TD = styled.div`
  text-align: center;

  img{
    height: 150px;
  }

  button{
    margin-left: 10px;
    margin-right:10px;
    width: 30px;
  }

`;