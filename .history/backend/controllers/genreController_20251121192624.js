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
    const id= req.params.id
    try { 
     await Genre.findByIdAndDelete(id)
     res.status(200).json("genre deleted")

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

const updateGenre= asyncHandler(async(req,res)=>{
    const id= req.params.id
    const genre= await Genre.findById(id)

    if(genre){
    try {
        genre.name= req.body.name || genre.name

        const updatedGenre= await genre.save()

        res.status(200).json({
            id: genre._id,
            name: updatedGenre.name
        })
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }}

    else{
        res.status(400)
        throw new Error("genre not found")
    }
});

const readGenre = asyncHandler(async(req,res)=>{
    const genre= await Genre.findOne(req.params._id)
    if(genre){
        try {
            res.status(200).json({
                id: genre._id,
                name:genre.name
            })
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    } else{
        res.status(400)
        throw new Error("genre not found")
    }
})

const listGenres = asyncHandler(async(req,res)=>{
    const genres= await Genre.find({})
    if(genres.length>0){
        try {
            res.status(200)
        } catch (error) {
            
        }
    }
})

export {createGenre,
   deleteGenre,
   updateGenre,
   readGenre,
   listGenres
 }