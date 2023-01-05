// Library imports.
import { configureStore } from '@reduxjs/toolkit';

// Reducer imports.
import authReducer from './api/auth/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
