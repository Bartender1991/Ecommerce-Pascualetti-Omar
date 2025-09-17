import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ItemNotFound = () => {
    return (
        <div style={{ background: "#f5f5f5", height:"100vh" }}>
            <div
                style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh" }}>
                <div
                    style={{ background: "#fff", padding: "40px", borderRadius: "12px", textAlign: "center", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", maxWidth: "500px", width: "100%", margin: "0 auto" }}>

                    <FaExclamationTriangle size={64} style={{ color: "#ffb300", marginBottom: "20px", }} />

                    <h1
                        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px", color: "#333", }}>El producto no existe</h1>

                    <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px", }}>Puede que haya sido eliminado o que el enlace no sea correcto.</p>

                    <Link to="/" className="btn btn-dark btn-lg">🏠 Ir al inicio</Link>
                </div>
            </div>
        </div >

    )
}

export default ItemNotFound
