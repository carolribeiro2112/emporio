import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { addCartItem } from '../../store/ducks/cart/actions';
import { CartItemState, CartItens } from '../../store/ducks/cart/types';
import {Table,Thead, Card, TD, H1, H3, Button} from './styles';
import {FiTrash2} from 'react-icons/fi'

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

  const deleteItem = (item: CartItens) => {
    const itemIndex = ArraynewItem.findIndex((element:CartItens)=> element.id===item.id)
    ArraynewItem.splice(itemIndex,1)
    dispatch(addCartItem(ArraynewItem))
    setRefresh(!refresh)
  }

  const calc = (item: CartItens) => {
    const price = (Number(item.price));
    const quantity = (item.quantity);
    const subTotal = price*quantity;
    return subTotal;
  }
  console.log(calc)


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
            
          </Thead>
      
        <div>
         {
           cartItens.map((item: CartItens)=>(
             <Card key={item.id}>
               <TD><img src={item.image} alt={item.title}/><p>{item.title}</p></TD>
               <TD>{item.price}</TD>
               <TD><button onClick={()=>decreaseQuantity(item)}>-</button>{item.quantity}<button onClick={()=>addQuantity(item)}>+</button></TD>
               <TD><FiTrash2 onClick={()=>deleteItem(item)}/></TD>
             </Card>
           ))
         }
        </div>
      </Table>
    </>
  )
}

export default Carrinho;