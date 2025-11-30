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

      
        <h3 className="text-white font-semibold text-lg relative bottom-9">
          {movie.name}
        </h3>
      {/* </div> */}
    </div>
  );
};

export default MovieCard;
