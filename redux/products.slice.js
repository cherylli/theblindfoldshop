import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    populateProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      if (state.products.length === 1) {
        state.products = [];
      } else {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products.splice(index, 1);
      }
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { populateProducts, addProduct, deleteProduct } =
  productsSlice.actions;
