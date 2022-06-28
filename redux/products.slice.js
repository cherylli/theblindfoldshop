import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from 'pages/api/products';

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
    editProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            name: action.payload.name,
            price: action.payload.price,
          };
        }
        return product;
      });
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

export const { populateProducts, addProduct, editProduct, deleteProduct } =
  productsSlice.actions;
