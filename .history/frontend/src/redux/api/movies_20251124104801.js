import {apiSlice} from "./apiSlice"

import { MOVIE_URL, UPLOAD_URL } from "../constants"

export const moviesApiSlice= apiSlice.injectEndpoints({
    endpoints: (builder)=>({

          //admin
        createMovies: builder.mutation({
            query: (data)=>({
                url: `${MOVIE_URL}/create-movie`,
                method: "POST",
                body: data
            })
        }),

        updateMovies: builder.mutation({
            query: ({data,id})=>({
                url: `${MOVIE_URL}/update-movie/${id}`,
                method:"PUT",
                body: data
            })
        }),

        deleteMovie: builder.mutation({
            query: (id)=>({
                url: `${MOVIE_URL}/delete-movie/${id}`,
                method:"DELETE"
            })
        }),

        deleteReview: builder.mutation({
            query: ( data)=>({
                url: `${MOVIE_URL}/delete-comment`,
                method: "DELETE"
            })
        }),

        //public route

        getAllMovies: builder.query({
            query: ()=>({
                url:`${MOVIE_URL}/all-movies`
            })
        }),




        //restricted

        movieReview: builder.mutation({
            query: ({id,data})=>({
                url: 
            })
        })


    })
})