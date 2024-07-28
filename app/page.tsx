import Link from "next/link"
import Image from 'next/image'

const getAllItems = async () => {

  const resonse = await fetch("http://localhost:3001/api/item/readall")
  const jsonData = await resonse.json()
  // console.log(jsonData)
  const allItems = jsonData.allItems
  return allItems
}


const ReadALLItems = async () => {
  const allItems = await getAllItems()
  console.log(allItems)
  return (
    <div>
      <h1 className="h1-style">こんにちは</h1>
      <h3 style={{ marginTop: "50px" }}>さようなら!</h3>
      {allItems.map(item =>
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image src={item.image} width={750} height={500} alt="item-image" priority/>
          <h2>{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>


      )}
    </div>
  )
}

export default ReadALLItems
