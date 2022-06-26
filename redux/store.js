import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { productsReducer } from './products.slice';

const reducer = {
  cart: cartReducer,
  products: productsReducer,
};

const store = configureStore({
  reducer,
});

export default store;
