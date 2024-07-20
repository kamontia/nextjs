import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb+srv://kamontia:yg404ImLACumncB6@cluster0.tcnqb66.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected DB")

    } catch (err) {
        console.log("Failure: Unconnected to DB")
        throw new Error()

    }

}

export default connectDB
