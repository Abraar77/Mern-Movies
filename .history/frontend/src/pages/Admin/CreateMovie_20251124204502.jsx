import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateMoviesMutation,
  useUploadImageMutation,
} from "../../redux/api/movies";
import { useListGenreQuery } from "../../redux/api/genre";
import { toast } from "react-toastify";

const CreateMovie = () => {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    name: "",
    year: "",
    detail: "",
    cast: [],
    genre: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [createMovie, { isLoading: isCreatingMovie }] =
    useCreateMoviesMutation();

  const [uploadImage, { isLoading: isUploadingImage }] =
    useUploadImageMutation();

  const { data: genres, isLoading: isLoadingGenres } = useListGenreQuery();


  useEffect(() => {
    if (genres?.length > 0) {
      setMovieData((prev) => ({ ...prev, genre: genres[0]._id }));
    }
  }, [genres]);

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovieData((prev) => ({
      ...prev,
      [name]:
        name === "cast"
          ? value.split(",").map((item) => item.trim())
          : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleCreateMovie = async () => {
    try {
      if (
        !movieData.name ||
        !movieData.year ||
        !movieData.detail ||
        movieData.cast.length === 0 ||
        !selectedImage
      ) {
        toast.error("Please fill all required fields");
        return;
      }

    
      const formData = new FormData();
      formData.append("image", selectedImage);

      const uploadRes = await uploadImage(formData).unwrap();

      toast.success("Image uploaded successfully ✅");

  
      await createMovie({
        ...movieData,
        image: uploadRes.image,
      }).unwrap();

      toast.success("Movie added successfully 🎉");
      navigate("/admin/movies-list");

   
      setMovieData({
        name: "",
        year: "",
        detail: "",
        cast: [],
        genre: genres[0]?._id || "",
        image: "",
      });
      setSelectedImage(null);
      setPreviewImage("");

    } catch (error) {
      toast.error(error?.data?.message || "Failed to create movie");
    }
  };

  return (
    <div className="container flex justify-center items-center mt-4 ">
      <form className="w-[40rem] text-white h">
        <h1 className="text-3xl mb-6 text-teal-400 font-semibold">
          Create Movie 🎬
        </h1>

        {/* Name */}
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={movieData.name}
            onChange={handleChange}
            className="border px-2 py-1 w-full bg-gray-800 text-white"
          />
        </label>

        {/* Year */}
        <label className="block mb-4">
          Year:
          <input
            type="number"
            name="year"
            value={movieData.year}
            onChange={handleChange}
            className="border px-2 py-1 w-full bg-gray-800 text-white"
          />
        </label>

        {/* Detail */}
        <label className="block mb-4">
          Detail:
          <textarea
            name="detail"
            value={movieData.detail}
            onChange={handleChange}
            className="border px-2 py-1 w-full bg-gray-800 text-white"
          ></textarea>
        </label>

        {/* Cast */}
        <label className="block mb-4">
          Cast (comma-separated):
          <input
            type="text"
            name="cast"
            value={movieData.cast.join(", ")}
            onChange={handleChange}
            className="border px-2 py-1 w-full bg-gray-800 text-white"
          />
        </label>

        {/* Genre */}
        <label className="block mb-4">
          Genre:
          <select
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            className="border px-2 py-1 w-full bg-gray-800 text-white"
          >
            {isLoadingGenres ? (
              <option>Loading genres...</option>
            ) : (
              genres?.map((g) => (
                <option key={g._id} value={g._id}>
                  {g.name}
                </option>
              ))
            )}
          </select>
        </label>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            className="cursor-pointer block text-center"
            style={
              !selectedImage
                ? {
                    border: "1px solid #888",
                    borderRadius: "6px",
                    padding: "10px",
                  }
                : {
                    border: "0",
                    backgroundColor: "#ec4899",
                    color: "white",
                    padding: "10px",
                    borderRadius: "6px",
                  }
            }
          >
            {!selectedImage ? "Upload Image" : "Change Image"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
        </div>

        {/* Preview */}
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="w-48 h-64 object-cover rounded-md mb-4"
          />
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={handleCreateMovie}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full"
          disabled={isCreatingMovie || isUploadingImage}
        >
          {isCreatingMovie || isUploadingImage ? "Processing..." : "Create Movie"}
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;
