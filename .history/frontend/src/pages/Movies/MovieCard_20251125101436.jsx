import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie.name)
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

      {/* Hover Overlay */}
      <div className="
        absolute bottom-0 left-0 w-full 
       backdrop-blur-sm
        opacity-0 group-hover:opacity-100
        transition duration-300
        rounded-b-lg p-3 z
      ">
        <h3 className="text-white font-semibold text-lg">
          {movie.name}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
