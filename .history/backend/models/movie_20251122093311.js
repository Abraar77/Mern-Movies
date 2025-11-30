import mongoose from "mongoose";
const {objectId}= mongoose.Schema;
const movieSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    // rating:{type: Number, required:true},
    // comment:{type:String, required: true},

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