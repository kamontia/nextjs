import { NextResponse } from "next/server";
import connectDB from "../../utils/database";
import { UserModel } from "../../utils/schemaModels";

export async function POST(request){

    const reqBody = await request.json()


    try {
        await connectDB
        const savedUser = await UserModel.findOne({ email: reqBody.email})

        if(savedUser){
            return NextResponse.json({message: "ログイン成功"})

        }else{
            return NextResponse.json({message: "ログイン失敗。 User NotFound"})
        }


    } catch(err){

        return NextResponse.json({message: "ログイン失敗"})
    }

}
