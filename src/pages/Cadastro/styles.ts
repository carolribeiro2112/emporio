import styled from 'styled-components';
import {shade} from 'polished';
import signInBackgroundImg from '../../assets/background-login.jpg'

export const Title = styled.h1`
  padding-top: 36px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const Login = styled.div`
  text-align: center;
  margin: 36px auto;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  margin: 0 auto;

  font-weight: bold;
  
  border-radius: 4px;
  border: none;
  height: 36px;
  background-color: transparent;
  border: solid 1px ${shade(0.2,'#FFF')};

  & + Input{
    margin-top: 8px;
  }

  &::placeholder{
    color: black;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  background-color: #ffa935;
  border-radius: 4px;
  border: none;
  height: 36px;
  width: 200px;
  font-weight: bold;

  &:hover {
    background-color: ${shade(0.2,'#ffa935')};
  }
`;

export const Background = styled.div`
  height: 100vh;
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Logo = styled.div`
  
  display:flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top:30px;
    height: 80px;
  }
`;