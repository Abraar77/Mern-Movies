import Header from "./Movies/Header";


const Home = () => {
  return (
    <>
      <Header />

      <section className="mt-[10rem]">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;