import { NextResponse } from "next/server";
import connectDB from "../../utils/database";
import { UserModel } from "../../utils/schemaModels";

export async function POST(request){
    const reqBody = await request.json()
    console.log(reqBody)
    try {
        await connectDB()

        await UserModel.create(reqBody)
        console.log("User register is successful")
        return NextResponse.json({message: "User register is successful"})

    } catch(err){

        console.log("User register is failure")
        console.dir(err)
        return NextResponse.json({message: "User register is failure"})
    }


}
