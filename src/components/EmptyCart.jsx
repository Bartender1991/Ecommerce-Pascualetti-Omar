import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h2>Tu carrito esta Vacio!</h2>
      <h3>Te invitamos a ver nuestros productos</h3>
      <Link className='btn btn-dark' to='/'> Ir al Home </Link>
    </div>
  )
}

export default EmptyCart
