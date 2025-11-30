import {configureStore} from "@reduxjs/toolkit";

import {setupListner} from '@reduxjs/toolkit/query/react';

const store=configureStore({
    reducer: {},

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

setupListner(store.dispatch)

export default store;