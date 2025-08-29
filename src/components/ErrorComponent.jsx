import React from 'react'
import { Link } from 'react-router-dom'


const ErrorComponent = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 15
        }}>
            <h1 className='p-4'>Lo siento la ruta no existe</h1>
            <img
                src="https://img.freepik.com/vector-grais/fondo-error-404-diseno-divertido_1167-219.jpg?w=2000"
                alt="error"
                style={{
                    width: '30%',
                    marginBottom: 15,
                }}
            />
            <Link to='/' className='btn btn-dark p-3'>volver al home</Link>
        </div>
    )
}

export default ErrorComponent