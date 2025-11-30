import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group cursor-pointer w-[18rem] m-6">

      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[22rem] object-cover rounded-lg 
                     transition duration-300 group-hover:opacity-60"
        />
      </Link>

      {/* Title appears only on hover */}
      <h3
        className="
          absolute bottom-3 left-3
          text-white font-semibold text-lg
          opacity-0 group-hover:opacity-100
          transition duration-300
        "
      >
        {movie.name}
      </h3>

    </div>
  );
};

export default MovieCard;
