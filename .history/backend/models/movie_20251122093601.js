import mongoose from "mongoose";
const {objectId}= mongoose.Schema;

const reviewSchema= mongoose.Schema({
  name: {type:String, required:true},
   // rating:{type: Number, required:true},
    comment:{type:String, required: true},
})
const movieSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image: {type:String},
   

    year:{
        type: Number,
        required:true,
    },

    details: {
        type:String,
        required:true,
    },

    cast:[{type:String}],

    reviews: [reviewSchema],

    numReviews: { type: Number, required: true, default: 0 },

    createdAt:{
        type:Date.now
    }
})