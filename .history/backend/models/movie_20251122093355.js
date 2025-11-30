import mongoose from "mongoose";
const {objectId}= mongoose.Schema;
const movieSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image: {type:String},
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

    cast

    createdAt:{
        type:Date.now
    }
})