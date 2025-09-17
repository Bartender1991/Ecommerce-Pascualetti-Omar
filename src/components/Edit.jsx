import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Card, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { updateprodById } from "../service/firebase"

const Edit = ({ prod }) => {
    const { getQty } = useContext(CartContext)
    const stockActualizado = prod.stock - getQty(prod.id)

    const finalizarUpdate = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const updatedData = {
            name: formData.get("name"),
            description: formData.get("description"),
            price: Number(formData.get("price")),
            stock: Number(formData.get("stock")),
        }

        console.log("Datos a actualizar:", updatedData)
        updateprodById(prod.id, updatedData)
            .then(() => {
                console.log("✅ Producto actualizado correctamente")
            })
            .catch((error) => {
                console.error("❌ Error al actualizar producto:", error)
            })
    }

    return (
        <Card className="mb-3 w-100">
            <Card.Body className="d-flex align-items-center">
                <div style={{ width: "150px", marginRight: "10px" }}>
                    <Card.Img
                        src={prod.img}
                        style={{ width: "100%", height: "100px", objectFit: "cover" }}
                    />
                </div>

                <div className="flex-grow-1">
                    <Form onSubmit={finalizarUpdate}>

                        <Form.Group className="mb-2">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" defaultValue={prod.name} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                defaultValue={prod.description}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                defaultValue={prod.price}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                type="number"
                                name="stock"
                                defaultValue={stockActualizado}
                            />
                        </Form.Group>

                        <div className="d-flex flex-column ms-3">
                            <Link className="btn btn-secondary border-end" to={`/item/${prod.id}`}>
                                Ver más
                            </Link>
                            <Button type="submit" variant="primary">
                                Guardar
                            </Button>
                        </div>
                    </Form>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Edit
