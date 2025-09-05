import { useEffect, useState } from "react"
import { BsDashCircleFill } from "react-icons/bs"
import { FaCirclePlus } from "react-icons/fa6"
import { GiShoppingCart } from "react-icons/gi"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    useEffect(() => {
        if (stock === 0) {
            setCount(0);
        } else {
            setCount(1);
        }
    }, [stock]);
    const agregarAlCarrito = () => {
        onAdd(count)
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
                    disabled={stock === 0 || count === 0}
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