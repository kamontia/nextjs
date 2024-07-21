import { NextRequest, NextResponse } from "next/server";

import connectDB from "../../utils/database";

import { ItemModel } from "../../utils/schemaModels";


export async function POST(request: NextRequest) {
    // console.log(await request.json())

    const reqBody = await request.json()


    await connectDB()
    await ItemModel.create(reqBody)



    return NextResponse.json({ message: "アイテム作成" })
}
