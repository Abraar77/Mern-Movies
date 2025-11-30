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

  // RUN FILTERS WHEN ANY FILTER VALUE CHANGES
  useEffect(() => {
    if (allMovies) {
      applyAllFilters();
    }
  }, [
    allMovies,
    moviesFilter.searchTerm,
    moviesFilter.selectedGenre,
    moviesFilter.selectedYear,
    moviesFilter.selectedSort,
  ]);

  // -------------------------------
  // 🔥 MASTER FILTER FUNCTION
  // -------------------------------
  const applyAllFilters = () => {
    if (!allMovies) return;

    let results = [...allMovies];

    // 1️⃣ APPLY SEARCH FILTER (Your Weighted Score System)
    if (moviesFilter.searchTerm.trim() !== "") {
      const term = moviesFilter.searchTerm.toLowerCase();

      results = results
        .map((m) => {
          const name = m.name.toLowerCase();
          let score = 0;

          if (name === term) score = 100;
          else if (name.startsWith(term)) score = 80;
          else if (name.includes(term)) score = 50;

          const index = name.indexOf(term);
          if (index >= 0) score += Math.max(20 - index, 1);

          return { ...m, score };
        })
        .filter((m) => m.score >= 62)
        .sort((a, b) => b.score - a.score);
    }

    // 2️⃣ APPLY GENRE FILTER
    if (moviesFilter.selectedGenre) {
      results = results.filter(
        (m) => m.genre === moviesFilter.selectedGenre
      );
    }

    // 3️⃣ APPLY YEAR FILTER
    if (moviesFilter.selectedYear) {
      results = results.filter(
        (m) => m.year === Number(moviesFilter.selectedYear)
      );
    }

    // 4️⃣ APPLY SORT OPTIONS
    switch (moviesFilter.selectedSort) {
      case "new":
        results = [...newMovies];
        break;
      case "top":
        results = [...topMovies];
        break;
      case "random":
        results = [...randomMovies];
        break;
      default:
        break;
    }

    dispatch(setFilteredMovies(results));
  };

  // ------------------------------
  // INPUT HANDLERS
  // ------------------------------

  const handleSearchChange = (e) => {
    dispatch(setMoviesFilter({ searchTerm: e.target.value }));
  };

  const handleGenreChange = (genreId) => {
    dispatch(setMoviesFilter({ selectedGenre: genreId }));
  };

  const handleYearChange = (year) => {
    dispatch(setMoviesFilter({ selectedYear: year }));
  };

  const handleSortChange = (sortOption) => {
    dispatch(setMoviesFilter({ selectedSort: sortOption }));
  };

  // ------------------------------
  // UNIQUE YEARS FOR FILTER
  // ------------------------------
  const uniqueYears = Array.from(
    new Set(allMovies?.map((m) => m.year))
  ).sort();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 -translate-y-[5rem]">

      <section>
        {/* HERO SECTION */}
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

          {/* FILTER SECTION */}
          <section className="absolute -bottom-[11rem]">
            {/* SEARCH */}
            <input
              type="text"
              className="w-[100%] h-[5rem] border px-10 outline-none rounded border-pink-700 text-white"
              placeholder="Search Movie"
              value={moviesFilter.searchTerm}
              onChange={handleSearchChange}
            />

            {/* DROPDOWNS */}
            <section className="sorts-container mt-[2rem] ml-[10rem] w-[30rem]">
              <select
                className="border p-2 rounded border-orange-400 cursor-pointer text-white"
                value={moviesFilter.selectedGenre}
                onChange={(e) => handleGenreChange(e.target.value)}
              >
                <option value="">Genres</option>
                {genres?.map((g) => (
                  <option key={g._id} value={g._id}>
                    {g.name}
                  </option>
                ))}
              </select>

              <select
                className="border p-2 rounded ml-4 border-orange-400 cursor-pointer text-white"
                value={moviesFilter.selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
              >
                <option value="">Year</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                className="border p-2 rounded ml-4 border-orange-400 cursor-pointer text-white"
                value={moviesFilter.selectedSort}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="new">New Movies</option>
                <option value="top">Top Movies</option>
                <option value="random">Random Movies</option>
              </select>
            </section>
          </section>
        </div>

        {/* MOVIES LIST */}
        <section className="mt-[10rem] mb-5 w-screen flex justify-center items-center flex-wrap">
          {filteredMovies?.length === 0 ? (
            <p className="text-white text-2xl">No movies match your filters</p>
          ) : (
            filteredMovies?.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          )}
        </section>
      </section>
    </div>
  );
};

export default AllMovies;
