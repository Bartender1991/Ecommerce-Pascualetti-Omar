import { useEffect, useState } from 'react'
import { getOrderById, discountStock } from '../service/firebase'
import { Link } from 'react-router-dom'

const CheckoutEnd = ({ orderId }) => {
    const [cartEnd, setCartEnd] = useState(null)

    useEffect(() => {
        if (orderId) {
            getOrderById(orderId)
                .then((data) => {
                    console.log('Datos de Firebase:', data)
                    setCartEnd(data)
                })
                .catch((error) => {
                    console.log('Error al obtener datos de Firebase:', error)
                })
        }
    }, [orderId,])

    useEffect(() => {
        if (cartEnd?.compras) {
            cartEnd.compras.forEach((item) => {
                discountStock(item.id, item.quantity)
            });
        }
    }, [cartEnd])



    if (!cartEnd) {
        return null
    }

    return (
        <>
            {
                <div className="container mt-5">
                    <div className="text-center mb-4">
                        <div
                            className="rounded-circle bg-success d-inline-flex justify-content-center align-items-center"
                            style={{ width: "70px", height: "70px" }}
                        >
                            <i className="bi bi-check-lg text-white fs-1"></i>
                        </div>
                        <h2 className="mt-3 text-success">¡Compra realizada con éxito! 🥳</h2>
                        <h5 className="text-muted">Gracias por tu compra en nuestra tienda</h5>
                    </div>

                    <div className="text-center mb-4">
                        <h6 className="text-muted">ID de la compra:</h6>
                        <p className="fw-bold">{orderId}</p>
                    </div>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">📌 Datos del comprador</h5>
                            <p><strong>Nombre:</strong> {cartEnd.comprador.name} {cartEnd.comprador.lastname}</p>
                            <p><strong>Dirección:</strong> {cartEnd.comprador.address}</p>
                            <p><strong>Email:</strong> {cartEnd.comprador.email}</p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">🛒 Productos comprados</h5>
                            <ul className="list-group list-group-flush">
                                {cartEnd.compras.map((item) => (
                                    <li key={item.id} className="list-group-item d-flex align-items-center">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="me-3 rounded"
                                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">{item.name}</h6>
                                            <small className="text-muted">{item.description}</small>
                                            <div className="mt-1">
                                                <span className="badge bg-secondary me-2">Cantidad: {item.quantity}</span>
                                                <span className="badge bg-dark">Precio: ${item.price}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h4 className="fw-bold">💰 Total: ${cartEnd.total}</h4>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to='/' className="btn btn-warning btn-lg">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            }

        </>
    )
}

export default CheckoutEnd
