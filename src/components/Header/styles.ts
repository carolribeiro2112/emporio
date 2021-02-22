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

