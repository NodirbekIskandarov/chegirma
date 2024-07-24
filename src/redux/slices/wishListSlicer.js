// togirlanadigan joylari bor boshidan oxirigacha

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HomeService from '../../services/HomeService';

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  status: 'idle',
  error: null,
  loading: false
};

export const getWishList = createAsyncThunk(
  'home_products/getHomeProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await HomeService.getProducts();
      return response;

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const homeSlicer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(getWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'succeeded';
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.results = action.payload.results;
      })
      .addCase(getWishList.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const getHomeProductsLoading = (state) => state.products.loading
export const getHomeProductsData = (state) => state.products.results;
export default homeSlicer.reducer;
