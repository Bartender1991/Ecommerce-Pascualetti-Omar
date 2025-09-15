import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import VolverAtras from './VolverAtras'
import CartItemCount from './CartItemCount'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, removeItem, clear, addItem, total } = useContext(CartContext)
    // console.log('esto es cart ', cart)

    const [purchase, setPurchase] = useState(false)

    const preConfirm = () => {
        Swal.fire({
            title: '¿Estas seguro de borrar todo el carrito?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    clear()
                } else if (result.isDenied) {
                    //poner algo si deniega
                }
            })
    }



    const onAdd = (item, cant) => {
        // console.log("Producto:", item, "Nueva cantidad:", cant);
        setPurchase(true);
        addItem(item, cant); // ahora le pasás el objeto y la cantidad
    };

    return (
        <div className="container">

            <div style={{ textAlign: "left", marginBottom: "30px", marginLeft: "30px" }}>
                <VolverAtras />
                <h1 style={{ display: "inline", margin: 0, paddingLeft: "10px" }}>
                    Tu carrito
                </h1>
            </div>

            <div className="table-responsive shadow rounded">
                <table className="table table-striped table-hover align-middle text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acción</th>
                            <th>Modificar Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((compra) => (
                            <tr key={compra.id}>
                                <td>
                                    <img
                                        src={compra.img}
                                        alt={compra.name}
                                        style={{ width: "6rem" }}
                                        className="rounded shadow-sm"
                                    />
                                </td>
                                <td data-bs-toggle="tooltip" title="Nombre del producto">
                                    {compra.name}
                                </td>
                                <td data-bs-toggle="tooltip" title="Precio unitario de del producto">
                                    ${compra.price}

                                </td>
                                <td data-bs-toggle="tooltip" title="Cantidad de productos totales iguales incluidos en el carrito">
                                    {compra.quantity}
                                </td>
                                <td data-bs-toggle="tooltip" title="Sumatoria de valor de unidad por cantidad de producto">
                                    ${(compra.quantity * compra.price).toFixed(2)}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger shadow"
                                        onClick={() => removeItem(compra.id)}
                                        data-bs-toggle="tooltip"
                                        title="Eliminar el producto del carrito de compras"
                                    >
                                        ✕
                                    </button>
                                </td>
                                <td>
                                    <ItemCount compra={compra} qty={compra.quantity} stock={compra.stock} onAdd={(cant) => onAdd(compra, cant)} isCart={true} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

            {/* Total */}
            <div className="d-flex justify-content-between align-items-center mt-4 p-3 shadow-sm rounded bg-light" >
                <h4 className="mb-0">
                    Total a pagar:{" "}
                    <span className="fw-bold text-success">
                        ${total()}
                        {console.log(total())}
                    </span>
                </h4>
                <div>
                    <button className="btn btn-outline-danger me-2" onClick={preConfirm}>Vaciar carrito</button>
                    <Link to='/checkout' className="btn btn-success">Terminar compra</Link>
                </div>
            </div >
        </div >

    )
}

export default CartView
