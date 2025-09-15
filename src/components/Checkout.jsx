import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../service/firebase'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'

const Checkout = () => {

    const [bayer, setBayer] = useState({})
    const [validMail, setValidMail] = useState('')
    const { cart, total, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const bayerData = (e) => {
        setBayer(
            {
                ...bayer,
                [e.target.name]: e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        console.log('preventeDefault', e)

        if (!bayer.name || !bayer.lastname || !bayer.address) {
            alert('completa los campos gil')
        } else if (bayer.email !== validMail) {
            alert('los correos no coinciden papu')
        } else {
            // creamos obejto
            let order = {
                comprador: bayer,
                compras: cart,
                total: total(),
                date: serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            // agregar el objeto al doc
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    //  evita que me muestre el formulario si el carro esta vacio.
    
    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

    return (
        <>
            {
                orderId
                    ? <div>
                        <h2>Realizaste tu compra correctamente! 🥳</h2>
                        <h3>El id de la compra : {orderId}</h3>
                    </div>
                    : <div className='container'>
                        <h1>Complete el formulario con sus datos</h1>
                        <form onSubmit={finalizarCompra}>
                            <input className='form-control' placeholder='Ingrese su nombre' name='name' type="text" onChange={bayerData} />
                            <input className='form-control' placeholder='Ingrese su apellido' name='lastname' type="text" onChange={bayerData} />
                            <input className='form-control' placeholder='Ingrese su dirección' name='address' type="text" onChange={bayerData} />
                            <input className='form-control' placeholder='Ingrese su correo' name='email' type="email" onChange={bayerData} />
                            <input className='form-control' placeholder='Repita su correo' name='secon-email' type="email" onChange={(e) => setValidMail(e.target.value)} />

                            <button className='btn btn-dark' type='submit'> Completar compra </button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout
