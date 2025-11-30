import mongoose from "mongoose";
co
const movieSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    year:{
        type: Number,
        required:true,
    },

    details: {
        type:String,
        required:true,
    },

    createdAt:{
        type:Date.now
    }
})