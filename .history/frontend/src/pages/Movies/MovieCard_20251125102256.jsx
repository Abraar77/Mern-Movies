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
        <h3 className="text-white opacity-2 w-full h- hover:opacity-100 font-semibold text-lg relative bottom-9">
          {movie.name}
        </h3>
      </Link>

      
     
    </div>
  );
};

export default MovieCard;
