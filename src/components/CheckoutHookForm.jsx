import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../service/firebase'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const CheckoutHookForm = () => {
    const { cart, total, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    console.log(errors, "errors")

    const finalizarCompra = (data) => {

        console.log(data)
        let order = {
            comprador: {
                name:data.name,
                lastname:data.lastname,
                address:data.address,
                email:data.email,
            },
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



    //  evita que me muestre el formulario si el carro esta vacio.
    if (!cart.length && !orderId) {
        return <EmptyCart />
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
                        <form onSubmit={handleSubmit(finalizarCompra)}>
                            <input className='form-control' placeholder='Ingrese su nombre' name='name' type="text"
                                {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === 'required' && <p style={{ color: 'red' }}>Por favor complete el campo nombre</p>}
                            {errors?.name?.type === 'minLength' && <p style={{ color: 'red' }}>El nombre debe contener minimo 3 caracteres</p>}

                            <input className='form-control' placeholder='Ingrese su apellido' name='lastname' type="text"
                                {...register("lastname", { required: true, minLength: 2 })} />
                            {errors?.lastname?.type === 'required' && <p style={{ color: 'red' }}>Por favor complete el  apellido</p>}
                            {errors?.lasstname?.type === 'minLength' && <p style={{ color: 'red' }}>El apellid debe contener minimo 3 caracteres</p>}


                            <input className='form-control' placeholder='Ingrese su dirección' name='address' type="text"
                                {...register("address", { required: true, minLength: 10, maxLength: 30 })} />
                            {errors?.address?.type === 'required' && <p style={{ color: 'red' }}>Por favor complete el campo dirección</p>}
                            {errors?.address?.type === 'minLength' && <p style={{ color: 'red' }}>La dirección debe contener minimo 3 caracteres</p>}
                            {errors?.address?.type === 'maxLength' && <p style={{ color: 'red' }}>La dirección es demasiado largo</p>}

                            <input className='form-control' placeholder='Ingrese su correo' name='email' type="email"
                                {...register("email", { required: true })} />
                            <input className='form-control' placeholder='Repita su correo' name='secon-email' type="email"
                                {...register("secondemail", { required: true, validate: { equalsMails: mails2 => mails2 === getValues().email } })} />
                            {errors?.secondemail?.type === 'required' && <p style={{ color: 'red' }}>Por favor complete el campo Email</p>}
                            {errors?.secondemail?.type === 'equalsMails' && <p style={{ color: 'red' }}>Los mails  no coinciden</p>}
                            <button className='btn btn-dark' type='submit'> Completar compra </button>
                        </form>
                    </div>
            }
        </>
    )

}
export default CheckoutHookForm
