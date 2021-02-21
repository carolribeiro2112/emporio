import {action} from 'typesafe-actions';
import {CartType, CartItens} from './types';

export const addCartItem = (payload:CartItens[]) => action(CartType.ADD_ITEM,payload)

export const deleteCartItem = () => action(CartType.DELETE_ITEM)