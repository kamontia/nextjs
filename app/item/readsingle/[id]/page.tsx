import { NextRequest } from "next/server"
import Image from "next/image"

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
        <div>
            <div>
                <Image src={singleItem.image} height={500} width={750} alt="Image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>

            </div>

        </div>
    )
}

export default ReadSignleItem
