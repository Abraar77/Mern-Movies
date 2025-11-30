import Genre from "../models/Genre.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async(req,res)=>{
    const {genreName} = req.body
    const alreadyExist= await Genre.findOne({genreName})
    if(alreadyExist){
        res.status(400)
        throw new Error("genre already exists")
    }
    else{
        try {
            const newGenre= new Genre({genreName})
            await genreName.save()

          res.status(200).json({
            id:genreName._id,
            name:genreName.name
          })
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
})

export{createGenre}