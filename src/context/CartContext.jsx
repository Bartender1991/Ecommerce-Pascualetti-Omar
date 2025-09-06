import { createContext, useState } from "react";
import { toast } from "react-toastify";

// Cramos nuestro contexto
export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    //todas las funciones que modifiquen el array o logicas sobre el array
    // - que me diga cuanto hay que pagar
    // - que me agrege un item al carro
    // - que borre un item del carro
    // - que vacie el carro
    // - que cuente los item dentro del carro
    // - etc.


    // addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
    // removeItem(itemId) // Remover un item del cart por usando su id
    // clear() // Remover todos los items
    // isInCart: (id) => true|false

    const addItem = (item, qty) => {



        if (isInCart(item.id)) {
            // Buscar si el producto ya está en el carrito
            const productoEnCarrito = cart.find(prod => prod.id === item.id);
            console.log('productoEnCarrito', productoEnCarrito)

            const cantidadActual = productoEnCarrito ? productoEnCarrito.quantity : 0;
            console.log('cantidadActual', cantidadActual)

            const cantidadTotal = cantidadActual + qty;
            console.log('cantidadTotal', cantidadTotal)

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


    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
