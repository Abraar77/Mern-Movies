import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   username:{
    type: String,
    required: True
   }

})