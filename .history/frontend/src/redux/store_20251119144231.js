import {configureStore} from "@reduxjs/toolkit";
import {setupListner} from '@reduxjs/toolkit/query/react';
import authReducer from './features/auth'
const store=configureStore({
    reducer: {},

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

setupListner(store.dispatch)

export default store;