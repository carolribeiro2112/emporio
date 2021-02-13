import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

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
        localStorage.setItem("token", response.data.accesToken)
        setAutorized(true)
      })
  }  


  return(
    <>
      <h1>Cadastro</h1>

      <div>
        <input type="text" placeholder="Digite o seu nome"/>
        <input type="text" placeholder="Digite a sua idade"/>
        <input type="email" placeholder="Digite o seu Email"/>
        <input type="password" placeholder="Digite a sua senha"/>
        <button onClick={Cadastrar}>Cadastrar</button>
        {
            authorized &&
            <Redirect to="/home"/>
          }
      </div>
    </>
  )
}

export default Cadastro;