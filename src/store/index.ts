import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerCart from './ducks/cart/reducer';

const createRootReducer = () => combineReducers({
  cart: reducerCart
})

const store = createStore(createRootReducer(), composeWithDevTools())

export {store}