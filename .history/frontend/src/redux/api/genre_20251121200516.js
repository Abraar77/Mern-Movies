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
            query: ()=>({
                url:`${GENRE_URL}/genres`,
            })
        }),

        deleteGenre:builder.mutation({
            query: (id)=>({
                url:`${GENRE_URL}/${id}`,
                method:"POST",
            })
        }),

        updateGenre:builder.mutation({
            query:(data,id)=>({
                url: `${GENRE_URL}/${id}`,
                method: "PUT",
                body:data
            })
        }),

        readGenre:builder.query({
            query:(id)=>url:`${GENRE_URL}/`
        })
    })
})