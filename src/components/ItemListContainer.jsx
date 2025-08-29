import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const { mensaje } = props
    const [data, SetData] = useState([])
    const { category } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (category) {
                    SetData(res.filter((item) => item.category === category))
                } else {
                    SetData(res)
                }
            })
            .catch((error) => console.error(error))
    }, [category])

    console.log(category)

    const title = category ? category : mensaje
    return (
        <div className="container">
            <h1 style={{ padding: '2rem', textAlign: 'center', textTransform: 'capitalize' }}>
                {title}
            </h1>
            <ItemList data={data} />

        </div>
    )
}

export default ItemListContainer