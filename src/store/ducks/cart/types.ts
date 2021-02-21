export enum CartType {
  ADD_ITEM = '@ADD_ITEM',
  DELETE_ITEM = '@DELETE_ITEM'
}

export interface CartItens {
  id: number;
  description: string;
  image: string;
  price: string;
  title: string;
  quantity: number;
}

export interface ArrayCartItens {
  cartItens: CartItens[];
}

export interface CartItemState {
  cart: ArrayCartItens;
}