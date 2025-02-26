import { NextResponse } from "next/server";

import connectDB from "../../utils/database";
import { ItemModel } from "../../utils/schemaModels";

export async function GET() {

    try {
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({ message: "成功", allItems: allItems })
    } catch (err) {

        return NextResponse.json({ message: "失敗" })
    }

}
