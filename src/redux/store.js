import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import imageReducer from './slices/imageSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        image: imageReducer,
    },
})