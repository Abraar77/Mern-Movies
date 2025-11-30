import express from "express"
import path from "path"
import multer from "multer"

const router= express.Router()

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
         cb(null, "/uploads")
    },

    filename :(req,file,cb)=>{
        const extname= path.extname(file.orginalname)
        cb(null, `${file.fieldname}-${Date.now()} ${extname}`);
    }
});

const fileFilter= (req,file,cb)=>{
    const fileType= /jpe?g|webp|png/
    const mimeTypes= /image\/jpe?g|image\/webp||image\/png/

    const extname= path.extname(file.orginalname)
    const mimeType= file
}