import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
  margin-top: 36px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const Login = styled.div`
  text-align: center;
  margin-top: 36px;
`;
export const Input = styled.input`
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  border: none;
  height: 36px;

  & + Input{
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  background-color: #ffa935;
  border-radius: 4px;
  border: none;
  height: 36px;
  width: 160px;
  font-weight: bold;

  &:hover {
    background-color: ${shade(0.2,'#ffa935')};
  }
`;