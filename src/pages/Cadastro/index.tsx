import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import {Login, Title, Input, Button } from './styles';

const Cadastro = () => {

  const inputEmail = useRef<HTMLInputElement>(null)
  const inputSenha = useRef<HTMLInputElement>(null)
  const inputIdade = useRef<HTMLInputElement>(null)
  const inputNome = useRef<HTMLInputElement>(null)

  const [authorized, setAutorized] = useState<Boolean>(false)

  const Cadastrar = () =>{
    
    const request = {
      name: inputNome.current?.value,
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
      age: inputIdade.current?.value
    }

    axios.post('http://localhost:4000/register', request)
      .then(response => {
        localStorage.setItem("token", response.data.accessToken)
        setAutorized(true)
      })
  }  


  return(
    <>
      <Title>Cadastro</Title>

      <Login>
        <Input type="text" ref={inputNome} placeholder="Digite o seu nome"/>
        <Input type="text" ref={inputIdade} placeholder="Digite a sua idade"/>
        <Input type="email" ref={inputEmail} placeholder="Digite o seu Email"/>
        <Input type="password" ref={inputSenha} placeholder="Digite a sua senha"/>
        <Button onClick={Cadastrar}>Cadastrar</Button>
        {
            authorized && <Redirect to="/home"/>
          }
      </Login>
    </>
  )
}

export default Cadastro;