import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { getOneById } from '../service/firebase'
import ItemNotFound from './ItemNotFound'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const { id } = useParams()
    const [loader, setLoader] = useState(false)
    const [invalid, setInvalid] = useState(null)

    useEffect(() => {
        setLoader(true)
        getOneById('productos', id)
            .then((res) => {
                console.log(res, 'res')
                if (res.invalid === false) {
                    setDetalle(res)
                }else{
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [id])

    //return anticipado
    if (invalid) {
        return (
            <ItemNotFound/>
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
