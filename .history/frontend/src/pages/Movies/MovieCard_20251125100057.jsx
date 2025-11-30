import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group cursor-pointer w-[18rem] m-6">

      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[22rem] object-cover rounded-xl transition duration-300 group-hover:opacity-60"
        />
      </Link>

      {/* HOVER OVERLAY */}
      <div className="
        absolute bottom-0 left-0 right-0 
        bg-black/70 p-4 rounded-b-xl 
        opacity-0 group-hover:opacity-100 
        transition duration-300
      ">
        <h3 className="text-white text-lg font-semibold">
          {movie.name}
        </h3>
      </div>

    </div>
  );
};

export default MovieCard;
