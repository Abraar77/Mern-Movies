import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../redux/api/movies";
import Sidebar from "./Dashboard/Sidebar/Sidebar";

const AdminMoviesList = () => {
  const { data: movies } = useGetAllMoviesQuery();


  const shortenText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="container mx-[9rem]">
      <div className="relative right-40 top-14">
      <Sidebar/>
      </div>
      <div className="flex flex-col md:flex-row ml-20 w-[rem]">
        <div className="p-3">
          <div className="ml-[2rem] text-xl font-bold h-12">
            All Movies ({movies?.length})
          </div>

          <div className="flex flex-wrap justify-around items-center p-[2rem]">
            {movies?.map((movie) => (
              <div
                key={movie._id}
                className="max-w-sm m-[2rem] rounded overflow-hidden shadow-lg"
              >
                <Link to={`/admin/movies/update/${movie._id}`}>
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                  />
                </Link>

                <div className="px-6 py-4 border border-gray-400">
                  <div className="font-bold text-xl mb-2">{movie.name}</div>
                  <p className="text-white text-sm">
                    {shortenText(movie.detail, 20)}
                  </p>
                </div>

                <div className="px-6 py-4">
                  <Link
                    to={`/admin/movies/update/${movie._id}`}
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Update Movie
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMoviesList;
