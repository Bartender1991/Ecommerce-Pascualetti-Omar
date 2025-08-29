import React from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";

const ItemDetail = ({ detalle }) => {
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
              <Button variant="primary" size="lg">
                Agregar al carrito 🛒
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
