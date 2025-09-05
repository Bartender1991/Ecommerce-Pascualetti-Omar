import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../mock/AsyncMock'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    const [loader, setLoader] = useState(false)

    // crear una promesa que retorne uno solo
    useEffect(() => {
        setLoader(true)
        getItem(id)
            .then((res) => setDetalle(res))
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [id])

    console.log('estoy en ItemDetailContainer :', detalle)

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
