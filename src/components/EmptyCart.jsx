import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="position-fixed top-50 start-50 translate-middle text-center w-100">
      {/* Icono de carrito vacío */}
      <i className="bi bi-cart-x display-1 text-muted mb-3"></i>

      {/* Mensajes */}
      <h2 className="fw-bold">¡Tu carrito está vacío!</h2>
      <p className="text-secondary mb-4">
        Parece que todavía no agregaste nada. <br />
        Te invitamos a descubrir nuestros productos.
      </p>

      {/* Botón para volver al Home */}
      <Link to="/" className="btn btn-dark btn-lg shadow">
        Ir al Home
      </Link>
    </div>
  );
};

export default EmptyCart;
