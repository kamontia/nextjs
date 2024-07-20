import { NextResponse } from "next/server";

import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function GET(request, context) {

    try {
        await connectDB()
        console.log(context.params.id)
        const singleItem = await ItemModel.findById(context.params.id)
        return NextResponse.json({ message: "成功" }, sigleItem: singleItem)
        // const allItems = await ItemModel.find()
        // return NextResponse.json({ message: "成功", allItems: allItems })
    } catch (err) {

        return NextResponse.json({ message: "失敗" })
    }

}
