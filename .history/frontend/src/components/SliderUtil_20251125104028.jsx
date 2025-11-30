const SliderUtil = ({ data }) => {
  const settings = {
    dots: true,
    infinite: data?.length > 4,  // avoid crashing
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
  };

  if (!data || data.length === 0) return null;

  return (
    <Slider key={data.length} {...settings}>
      {data.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </Slider>
  );
};
