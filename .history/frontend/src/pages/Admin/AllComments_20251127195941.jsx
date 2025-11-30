import {
    useDeleteCommentMutation,
    useGetAllMoviesQuery,
  } from "../../redux/api/movies";
  import { toast } from "react-toastify";
  
  const AllComments = () => {
    const { data: movie, refetch } = useGetAllMoviesQuery();
  
    const [deleteComment] = useDeleteCommentMutation();
  
    const handleDeleteComment = async (movieId, reviewId) => {
      try {
        await deleteComment({ movieId, reviewId });
        toast.success("Comment Deleted");
        refetch();
      } catch (error) {
        console.error("Error deleting comment: ", error);
      }
    };
  
    return (
      <div>
        {movie?.map((m) => (
          <section
            key={m._id}
            className="flex flex-col justify-center items-center"
          >
            {m?.reviews.map((review) => (
              <div
                key={review._id}
                className="bg-[#1A1A1A] p-4 rounded-lg w-[50%] mt-[2rem]"
              >
                <div className="flex justify-between">
                  <strong className="text-[#B0B0B0]">{review.name}</strong>
                     <p className="w-20 h-15">
                        <img src={m.image} alt={m.name} />
                  <p className=" font-bold "> {m.name}</p>
                     </p>
                  <p className="text-[#B0B0B0]">
                    {review.createdAt.substring(0, 10)}
                  </p>
                </div>
  
                <p className="my-4">{review.comment}</p>
  
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteComment(m._id, review._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </section>
        ))}
        <div className="relative right-259 bottom-105">
      <Sidebaa/>
      </div>
      </div>
    );
  };
  export default AllComments;