import SliderUtil from "../../components/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex w-full min-h-screen bg-gray-900 text-white">

      {/* LEFT SIDEBAR */}
      <nav
        className="
          w-[18rem] min-h-screen 
          bg-gray-800 
          flex flex-col gap-4 p-6
          sticky top-0
          shadow-lg
        "
      >
        <Link
          to="/"
          className="p-3 rounded hover:bg-teal-500 transition text-lg"
        >
          Home
        </Link>

        <Link
          to="/movies"
          className="p-3 rounded hover:bg-teal-500 transition text-lg"
        >
          Browse Movies
        </Link>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {data ? (
          <SliderUtil data={data} />
        ) : (
          <p className="text-white text-xl">Loading...</p>
        )}
      </div>

    </div>
  );
};

export default Header;
