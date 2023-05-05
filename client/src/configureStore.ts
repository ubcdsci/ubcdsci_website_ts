// Library imports.
import { configureStore } from '@reduxjs/toolkit';

// Reducer imports.
import authReducer from '@/api/auth/authSlice';
import eventPostsReducer from '@/api/eventPosts/eventPostsSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    eventPosts: eventPostsReducer,
  },
});
