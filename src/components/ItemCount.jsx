import { useEffect, useState } from "react"
import { BsDashCircleFill } from "react-icons/bs"
import { FaCirclePlus } from "react-icons/fa6"
import { GiShoppingCart } from "react-icons/gi"
import { toast } from "react-toastify";

const ItemCount = ({ getQty, stock, onAdd, isCart = false, qty, compra }) => {


    const [count, setCount] = useState(0)

    const sumar = () => {
        if (compra.quantity + count < compra.stock) {
            setCount(count + 1)
            console.log(getQty)
            console.log(compra.quantity)
        } else {
            toast.warning("No hay más unidades disponibles para agregar");
        }
    }

    const restar = () => {
        if (isCart) {
            if (count > -qty) {
                setCount(count - 1)
            }
        } else {
            if (count > 0) {
                setCount(count - 1)
            }
        }
    }
    // validacion dinamica para ver si hay o no stock
    useEffect(() => {
        if (isCart) {
            // console.log('valor de qty', qty)
            setCount(0)
            // console.log('count', count, 'qty', qty)
            // console.log('esto es stock', stock)

        } else {
            if (stock === 0) {
                setCount(0);
            } else {
                setCount(1);
            }
        }
        // console.log('esto es stock', stock)

    }, [stock]);

    const agregarAlCarrito = () => {
        if (isCart) {
            onAdd(count)
            setCount(0)
        } else {
            onAdd(count)
        }
    }

    return (
        <div >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <button className="btn btn-outline-danger shadow" onClick={restar}>
                    <BsDashCircleFill />
                </button>

                <span className="px-4 py-2 border rounded shadow-sm bg-light fw-bold">
                    {count}
                </span>

                <button className="btn btn-outline-success shadow" onClick={sumar}>
                    <FaCirclePlus />
                </button>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button
                    className="btn btn-primary btn-lg shadow d-flex align-items-center"
                    disabled={stock === 0 || count === 0 || count === stock}
                    onClick={agregarAlCarrito}
                >
                    <GiShoppingCart className="me-2" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount