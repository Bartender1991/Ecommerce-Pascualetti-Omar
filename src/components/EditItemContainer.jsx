import React, { useEffect, useState } from 'react'
import { getByCategory } from '../service/firebase'
import LoaderComponent from './LoaderComponent'
import EditItem from './EditItem'
const EditItemContainer = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    
    useEffect(() => {
        setLoader(true)
        getByCategory()
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
    }, [])

    const title = "Editar Articulos"
    return (
        <div>
            <>
                {loader
                    ? <LoaderComponent />
                    : <div className="container">
                        <h1 style={{ padding: '2rem', textAlign: 'center', textTransform: 'capitalize' }}>
                            {title}
                        </h1>
                        <EditItem data={data} />
                    </div>
                }
            </>
        </div>
    )
}

export default EditItemContainer
