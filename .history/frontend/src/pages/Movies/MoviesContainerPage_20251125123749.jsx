import { useState } from "react";
import {
  useGetAllMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";

import { useListGenreQuery } from "../../redux/api/genre";
import SliderUtil from "../../components/SliderUtil";

const MoviesContainerPage = () => {
  const { data } = useG();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useListGenreQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = data?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
      <nav className=" w-[20rem] relative right-160 top-150  md:w-[10rem] ml-0 md:ml-2 mb-4 md:mb-0">
        {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-blue-500  block p-2 rounded mb-[1rem] text-lg ${
              selectedGenre === g._id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>

      <section className="w-[100rem] relative bottom-70  left-15 md:w-[80%] mr-0 md:mr-2">
        <div className="w-full lg:w-[100rem] mb-8">
          <h1 className="mb-5">Top Movies</h1>
          <SliderUtil data={topMovies} />
        </div>
      <div className="w-full lg:w-[100rem] mb-8">
          <h1 className="mb-2">Choose Movie</h1>
          <SliderUtil data={filteredMovies} />
        </div>
        <div className="w-full lg:w-[100rem] mt-20">
          <h1 className="mb-5">Choose For You</h1>
          <SliderUtil data={randomMovies} />
        </div>


       
      </section>
    </div>
  );
};

export default MoviesContainerPage;