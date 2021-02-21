import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { CartItemState, CartItens } from '../../store/ducks/cart/types';

const Carrinho = () => {
  const cartItens = useSelector((state:CartItemState)=>state.cartItem.cartItens)

  return(
    <>
      <Header/>
      <h1>Meu Carrinho</h1>
      
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
         {
           cartItens.map((item: CartItens)=>(
             <tr key={item.id}>
               <td>{item.image} - {item.title}</td>
               <td>{item.price}</td>
               <td>{item.quantity}</td>
             </tr>
           ))
         }
        </tbody>
      </table>
    </>
  )
}

export default Carrinho;