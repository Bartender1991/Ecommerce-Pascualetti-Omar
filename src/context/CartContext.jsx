import { createContext, useState } from "react";

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
            // sumar repetidos
            const carritoActualizado = cart.map((prod) => {
                if (item.id === prod.id) {
                    //actualizo y sumar cantidades
                    return { ...prod, quantity: prod.quantity + qty }
                }else{
                    //retorno tal cual sin modificar
                    return prod
                }
            })
            //actualizar el estado con el nuevo array
            setCart(carritoActualizado)
            console.log('ya esta en el carrito')
        } else {
            setCart([...cart, { ...item, quantity: qty }])
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
