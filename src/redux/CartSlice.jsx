// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add new product
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        state.total += (quantity - item.quantity) * item.price;
        item.quantity = quantity;
      }
      if(quantity === 0){
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0; 
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
