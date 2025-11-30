import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";

import { useListGenreQuery } from "../../redux/api/genre";
import SliderUtil from "../../components/SliderUtil";

// Use the uploaded image path (will be transformed by your environment)
const HERO_IMAGE = "sandbox:/mnt/data/Screenshot (1415).png";

const GenreSidebar = ({ genres = [], selectedGenre, onSelect }) => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 p-4 bg-gray-900/60 text-white rounded-md">
      <h3 className="text-lg font-semibold mb-4">Genres</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`text-left p-2 rounded transition ${
            selectedGenre === null ? "bg-teal-600" : "hover:bg-gray-800"
          }`}
        >
          All
        </button>

        {genres?.map((g) => (
          <button
            key={g._id}
            onClick={() => onSelect(g._id)}
            className={`text-left p-2 rounded transition ${
              selectedGenre === g._id ? "bg-teal-600" : "hover:bg-gray-800"
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

const SectionCard = ({ title, movies }) => {
  return (
    <section className="w-full mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <span className="text-sm text-gray-300">{movies?.length || 0} items</span>
      </div>

      <div className="bg-transparent rounded-md p-2">
        <SliderUtil data={movies} />
      </div>
    </section>
  );
};

const MoviesContainerPage = () => {
  const { data: newMovies } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();
  const { data: genres } = useListGenreQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Helper to normalize id for comparison (movie.genre can be _id or object)
  const genreMatches = (movie, genreId) => {
    if (!genreId) return true;
    const g = movie.genre;
    const movieGenreId = g?._id ?? g;
    return String(movieGenreId) === String(genreId);
  };

  const filtered = (list) =>
    list?.filter((m) => genreMatches(m, selectedGenre)) ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      {/* Top hero + mobile genre toggle */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden bg-teal-500 px-3 py-1 rounded"
            onClick={() => setMobileOpen((s) => !s)}
          >
            Genres
          </button>
          <h1 className="text-2xl font-bold">Discover Movies</h1>
        </div>

        {/* Optional hero image */}
        <div className="hidden md:block w-44 h-20 rounded overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT - Sidebar */}
        <div className={`transition-all ${mobileOpen ? "block" : "hidden"} lg:block`}>
          <GenreSidebar
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={(id) => {
              setSelectedGenre(id);
              setMobileOpen(false);
            }}
          />
        </div>

        {/* MAIN */}
        <main className="flex-1">
          {/* Choose Movie / New */}
          <SectionCard title="New Movies" movies={filtered(newMovies)} />

          {/* Choose For You (Random) */}
          <SectionCard title="Choose For You" movies={filtered(randomMovies)} />

          {/* Top Movies */}
          <SectionCard title="Top Movies" movies={filtered(topMovies)} />
        </main>
      </div>
    </div>
  );
};

export default MoviesContainerPage;
