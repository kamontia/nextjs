import { NextResponse } from "next/server";

import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function DELETE(request: any, context: any) {
    const reqBody = await request.json()
    try {
        await connectDB()

        const signleItem = await ItemModel.findById(context.params.id)
        if (signleItem.email === reqBody.email) {
            await ItemModel.deleteOne({ _id: context.params.id })
            return NextResponse.json({ message: "Delete 成功" })
        } else {
            return NextResponse.json({ message: "他の人が作成したアイテムです" })
        }
    } catch (err) {

        return NextResponse.json({ message: "Delete 失敗" })
    }

}
