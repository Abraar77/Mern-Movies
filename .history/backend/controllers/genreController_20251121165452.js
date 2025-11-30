import Genre from "../models/Genre.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async(req,res)=>{
    const {name} = req.body;
    const alreadyExist= await Genre.findOne({name})
    if(alreadyExist){
        res.status(400)
        throw new Error("genre already exists")
    }
    else{
        try {
            const newGenre= new Genre({name})
            await newGenre.save()

          res.status(200).json({
            id:newGenre._id,
            name:newGenre.name
          })
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
})

const deleteGenre = asyncHandler(async(req,res)=>{
     const genre= await Genre.findByIdAndDelete({req.para})
})

export {createGenre}