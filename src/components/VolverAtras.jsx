import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const VolverAtras = () => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            <FaCircleArrowLeft size={20} />
        </button>
    )
}

export default VolverAtras
