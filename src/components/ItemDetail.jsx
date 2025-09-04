// importamos el hook para usar el contexto
import React, { useContext } from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";
// importamos el contexto
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
  // raer la funcionalidadpara agregar un tem del carrito del contexto
  const { addItem } = useContext(CartContext)

  // responsable de logica de agregar un item al carrito 
  const onAdd = (cantidad) => {
    console.log(cantidad)
    addItem(detalle, cantidad)
  }


  return (
    <Card className="shadow-lg border-0 rounded-3 mt-4 p-3">
      <Row>
        <Col xs={12} className="text-center mb-3">
          <Card.Img
            src={detalle.img}
            alt={detalle.name}
            style={{ maxHeight: "250px", objectFit: "contain" }}
            className="rounded"
          />
        </Col>
      </Row>

      <Row>
        <Col>
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
                <strong>Stock disponible:</strong> {detalle.stock}
              </ListGroup.Item>
            </ListGroup>

            <div className="text-center mt-3">
              <ItemCount stock={detalle.stock} onAdd={onAdd} />
            </div>

          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
