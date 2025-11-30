import express from "express"
import path from "path"
import multer from "multer"

const router= express.Router()

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
         cb(null, "uploads/")
    },

    filename :(req,file,cb)=>{
        const extname= path.extname(file.originalname)
        cb(null, `${file.fieldname}-${Date.now()} ${extname}`);
    }
});

const fileFilter= (req,file,cb)=>{
    const fileType= /jpe?g|webp|png/
    const mimeTypes= /image\/jpe?g|image\/webp||image\/png/

    const extname= path.extname(file.originalname)
    const mimeType= file.mimetype

    if(fileType.test(extname) && mimeTypes.test(mimeType)){
        cb(null,true)
    } else{
        cb(new Error("images only"), false)
    }
};


const upload= multer({storage,fileFilter});
const uploadSingleImage= upload.single("image");

router.post("/",(req,res)=>{
    uploadSingleImage(req,res,(err)=>{
        if(err){
            res.status(400).send({ message: err.message });
        } else if(req.file){
            res.status(200).send({message:`file uploaded sucessfully`,
        image:`/${req.file.path}`
        })
        } else{
            res.status(400).send({ message: "No image file provided"})
        }
    })
})


export default router