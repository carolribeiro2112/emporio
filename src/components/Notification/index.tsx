import React  from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Cart } from '../Notification/styles';

const Notification = () => {
  const quantity = useSelector((state:any)=>state.cart.cartItens)
  let quantitySum = 0

  // eslint-disable-next-line array-callback-return
  quantity.map((item:any) => {
    quantitySum = quantitySum + item.quantity
  })

  return(
    <Cart>
      <FiShoppingCart size={32}/>
        {  
          quantitySum > 0 &&
          <p>{quantity}</p> 
        }   
    </Cart>
  )
}

export default Notification;