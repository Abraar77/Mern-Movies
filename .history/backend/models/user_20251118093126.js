import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   username:{
    type: String,
    required: true,
   },
   email:{
    type: String,
    required: true,
    uniq
   },
   password:{
    type: String,
    required: true,
   },

})