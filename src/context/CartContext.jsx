import { createContext, useState } from "react";

// Cramos nuestro contexto
export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    //todas las funciones que modifiquen el array o logicas sobre el array

    return (
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}
