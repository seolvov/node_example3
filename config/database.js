import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected database")
    } catch (err) {
        consoel.log(err.message)
    }
}

export default connectDB