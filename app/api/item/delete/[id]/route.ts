import { NextResponse } from "next/server";

import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function DELETE(request,context) {
    try {
        await connectDB()

        await ItemModel.deleteOne({_id: context.params.id})
        
        return NextResponse.json({ message: "Delete 成功"})
    } catch (err) {

        return NextResponse.json({ message: "Delete 失敗" })
    }

}
