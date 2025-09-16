import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { db } from '../service/firebase'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'
import CheckoutEnd from './CheckoutEnd'
import LoaderComponent from './LoaderComponent'

const CheckoutHookForm = () => {
    const { cart, total, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loader, setLoader] = useState(false)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    console.log(errors, "errors")

    const finalizarCompra = (data) => {
        let order = {
            comprador: {
                name: data.name,
                lastname: data.lastname,
                address: data.address,
                email: data.email,
            },
            compras: cart,
            total: total(),
            date: serverTimestamp()
        }
        const ventas = collection(db, 'orders')
        // agregar el objeto al doc
        setLoader(true)
        addDoc(ventas, order)
            .then((res) => {
                console.log(res)
                setOrderId(res.id)
                clear()
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setLoader(false))
    }

    if (loader) {
        return <LoaderComponent />
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {
                orderId ? <div>
                    <CheckoutEnd orderId={orderId} />
                </div>
                    : <div className="container mt-5">
                        <h1 className="text-center mb-4">Complete el formulario con sus datos</h1>

                        <form
                            className="p-4 border rounded shadow bg-light"
                            onSubmit={handleSubmit(finalizarCompra)}
                        >
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su nombre"
                                    name="name"
                                    type="text"
                                    {...register("name", { required: true, minLength: 3 })}
                                />
                                {errors?.name?.type === "required" && (
                                    <div className="text-danger mt-1">Por favor complete el campo nombre</div>
                                )}
                                {errors?.name?.type === "minLength" && (
                                    <div className="text-danger mt-1">El nombre debe contener mínimo 3 caracteres</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Apellido</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su apellido"
                                    name="lastname"
                                    type="text"
                                    {...register("lastname", { required: true, minLength: 2 })}
                                />
                                {errors?.lastname?.type === "required" && (
                                    <div className="text-danger mt-1">Por favor complete el apellido</div>
                                )}
                                {errors?.lastname?.type === "minLength" && (
                                    <div className="text-danger mt-1">El apellido debe contener mínimo 2 caracteres</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Dirección</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su dirección"
                                    name="address"
                                    type="text"
                                    {...register("address", { required: true, minLength: 10, maxLength: 30, })}
                                />
                                {errors?.address?.type === "required" && (
                                    <div className="text-danger mt-1">Por favor complete el campo dirección</div>
                                )}
                                {errors?.address?.type === "minLength" && (
                                    <div className="text-danger mt-1">La dirección debe contener mínimo 10 caracteres</div>
                                )}
                                {errors?.address?.type === "maxLength" && (
                                    <div className="text-danger mt-1">La dirección es demasiado larga</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su correo"
                                    name="email"
                                    type="email"
                                    {...register("email", { required: true })}
                                />
                                {errors?.secondemail?.type === "required" && (
                                    <div className="text-danger mt-1">Por favor complete el campo Email</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Repetir correo electrónico</label>
                                <input
                                    className="form-control"
                                    placeholder="Repita su correo"
                                    name="secondemail"
                                    type="email"
                                    {...register("secondemail", { required: true, validate: { equalsMails: (mails2) => mails2 === getValues().email, }, })}
                                />
                                {errors?.secondemail?.type === "required" && (
                                    <div className="text-danger mt-1">Por favor complete el campo Email</div>
                                )}
                                {errors?.secondemail?.type === "equalsMails" && (
                                    <div className="text-danger mt-1">Los mails no coinciden</div>
                                )}
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-dark" type="submit">
                                    Completar compra
                                </button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
export default CheckoutHookForm
