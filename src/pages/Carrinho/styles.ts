import styled from 'styled-components';
import {shade, lighten} from 'polished';

export const H1 = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export const H3 = styled.h3`
  text-align: center;
`;

export const Table = styled.section`
  margin: 50px auto;
  max-width: 1000px;
`;

export const Thead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

export const Card = styled.div`
  padding: 15px;
  background-color: #FFF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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

export const Button = styled.div`
  a{
    background-color: green;
    padding: 20px;
    border-radius: 5px;
    margin-left: 50px;
    text-decoration: none;
    color: #FFF;
    transition: background-color 0.2s;

    &:hover{
      background-color: ${lighten(0.05,'green')};
    }
  }
`;

export const Final = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 22px;
    margin: 0 8px;
  }

`;

export const Finished = styled.button`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  border: none;
  background-color:#ffa935; 
  font-weight: bold;
  transition: background-color 0.2s;
 
  &:hover{
    background-color: ${shade(0.2,'#ffa935')};
  }
`;