import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   username:{
    type: String,
    required: true,
   },
   email:{
    type: String,
    required: true,
   },
   pas:{
    type: String,
    required: true,
   },

})