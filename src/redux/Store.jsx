// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
