import { NextRequest } from "next/server"

const getSingleItem = async (id) => {
    // console.log(id)
    const response = await fetch(`http://localhost:3001/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem
    return singleItem
}

const ReadSignleItem = async (context) => {

    console.log(context)
    const singleItem = await getSingleItem(context.params.id)

    return (
        <h1>個別アイテムページ</h1>
    )
}

export default ReadSignleItem
