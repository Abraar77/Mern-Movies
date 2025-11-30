import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"
import { useGetSpecificMovieQuery, useAddMovieReviewMutation } from "../../redux/api/movies";
import MovieTabs from "./MovieTab";
import Rating from "./Rating";



const MovieDetails = () => {
    const { id: movieId } = useParams();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
    const { userInfo } = useSelector((state) => state.auth);
    const [createReview, { isLoading: loadingMovieReview }] = useAddMovieReviewMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await createReview({
                id: movieId,
                rating,
                comment,
            }).unwrap();
        
            refetch();

            toast.success("Review created successfully");
            setComment("")
        } catch (error) {
            toast.error(error?.data?.message || error?.message);
            setComment("")
        }
    };

    return (
        <div className="w-[73rem]">
            <div >
                <Link
                    to="/"
                    className="  text-white font-semibold hover:underline ml-[20rem]"
                >
                    Go Back
                </Link>
            </div>

            <div className="mt-[3rem]">
                <div className="flex justify-center items-center">
                    <img
                        src={movie?.image}
                        alt={movie?.name}
                        className="w-[75%] relative left-40 h-[50rem] rounded"
                    />
                </div>
                {/* Container One */}
                <div className="container  flex justify-between ml-[20rem] mt-[2rem]">
                    <section>
                        <h2 className="text-5xl my-4 font-extrabold">{movie?.name}</h2>
                        <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
                            {movie?.detail}
                        </p>
                    </section>

                    <div className="mr-[20rem] mt-6">
                        <p className="text-2xl font-semibold text-white">
                            Releasing Date: {movie?.year}
                        </p>

                        <div className="mt-4">
                            <p className=" font-bold text-2xl">Cast:</p> {movie?.cast.map((c) => (
                                <ul key={c._id}>
                                    <a
                                        href={`https://www.google.com/search?q=${c}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <li className="flex relative bottom-7 left-17 mt-1 underline">{c}</li> </a>
                                </ul>
                            ))}
                        </div>
                        <div className="flex justify-between flex-wrap">
                        {/* <Rating
  value={movie?.rating || 0}
  text={`${movie?.rating?.toFixed(1)} stars`} */}
{/* /> */}                {movie?.reviews } star


                        </div>
                    </div>

                    <div className="mt-[20rem] container flex flex-wrap items-start relative right-300 justify-between ml-[10rem] mb-40">
                        <MovieTabs
                            loadingMovieReview={loadingMovieReview}
                            userInfo={userInfo}
                            submitHandler={submitHandler}
                            rating={rating}
                            setRating={setRating}
                            comment={comment}
                            setComment={setComment}
                            movie={movie}
                        />
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default MovieDetails;