import { configureStore } from '@reduxjs/toolkit';
import homeSlicer from './slices/homeSlicer';

const store = configureStore({
  reducer: {
    products: homeSlicer,
  },
});

export default store;
