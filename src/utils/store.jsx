import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
