import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import coursesReducer from "./slices/coursesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
  },
});

export default store;
