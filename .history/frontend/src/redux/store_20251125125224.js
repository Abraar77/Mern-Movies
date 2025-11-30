import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './features/auth/authSlice'
import { apiSlice } from "./api/apiSlice";
import movieSlice from "./features/auth/movies/movieSlice";
const store=configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

setupListeners(store.dispatch)

export default store;