import mongoose from "mongoose";

export const connectDB = async () => {

    mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  })
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
};
  


export default connectDB;