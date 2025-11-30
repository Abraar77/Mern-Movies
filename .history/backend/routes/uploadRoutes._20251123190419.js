import express from "express"
import path from "path"
import multer from "multer"

const router= express.Router()

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
         cb(null, "/uploads")
    },

    filename :(req,res,cb)=>{
        const extname= path.extname(file.orginalname)
        cb(null, `${file.fieldname}`)
    }
})