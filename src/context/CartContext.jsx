import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Cramos nuestro contexto
export const CartContext = createContext()

const productLS = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(productLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    const addItem = (item, qty) => {
        console.log(cart)
        if (isInCart(item.id)) {
            // Buscar si el producto ya está en el carrito
            const productoEnCarrito = cart.find(prod => prod.id === item.id);
            const cantidadActual = productoEnCarrito ? productoEnCarrito.quantity : 0;
            const cantidadTotal = cantidadActual + qty;

            // Validar que no se exceda el stock
            if (cantidadTotal > item.stock) {
                toast.warning("¡Máximo permitido por stock alcanzado!");
                return;
            } else {
                // sumar repetidos
                const carritoActualizado = cart.map((prod) => {
                    if (item.id === prod.id) {

                        const newQuantity = prod.quantity + qty

                        if (newQuantity <= 0) {
                            removeItem(item.id)
                        }

                        //actualizo y sumar cantidades
                        return { ...prod, quantity: newQuantity }
                    } else {
                        //retorno tal cual sin modificar
                        return prod
                    }
                })
                // actualiza el carro solo si el id es distinto o si la cantidad es 0
                setCart(carritoActualizado.filter((prod) => prod.id !== item.id || prod.quantity > 0));
                console.log("Carrito actualizado");
            }
        } else {
            // si no existe lo agrega
            if (qty > 0) {
                setCart([...cart, { ...item, quantity: qty }]);
                toast.success("¡Agregado al carrito!");
            }
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const getQty = (id) => {
        const producto = cart.find(prod => prod.id === id)
        return producto ? producto.quantity : 0
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0).toFixed(2)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, getQty, cartQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}
