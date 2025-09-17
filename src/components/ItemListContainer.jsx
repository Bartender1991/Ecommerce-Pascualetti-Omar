import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { getByCategory } from "../service/firebase"

const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const { category } = useParams()
    const { mensaje } = props


    // Firebase
    useEffect(() => {
        setLoader(true)
        getByCategory(category)
            .then((res) => {
                const lista = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(lista)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [category])

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