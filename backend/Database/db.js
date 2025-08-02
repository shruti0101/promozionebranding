import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log("database connected successfully"));
        await mongoose.connect(`${process.env.MONGO_URI}/PB`);
    } catch (error) {
        console.log("connection is unsuccessful", error.message);
    }
}

export default connectDB;