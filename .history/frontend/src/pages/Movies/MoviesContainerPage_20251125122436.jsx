import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";

import { useListGenreQuery } from "../../redux/api/genre";
import SliderUtil from "../../components/SliderUtil";

const MoviesContainerPage = () => {
  const { data: newMovies } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();
  const { data: genres } = useListGenreQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const filteredMovies = selectedGenre
    ? newMovies?.filter((m) => m.genre === selectedGenre)
    : newMovies;

  return (
    <div className="flex bg-black text-white min-h-screen p-6 gap-10">

      {/* LEFT SIDEBAR */}
      <aside className="w-[14rem] sticky top-4 h-fit">
        <h1 className="text-xl font-semibold mb-4">Genres</h1>

        <div className="flex flex-col gap-3">
          {genres?.map((g) => (
            <button
              key={g._id}
              onClick={() => setSelectedGenre(g._id)}
              className={`text-left px-4 py-2 rounded-md transition 
                ${selectedGenre === g._id 
                  ? "bg-
