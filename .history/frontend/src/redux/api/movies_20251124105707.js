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

        deleteComment: builder.mutation({
            query: ({ movieId, reviewId }) => ({
              url: `${MOVIE_URL}/delete-comment`,
              method: "DELETE",
              body: { movieId, reviewId },
            }),
          }),
        //public route

        getAllMovies: builder.query({
            query: ()=>({
                url:`${MOVIE_URL}/all-movies`
            })
        }),




        //restricted

      
    addMovieReview: builder.mutation({
        query: ({ id, rating, comment }) => ({
          url: `${MOVIE_URL}/${id}/reviews`,
          method: "POST",
          body: { rating, id, comment },
        }),
      }),
      getSpecificMovie: builder.query({
        query: (id) => `${MOVIE_URL}/specific-movie/${id}`,
      }),

      uploadImage: builder.mutation({
        query: (formData) => ({
          url: `${UPLOAD_URL}`,
          method: "POST",
          body: formData,
        }),
      }),
  
      getNewMovies: builder.query({
        query: () => `${MOVIE_URL}/new-movies`,
      }),
  
      getTopMovies: builder.query({
        query: () => `${MOVIE_URL}/top-movies`,
      }),
  
      getRandomMovies: builder.query({
        query: () => `${MOVIE_URL}/random-movies`,
      }),


    })
})


export const {
useCreateMoviesMutation
}= moviesApiSlice