import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LogoImg from '../../assets/logo.svg';
import LogoImg2 from '../../assets/logo2.svg';
import {H3, Head, Categories, Logo, Search} from './styles';
import Notification from '../Notification';
import {FiSearch} from 'react-icons/fi';
// import { CartItemState, CartItens } from '../../store/ducks/cart/types';


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
      <H3>A Maior <span>Loja Especializada de Cervejas</span> do Brasil.</H3>
      <Head>
        <Logo>
          <img src={LogoImg2} alt=""/>
          <img src={LogoImg} alt=""/>
        </Logo>

        <Search>
          <input type="text" placeholder="Buscar"/>
          <button><FiSearch size={20}/></button>
        </Search>
        
        
        <Link to='/carrinho'> 
          <Notification/>
        </Link>
      </Head>
      <Categories>
          {
            category!==null &&
            category.map((item:any)=>(
              <li key={item}>{item}</li>
            ))
          }
        </Categories>
    </>
  )
}

export default Header; 