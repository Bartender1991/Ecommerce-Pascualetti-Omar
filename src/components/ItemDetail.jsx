// importamos el hook para usar el contexto
import React, { useContext, useEffect, useState } from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";
// importamos el contexto
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import VolverAtras from "./VolverAtras";

const ItemDetail = ({ detalle }) => {

  console.log('estoy en ItemCount :', detalle)

  // actividad proyecto final
  // const [quantity, setQuantity] = useState(0)
  const [purchase, setPurchase] = useState(false)

  // raer la funcionalidadpara agregar un tem del carrito del contexto
  const { addItem, getQty } = useContext(CartContext)

  // responsable de logica de agregar un item al carrito 
  const onAdd = (cantidad) => {
    setPurchase(true)
    console.log(cantidad)
    addItem(detalle, cantidad)
  }

  const stockActualizado = detalle.stock - getQty(detalle.id)

  return (
    <Card className="shadow-lg border-0 rounded-3 mt-4 p-3">
      <Row className="align-items-center">
        {/* Imagen: ocupa todo en pantallas chicas, la mitad en md+ */}
        <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
          <div style={{ textAlign: "left", marginBottom: "30px", marginLeft: "30px" }}>
            <VolverAtras />
            <span style={{ paddingLeft: "10px" }}>Volver</span>
          </div>
          <Card.Img
            src={detalle.img}
            alt={detalle.name}
            style={{ maxHeight: "250px", objectFit: "contain" }}
            className="rounded"
          />
        </Col>

        {/* Contenido: ocupa todo en xs, mitad en md+ */}
        <Col xs={12} md={6}>
          <Card.Body>
            <Card.Title className="fw-bold fs-3 mb-3 text-center text-md-start">
              {detalle.name}
            </Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Descripción:</strong> {detalle.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Precio:</strong> ${detalle.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Stock disponible:</strong> {stockActualizado}
              </ListGroup.Item>
            </ListGroup>

            {
              purchase ? (
                <div className="d-flex justify-content-center mt-3">
                  <Link
                    to="/cart"
                    className="btn btn-success btn-lg shadow d-flex align-items-center"
                  >
                    <i className="bi bi-cart-check-fill me-2"></i>
                    Ir al carrito
                  </Link>
                </div>

              ) : (
                <div className="text-center text-md-start mt-3">
                  <ItemCount stock={detalle.stock} onAdd={onAdd} />
                </div>
              )
            }

          </Card.Body>
        </Col>
      </Row>
    </Card>

  );
};

export default ItemDetail;
