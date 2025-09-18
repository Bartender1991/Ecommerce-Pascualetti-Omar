import React, { useEffect, useState } from 'react'
import { getByCategory } from '../service/firebase'
import LoaderComponent from './LoaderComponent'
import EditItem from './EditItem'
import EditModalNew from './EditModalNew'
import { Button } from 'react-bootstrap'
import { BsPlus } from 'react-icons/bs'
const EditItemContainer = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

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
    }, [refresh])

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
                        <Button variant="outline-success" size="sm" className="ms-2 mb-2 rounded-circle fw-bold shadow-sm" style={{ width: "32px", height: "32px", padding: "0" }} onClick={handleOpenModal}>
                            <BsPlus size={20} />
                        </Button>
                        <EditModalNew show={showModal} handleClose={handleCloseModal} setRefresh={setRefresh} />
                        <EditItem data={data} setRefresh={setRefresh}/>
                    </div>
                }
            </>
        </div>
    )
}

export default EditItemContainer
