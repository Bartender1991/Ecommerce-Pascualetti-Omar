import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../mock/AsyncMock'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    const [loader, setLoader] = useState(false)
    const [invalid, setInvalid] = useState(null)

    useEffect(() => {
        setLoader(true)
        // conectar con nuestra coleccion y crear una referencia
        const docRef = doc(db, 'productos', id)
        // traer el documento
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ id: res.id, ...res.data() })
                    console.log('Item-Detail-Container',detalle)
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(erros))
            .finally(() => setLoader(false))
    }, [id])

    console.log('estoy en ItemDetailContainer :', detalle)

    //return anticipado
    if (invalid) {
        return (
            <div>
                <h1>El producto no existe!</h1>
                <Link to="/" className='btn btn-dark'>Ir al home</Link>
            </div>
        )
    }

    return (
        <>
            {
                loader
                    ? <LoaderComponent />
                    : <div className='container'>
                        <ItemDetail detalle={detalle} />
                    </div>
            }
        </>
    )
}

export default ItemDetailContainer
