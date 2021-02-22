import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { addCartItem } from '../../store/ducks/cart/actions';
import { CartItemState, CartItens } from '../../store/ducks/cart/types';
import {Table,Thead, Card, TD} from './styles';

const Carrinho = () => {
  const [refresh,setRefresh] = useState<Boolean>(true)

  const cartItens = useSelector((state:CartItemState)=>state.cart.cartItens)
  const ArraynewItem = cartItens

  const dispatch = useDispatch()

  console.log(cartItens)

  const addQuantity = (item: CartItens) => {
    const itemIndex = ArraynewItem.findIndex((element:CartItens)=> element.id===item.id)

    ArraynewItem[itemIndex].quantity = item.quantity+1
    dispatch(addCartItem(ArraynewItem))
    setRefresh(!refresh)
  }

  const decreaseQuantity = (item: CartItens) => {
    const itemIndex = ArraynewItem.findIndex((element:CartItens)=> element.id===item.id)

    if(ArraynewItem[itemIndex].quantity>0){
      ArraynewItem[itemIndex].quantity = item.quantity-1
      dispatch(addCartItem(ArraynewItem))
      setRefresh(!refresh)
    }
  }


  return(
    <>
      <Header/>
      <h1>Meu Carrinho</h1>
      {
        cartItens.length <= 0 
        ? <>
            <h3>Carrinho vazio :(</h3> 
              <Link to='/home'>Continuar comprando</Link>
          </>
        :   <Link to='/home'>Continuar comprando</Link>
      }
      
      <Table>        
          <Thead>
            <p>Produto</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Subtotal</p>
          </Thead>
      
        <div>
         {
           cartItens.map((item: CartItens)=>(
             <Card key={item.id}>
               <TD><img src={item.image} alt={item.title}/><p>{item.title}</p></TD>
               <TD>{item.price}</TD>
               <TD><button onClick={()=>decreaseQuantity(item)}>-</button>{item.quantity}<button onClick={()=>addQuantity(item)}>+</button></TD>
               <TD>{item.price}</TD>
             </Card>
           ))
         }
        </div>
      </Table>
    </>
  )
}

export default Carrinho;