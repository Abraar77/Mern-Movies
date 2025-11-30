import mongoose from "mongoose";

const GenreSchema= new mongoose.Schema({
   name: {
    type: "String",
    required: true,
    maxLength: 34,
    trim: true,
    unique: true

   }
})