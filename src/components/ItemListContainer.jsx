import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import SubirMasivo from "./subirMasivo"

const ItemListContainer = (props) => {
    const [data, SetData] = useState([])
    const [loader, setLoader] = useState(false)
    const { category } = useParams()
    const { mensaje } = props


    // Firebase
    useEffect(() => {
        setLoader(true)
        // conectar con nuestra coleccion 
        const productsCollection = category
            ? query(collection(db, 'productos'), where("category", "==", category))
            : collection(db, 'productos')
        //Pedir los datos AKA documentos
        getDocs(productsCollection)
            .then((res) => {
                // console.log(res.docs)
                const lista = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                // console.log(lista)
                SetData(lista)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [category])

    // Promesa
    // useEffect(() => {
    //     console.log(loader)
    //     setLoader(true)
    //     getProducts()
    //         .then((res) => {
    //             if (category) {
    //                 SetData(res.filter((item) => item.category === category))
    //             } else {
    //                 SetData(res)
    //             }
    //         })
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoader(false))
    // }, [category])

    // console.log(category)

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