import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <>
      <Header />

      <section className="mt-[1rem]">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;