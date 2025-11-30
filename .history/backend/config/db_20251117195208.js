import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env)
    } catch (error) {
        console.error('successfully connected to mongoDB👍')
        process.exit(1) //if we have some sort of error then exit out everything
    }
}

export default connectDB