import { apiSlice } from "./apiSlice";
import { GENRE_URL } from "../constants";

export const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // Create a genre
    createGenre: builder.mutation({
      query: (data) => ({
        url: GENRE_URL,
        method: "POST",
        body: data,
      }),
    }),

    // List all genres
    listGenre: builder.query({
      query: () => ({
        url: `${GENRE_URL}/genres`,
      }),
    }),

    // Delete a genre
    deleteGenre: builder.mutation({
      query: (id) => ({
        url: `${GENRE_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    // Update a genre
    updateGenre: builder.mutation({
      query: ({ id, data }) => ({
        url: `${GENRE_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Read / get one genre
    readGenre: builder.query({
      query: (id) => ({
        url: `${GENRE_URL}/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useListGenreQuery,
  useUpdateGenreMutation,
  useReadGenreQuery,
} = genreApiSlice;
