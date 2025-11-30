import { useListGenreQuery } from "../../redux/api/genre";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
  useGetAllMoviesQuery,
} from "../../redux/api/movies";

import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import banner from "../../assets/banner.jpg";

import {
  setMoviesFilter,
  setFilteredMovies,
  setMovieYears,
  setUniqueYears,
} from "../../redux/features/movies/movieSlice";

const AllMovies = () => {
  const dispatch = useDispatch();

  const { data: allMovies } = useGetAllMoviesQuery();
  const { data: genres } = useListGenreQuery();
  const { data: newMovies } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const { moviesFilter, filteredMovies } = useSelector(
    (state) => state.movies
  );

  const movieYears = allMovies?.map((m) => m.year) || [];
  const uniqueYears = Array.from(new Set(movieYears));

  useEffect(() => {
    dispatch(setFilteredMovies(allMovies || []));
    dispatch(setMovieYears(movieYears));
    dispatch(setUniqueYears(uniqueYears));
  }, [allMovies]);

  // 🔥 UNIVERSAL FILTERING ENGINE
  const applyAllFilters = (updates = {}) => {
    // update state
    dispatch(setMoviesFilter(updates));

    const { searchTerm, selectedGenre, selectedYear, selectedSort } = {
      ...moviesFilter,
      ...updates,
    };

    let result = [...(allMovies || [])];

    // 1️⃣ Search filter
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter((m) =>
        m.name.toLowerCase().includes(term)
      );
    }

    // 2️⃣ Genre filter
    if (selectedGenre.trim() !== "") {
      result = result.filter((m) => m.genre === selectedGenre);
    }

    // 3️⃣ Year filter
    if (selectedYear.trim() !== "") {
      result = result.filter((m) => m.year === Number(selectedYear));
    }

    // 4️⃣ Sort filter
    switch (selectedSort) {
      case "new":
        result = [...newMovies];
        break;
      case "top":
        result = [...topMovies];
        break;
      case "random":
        result = [...randomMovies];
        break;
    }

    dispatch(setFilteredMovies(result));
  };

  return (
    <div className="grid grid-cols-1">
      <section>
        {/* ---------- HERO BANNER ---------- */}
        <div
          className="relative h-[50rem] w-screen mb-10 flex items-center justify-center bg-cover"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-60"></div>

          <div className="relative z-10 text-center text-white mt-[10rem]">
            <h1 className="text-8xl font-bold mb-4 text-red-600 font-sans">
              The Movies Hub
            </h1>
            <p className="text-2xl text-green-400 font-sans">
              Cinematic Odyssey: Unveiling the Magic of Movies
            </p>
          </div>

          {/* ---------- FILTERS ---------- */}
          <section className="absolute -bottom-[11rem]">
            {/* Search Input */}
            <input
              type="text"
              className="w-[100%] h-[5rem] border px-10 outline-none rounded 
              hover:border-pink-900 border-pink-700 text-white bg-black/40"
              placeholder="Search Movie"
              value={moviesFilter.searchTerm}
              onChange={(e) =>
                applyAllFilters({ searchTerm: e.target.value })
              }
            />

            {/* Genre / Year / Sort */}
            <section className="sorts-container mt-[2rem] ml-[10rem]  w-[30rem] flex gap-4">
              {/* GENRE */}
              <select
                className="border p-2 rounded border-orange-400 cursor-pointer text-white bg-black/40"
                value={moviesFilter.selectedGenre}
                onChange={(e) =>
                  applyAllFilters({ selectedGenre: e.target.value })
                }
              >
                <option value="">Genres</option>
                {genres?.map((g) => (
                  <option key={g._id} value={g._id}>
                    {g.name}
                  </option>
                ))}
              </select>

              {/* YEAR */}
              <select
                className="border p-2 rounded border-orange-400 cursor-pointer text-white bg-black/40"
                value={moviesFilter.selectedYear}
                onChange={(e) =>
                  applyAllFilters({ selectedYear: e.target.value })
                }
              >
                <option value="">Year</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* SORT */}
              <select
                className="border p-2 rounded border-orange-400 cursor-pointer text-white bg-black/40"
                value={moviesFilter.selectedSort}
                onChange={(e) =>
                  applyAllFilters({ selectedSort: e.target.value })
                }
              >
                <option value="">Sort By</option>
                <option value="new">New Movies</option>
                <option value="top">Top Movies</option>
                <option value="random">Random Movies</option>
              </select>
            </section>
          </section>
        </div>

        {/* ---------- MOVIES GRID ---------- */}
        <section className="mt-[10rem] mb-5 w-screen flex justify-center items-center flex-wrap">
          {filteredMovies?.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            <h2 className="text-white text-3xl">No movies found 😢</h2>
          )}
        </section>
      </section>
    </div>
  );
};

export default AllMovies;
