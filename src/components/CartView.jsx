import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const { cart, removeItem, clear } = useContext(CartContext)

    return (
        <div>
            <h1>Tu carrito</h1>
            {/* recorrer los item y mostrar el carrito */}
            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>
                            <img src={compra.img} alt={compra.name} style={{ width: '9rem' }} />
                            <span>{compra.name}</span>
                            <span>${compra.price}</span>
                            <span>Cantidad:{compra.quantity}</span>
                            <span>Precio final: ${compra.quantity * compra.price}</span>
                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>x</button>
                        </div>
                    ))
                }
            </div>
            {/* armar una logica de total a pagar */}
            <span>Total a pagar: $</span>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                width:'80%',
                padding:'2rem'
            }}>
                <button className='btn btn-dark' onClick={clear} >Vaciar carrito</button>
                <button className='btn btn-dark' >Terminar compra</button>
            </div>
        </div>
    )
}

export default CartView
