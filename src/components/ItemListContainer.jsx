import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = (props) => {
    const [data, SetData] = useState([])
    const [loader, setLoader] = useState(false)
    const { category } = useParams()
    const { mensaje } = props


    useEffect(() => {
        console.log(loader)
        setLoader(true)
        getProducts()
            .then((res) => {
                if (category) {
                    SetData(res.filter((item) => item.category === category))
                } else {
                    SetData(res)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoader(false))
    }, [category])

    console.log(category)

    const title = category ? category : mensaje
    return (
        <>
            {loader
                ? <LoaderComponent />
                : <div className="container">
                    <h1 style={{ padding: '2rem', textAlign: 'center', textTransform: 'capitalize' }}>
                        {title}
                    </h1>
                    <ItemList data={data} />
                </div>
            }
        </>
    )
}

export default ItemListContainer