import { useState } from "react"
import { getProducts } from "../mock/AsyncMock"

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
        <div>
            <h1>{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer