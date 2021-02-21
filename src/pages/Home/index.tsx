import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

import {Cards, Card} from './styles';
import { CartItemState, CartItens} from '../../store/ducks/cart/types';
import { useDispatch, useSelector } from 'react-redux';
import {addCartItem} from '../../store/ducks/cart/actions';

const Home = () => {

  const [product, setProduct] = useState([]);

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(()=>{
    axios.get(' http://localhost:4000/beers', {headers:headers})
      .then(response => setProduct(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const cartItens = useSelector((state: CartItemState)=> state.cart.cartItens)

  const dispatch = useDispatch()
  
  const addBeerToCart = (i:CartItens ) => {
    cartItens.push(i)
    dispatch(addCartItem(cartItens))
    console.log(cartItens)
  }

  

  return(
    <>
      <Header/>
       <Cards>
        {
          product !== null &&
          product.map((item:CartItens)=>(
            <Card key={item.id}>
              <img src={item.image} alt={item.title}/>
              <p>{item.description}</p>
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
              <button onClick={()=>addBeerToCart(item)}>Adicionar</button>
            </Card>  
          ))
        }
      </Cards>
    </>
  )
}

export default Home;

