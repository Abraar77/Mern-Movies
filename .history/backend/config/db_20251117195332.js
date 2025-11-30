import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("successfully connected to MONGODB👍")
    } catch (error) {
        console.error(`Error : `)
        process.exit(1) //if we have some sort of error then exit out everything
    }
}

export default connectDB