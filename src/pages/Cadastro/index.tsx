import axios from 'axios';
import React, { useState, useRef} from 'react';
import toast, {Toaster} from 'react-hot-toast';
// import {IconBaseProps} from 'react-icons';
import { Redirect } from 'react-router-dom';
// import {FaBirthdayCake} from 'react-icons/fa'

import {Login, Title, Input, Button, Background } from './styles';
// import { FiUser } from 'react-icons/fi';

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   icon: React.ComponentType<IconBaseProps>;
// }

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

    const getUser = async () => {
      try{
        if(Number(request.age)>=18){
          const response= await axios.post('http://localhost:4000/register', request)
            localStorage.setItem("token", response.data.accessToken)
            setAutorized(true)
        } else {
          toast.error('Acesso negado para menores de 18 anos')
        }
        }catch(error){
          console.log(error)
        }
      } 
      getUser();   
     
    } 


  return(
      <>
      <Toaster/>
    
      <Background> 
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
        
      </Background> 
    </>
  )
}

export default Cadastro;