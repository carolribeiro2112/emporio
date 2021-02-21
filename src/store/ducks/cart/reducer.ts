import {CartType,ArrayCartItens} from './types';

const initialStateCart: ArrayCartItens = {
  cartItens: []
}

function reducerCart(state=initialStateCart, action:any){
  switch(action.type){
    case CartType.ADD_ITEM:
      return{
        ...state,
        cartItens: action.payload,
      }
    case CartType.DELETE_ITEM: 
      return{
        cartItens: []
      }
    default:
      return state
  }
}

export default reducerCart;

