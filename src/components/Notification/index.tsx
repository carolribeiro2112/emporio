import React  from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { CartItens, CartItemState } from '../../store/ducks/cart/types';
import { Cart } from '../Notification/styles';

const Notification = () => {
  const quantity = useSelector((state:CartItemState)=> state.cart.cartItens)
  let quantitySum = 0

  // eslint-disable-next-line array-callback-return
  quantity.map((item:CartItens) => {
    quantitySum = quantitySum + item.quantity
  })

  console.log(quantitySum)

  return(
    <Cart>
      <FiShoppingCart size={32}/>
        {  
          quantitySum > 0 &&
          <p>{quantitySum}</p> 
        }   
    </Cart>
  )
}

export default Notification;