import {configureStore} from "@reduxjs/toolkit";
import {setupListners} from '@reduxjs/toolkit/query/react';
import authReducer from './features/auth/authSlice'
const store=configureStore({
    reducer: {
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

setupListner(store.dispatch)

export default store;