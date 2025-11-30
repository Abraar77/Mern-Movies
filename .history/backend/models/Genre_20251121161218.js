import mongoose from "mongoose";

const GenreSchema= new mongoose.Schema({
   name: {
    type: "String",
    required: true,
    maxLength: 32,
    trim: true,
    unique: true

   }
}),

export default mongoose.model("Genre")