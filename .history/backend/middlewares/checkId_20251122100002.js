import { isValidObjectId } from "mongoose";


function checkId(req,res,next){
    if(!isValidObjectId){
        res.stat
    }
}