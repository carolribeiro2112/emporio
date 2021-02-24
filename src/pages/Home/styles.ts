import styled from 'styled-components';
import {shade} from 'polished';

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

  div{
    h2{
      font-size: 16px;
    }

    h3{
      font-size: 14px;
    }
  }

  button{
    margin: 15px auto;
    padding: 8px 20px;
    color: #FFF;
    background-color: #fc591f;
    border-radius: 8px;
    border: none;

    &:hover{
      background-color: ${shade(0.2,'#fc591f')}
    }
  }

`;