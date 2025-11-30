import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userApiSlice= apiSlice.injectEndpoints({

    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${USERS_URL}/auth`,
                method:"POST",
                body:data,
            }),
        }),
        register:builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}`,
                method:"POST",
                body:data,
            })
        }),

        logout: builder.mutation({
            query:()=>({
            url: `${USERS_URL}/logout`,
            method:"POST",

        })
        }),
    
        getProfile: builder.query({
            query:()=>({
                url:`${USERS_URL}/profile`,
            }),
        }),

        updateProfile: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/profile`,
                method: "PUT",
                bodt: data,
            })
        }),

        getUsers: builder.query ({
            query:()=>({

                url: `${USERS_URL}`,

            }),
        }),

    }),
}),


