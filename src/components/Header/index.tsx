import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoImg from '../../assets/logo.svg';
import LogoImg2 from '../../assets/logo2.svg';
import {FiShoppingCart} from 'react-icons/fi';
import {H3, Head, Categories, Logo, Cart} from './styles';


const Header = () => {

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const [category, setCategory] = useState<any>([])
  
  useEffect(()=>{
    axios.get('http://localhost:4000/categories', {headers:headers})
      .then(response => setCategory(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <>
      <H3>A Maior Loja Especializada de Cervejas do Brasil.</H3>
      <Head>
        <Logo>
          <img src={LogoImg2} alt=""/>
          <img src={LogoImg} alt=""/>
        </Logo>
        <Categories>
          {
            category!==null &&
            category.map((item:any)=>(
              <li key={item}>{item}</li>
            ))
          }
        </Categories>
        <Cart>
          <FiShoppingCart size={32}/>
          <p></p>
        </Cart>
      </Head>
    </>
  )
}

export default Header; 