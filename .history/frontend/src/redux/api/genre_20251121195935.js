import { apiSlice } from "./apiSlice";
import { GENRE_URL } from "../constants";

export const genreApiSlice= apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        createGenre:builder.mutation({
            query: (data)=>({
                url: `${GENRE_URL}`,
                method:"POST",
                body:data
            })
        }),

        listGenre: builder.query({
            query: ()=>
        })
    })
})