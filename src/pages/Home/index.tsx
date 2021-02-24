import React,{useEffect,useState} from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import Header from '../../components/Header';

import {Cards, Card} from './styles';
import { CartItemState, CartItens} from '../../store/ducks/cart/types';
import { useDispatch, useSelector } from 'react-redux';
import {addCartItem} from '../../store/ducks/cart/actions';

const Home = () => {
  const [refresh,setRefresh] = useState<Boolean>(true);

  const [product, setProduct] = useState([]);

  const token = localStorage.getItem("token")
  
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const getBeers = async () => {
    try{
      const response = await axios.get(' http://localhost:4000/beers', {headers:headers})
      setProduct(response.data)
      toast.success('Você foi autorizado a entrar no site!')
    } catch(error){
      if(error.response.status === 404){
        toast.error('Não foi possível encontrar o produto selecionado')
      }
    }
  }

  useEffect(()=>{
      getBeers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const cartItens = useSelector((state: CartItemState)=> state.cart.cartItens)

  const dispatch = useDispatch()
  
  const addBeerToCart = (i:CartItens ) => {
    

    const ArrayNewItem = cartItens

    const itemFound = ArrayNewItem.find((element:CartItens)=> element.id === i.id)
    const itemFoundIndex = ArrayNewItem.findIndex((element:CartItens) => element.id === i.id)

    if(itemFound){
      const newItem: CartItens = {
        id: itemFound.id,
        title: itemFound.title,
        description: itemFound.description,
        image: itemFound.image,
        price: itemFound.price,
        quantity: itemFound.quantity+1
      }
      ArrayNewItem.splice(itemFoundIndex,1,newItem)
      dispatch(addCartItem(ArrayNewItem))
      setRefresh(!refresh)
    } else {
      const newItem: CartItens = {
        id: i.id,
        title: i.title,
        description: i.description,
        image: i.image,
        price: i.price,
        quantity: 1
      }
      ArrayNewItem.push(newItem)
      dispatch(addCartItem(ArrayNewItem))
      setRefresh(!refresh)
    }
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
              <div>
                <p>{item.description}</p>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
              </div>
              <button onClick={()=>addBeerToCart(item)}>Adicionar</button>
            </Card>  
          ))
        }
      </Cards>
      <Toaster/>
    </>
  )
}

export default Home;

