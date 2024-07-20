import { NextResponse } from "next/server";

import connectDB from "../../utils/database";

import { ItemModel,ItemSchema } from "../../utils/schemaModels";


export async function POST(request: ItemSchema) {
    // console.log(await request.json())

    const reqBody = await request.json()


    await connectDB()
    await ItemModel.create(reqBody)



    return NextResponse.json({ message: "アイテム作成" })
}
