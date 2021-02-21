import styled from 'styled-components';

export const H3 = styled.h3`
 text-align: center;
 padding: 8px;
`;

export const Head = styled.div`
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
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
  margin-left: -80px;

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
`;

