import SliderUtil from "../../components/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex">
      
      {/* LEFT SIDEBAR */}
      <nav className="
        w-[12rem] h-screen 
       text-white 
        flex flex-col gap-4 p-4
        sticky top-0
      ">
        <Link className="p-3 rounded hover:bg-teal-500 transition" to="/">
          Home
        </Link>

        <Link className="p-3 rounde hover:bg-teal-500 transition" to="/movies">
          Browse Movies
        </Link>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-4 mt-6">
        <SliderUtil data={data} />
      </div>

    </div>
  );
};

export default Header;
