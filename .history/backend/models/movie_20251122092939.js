import mongoose from "mongoose";

const {objectId}= mongoose.Schema({
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

    createdA
})