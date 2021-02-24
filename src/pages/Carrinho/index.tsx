import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { addCartItem, deleteCartItem } from '../../store/ducks/cart/actions';
import { CartItemState, CartItens } from '../../store/ducks/cart/types';
import {Table,Thead, Card, TD, H1, H3, Button, Final, Finished} from './styles';
import {FiTrash2} from 'react-icons/fi';
import toast,{ Toaster } from 'react-hot-toast';

const Carrinho = () => {
  const [refresh,setRefresh] = useState<Boolean>(true)

  const cartItens = useSelector((state:CartItemState)=>state.cart.cartItens)
  const ArraynewItem = cartItens

  const total: number[] = []
  let result: number = 0

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

  const deleteItem = (item: CartItens) => {
    const itemIndex = ArraynewItem.findIndex((element:CartItens)=> element.id===item.id)
    ArraynewItem.splice(itemIndex,1)
    dispatch(addCartItem(ArraynewItem))
    setRefresh(!refresh)
  }

  const calc = (item:CartItens) => {
    const price = (Number(item.price.substring(3).replace(',','.')));
    const quantity = (item.quantity);
    const totalItemPrice = price*quantity
    controleTotal(item)
    return totalItemPrice
  }

  const controleTotal = (item: CartItens) => {
    const totalPrice = (Number(item.price.substring(3).replace(',','.')));
    const quantity = (item.quantity);
    const subTotal = totalPrice*quantity;
    total.push(subTotal)
    const arrayReducer = (accumulator: number, currentValue: number) => accumulator+currentValue
    result = total.reduce(arrayReducer)
  }
  
  const finishOrder = () => {
    toast.success('Seu pedido foi realizado com sucesso')
    dispatch(deleteCartItem())
  }


  return(
    <>
      <Header/>
      <H1>Meu Carrinho</H1>
      
        {
          cartItens.length <= 0 
          ? <>
              <H3>Carrinho vazio :(</H3> 
                <Button>
                  <Link to='/home'>Continuar comprando</Link>
                </Button>
            </>
          : <Button>
              <Link to='/home'>Continuar comprando</Link>
            </Button>
        }
      
      <Table>        
          <Thead>
            <p>Produto</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Subtotal</p>
            <p></p>
          </Thead>
      
        <div>
         {
           cartItens.map((item: CartItens)=>(
             <Card key={item.id}>
               <TD><img src={item.image} alt={item.title}/><p>{item.title}</p></TD>
               <TD>{item.price}</TD>
               <TD><button onClick={()=>decreaseQuantity(item)}>-</button>{item.quantity}<button onClick={()=>addQuantity(item)}>+</button></TD>
               <TD>{calc(item).toFixed(2)}</TD>
               <TD><FiTrash2 size={24} onClick={()=>deleteItem(item)}/></TD>
             </Card>
           ))
         }
        </div>
      </Table>

      <Final>
        <h2>Total:</h2>
        <p>R${result.toFixed(2)}</p>
      </Final>

      <Finished onClick={finishOrder}>Finalizar Compra</Finished>

      <Toaster/>
    </>
  )
}

export default Carrinho;