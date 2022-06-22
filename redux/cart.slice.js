import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action.payload);
      const productFound = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log('product found?', productFound);
      if (productFound) {
        productFound.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementProductQuantity: (state, action) => {
      const productFound = state.products.find(
        (product) => product.id === action.payload.id
      );
      productFound.quantity++;
    },
    decrementProductQuantity: (state, action) => {
      const productFound = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (productFound.quantity === 1) {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products.splice(index, 1);
      } else {
        productFound.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products.splice(index, 1);
    },
    clearCart: (state, _) => {
      state.products = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
