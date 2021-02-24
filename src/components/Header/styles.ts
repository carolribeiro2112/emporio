import styled from 'styled-components';

export const H3 = styled.h3`
 text-align: center;
 padding: 8px;

 span{
    background-color: #ffa935;
  }
`;

export const Head = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;

  a{
    text-decoration: none;
    color: black;
  }
`;

export const Logo = styled.div`
  img {
    height: 80px;
  }
`;

export const Categories = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-bottom: solid 5px #ffa935;

  li {
    list-style-type: none;

    &:hover{
      cursor: pointer;
      color:#ffa935;
    }

    &+li{
      margin-left: 16px;
    }
  }

  a{
    text-decoration: none;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  
  input{
    height: 40px;
    width: 400px;
    border-radius:  5px 0 0 5px;
    background-color: #f0f0f0;
    border: none;
  }
  
  button{
    height: 40px;
    width: 40px;
    border: none;

    background-color: #ffa935;
    border-radius: 0 5px 5px 0 ;
  }
`;
