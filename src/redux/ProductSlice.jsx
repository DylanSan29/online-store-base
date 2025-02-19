import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await productService.getProducts();
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
