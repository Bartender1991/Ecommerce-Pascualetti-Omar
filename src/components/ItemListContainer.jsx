import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"


const ItemListContainer = (props) => {
    const { mensaje } = props
    const [data, SetData] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => SetData(res))
            .catch((error) => console.error(error))
    }, [])
    console.log(data)

    return (
        <div className="container">
            <h1 style={{ padding:'2rem', textAlign:'center' }}>{mensaje}</h1>
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer