import SliderUtil from "../../components/SliderUtil";
import {useGetN}
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 ml-10 md:items-start">

      {/* LEFT SIDE NAV */}
      <nav className="flex flex-col space-y-3 w-full md:w-40">
        <Link
          to="/"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition"
        >
          Home
        </Link>

        <Link
          to="/movies"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition"
        >
          Browse Movies
        </Link>
      </nav>

      {/* SLIDER RIGHT SIDE */}
      <div className="w-full md:flex-1 pr-10">
        <SliderUtil data={data} />
      </div>

    </div>
  );
};

export default Header;
