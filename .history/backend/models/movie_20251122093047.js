import mongoose from "mongoose";
import {objecti}
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