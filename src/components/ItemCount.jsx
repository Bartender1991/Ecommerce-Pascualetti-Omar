import { useEffect, useState } from "react"
const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
    const [comprar, setCompra] = useState(false)

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

    const comprarHandler = () => {
        setCompra(!comprar)
    }

    useEffect(() => {
        if (stock === 0) {
            setCount(0);
        } else {
            setCount(1);
        }
    }, [stock]);


    useEffect(() => {
        console.log("se ejecuta cuando se monta y siempre que compra cambie", comprar)
    }, [comprar])

    // console.log("El stock es : ", stock)
    const agregarAlCarrito = () => {
        onAdd(count)
    }

    return (
        <div >
            <div>
                <button className="btn btn-danger" onClick={restar}>-</button>
                <span className="btn">{count}</span>
                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <div >
                <button className="btn btn-primary btn-lg mt-3" disabled={stock === 0 || count === 0} onClick={agregarAlCarrito}>Agregar al carrito 🛒</button>
            </div>
        </div>
    )
}

export default ItemCount