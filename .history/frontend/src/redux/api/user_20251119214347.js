import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userApiSlice= apiSlice.injectEndpoints({

    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${USERS_URL}/auth`,
                method:post,
                body:data,
            }),
        }),
        register:builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}`,
                method:post,
                body:data,
            })
        }),

        logout: builder.mutation({
            query:()=>({
            url: `${USERS_URL}/logout`,
            method:post

        })
        })
    })
})
