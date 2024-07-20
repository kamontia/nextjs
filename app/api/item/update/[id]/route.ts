import { NextRequest, NextResponse } from "next/server";

import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function PUT(request: NextRequest, context: {}) {
  const reqBody = await request.json()
  try {
    await connectDB()
    const signleItem = await ItemModel.findById(context.params.id)

    if (signleItem.email === reqBody.email) {
      await ItemModel.updateOne({ _id: context.params.id }, reqBody)
      return NextResponse.json({ message: "アイテム編集成功" })
    } else {
      return NextResponse.json({ message: "他の人が作成したアイテムです" })
    }


    // const allItems = await ItemModel.find()
    // return NextResponse.json({ message: "成功", allItems: allItems })
  } catch (err) {

    return NextResponse.json({ message: "アイテム編集失敗" })
  }

}
