import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../pages/Movies/MovieCard";

const SliderUtil = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="px-4">
      <Slider {...settings}>
        {data?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderUtil;

/* ---------------------- CUSTOM ARROWS ---------------------- */

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-[45%] text-white text-3xl cursor-pointer z-20"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-[45%] text-white text-3xl cursor-pointer z-20"
      onClick={onClick}
    >
      ❮
    </div>
  );
}
