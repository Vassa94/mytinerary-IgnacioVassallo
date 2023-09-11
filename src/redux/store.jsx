import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice'; // Crear esta parte

const store = configureStore({
  reducer: {
    cities: citiesReducer, // Agregar más reducers aquí si es necesario
  },
});

export default store;