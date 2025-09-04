import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "85vh", // o 100vh si querés que use toda la pantalla
                display: "flex",
                flexDirection: "column", // 👉 apila spinner y texto
                justifyContent: "center",
                alignItems: "center", // 👉 esto lo centra verticalmente
                gap: "10px" // 👉 separa spinner y texto
            }}
        >
            <Spinner animation="border" variant="warning" />
            <p className="mt-3 fw-bold text-secondary">Cargando...</p>
        </div>
    )
}

export default LoaderComponent
