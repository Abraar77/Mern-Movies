import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie._id}
      className="relative group w-[20rem] h-[20rem] m-8 overflow-hidden rounded-lg"
    >
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-60"
        />
      </Link>
      {/* Hover Name Overlay */}
      <div className="relative top-1 inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <p className="text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded">
          {movie.name}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
