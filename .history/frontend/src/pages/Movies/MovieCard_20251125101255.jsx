import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative w-[20rem] m-6 cursor-pointer">

      {/* Image */}
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[22rem] object-cover rounded-lg 
                     transition duration-300
        />
      </Link>

      {/* Hover Overlay */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          bg-black/70 
          opacity-0 group-hover:opacity-100
          transition duration-300
          p-4 rounded-b-lg z-10
        "
      >
        <h3 className="text-white font-semibold text-lg">
          {movie.name}
        </h3>
      </div>

    </div>
  );
};

export default MovieCard;
