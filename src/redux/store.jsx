import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    auth: authReducer,
  },
});

export default store;