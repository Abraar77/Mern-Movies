import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group cursor-pointer w-[18rem] m-6">

      <Link to={`/movies/${movie._id}`}>
        {/* IMAGE */}
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[22rem] object-cover rounded-lg
                     transition duration-300 group-hover:opacity-60"
        />

        {/* TITLE ON HOVER */}
        <h3
          className="
            text-white font-semibold text-lg
            absolute bottom-3 left-3
            opacity-2 group-hover:opacity-100
            transition duration-300
          "
        >
          {movie.name}
        </h3>
      </Link>

    </div>
  );
};

export default MovieCard;
