import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Card, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { updateprodById } from "../service/firebase"
import { toast } from "react-toastify"

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
            img: formData.get("img"),
        }

        console.log("Datos a actualizar:", updatedData)
        updateprodById(prod.id, updatedData)
            .then(() => {
                toast.success("✅ Producto actualizado correctamente")
            })
            .catch((error) => {
                toast.error("❌ Error al actualizar producto:", error)
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
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control type="url" name="img" defaultValue={prod.img} placeholder="https://example.com/imagen.png" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" defaultValue={prod.name} placeholder="Ingrese nombre del articulo" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" defaultValue={prod.description} placeholder="Ingrese descripcion del producto" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="price" step="0.01" defaultValue={prod.price} placeholder="Ingrese precio del producto" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" defaultValue={stockActualizado} placeholder="Ingrese cantidad de stock disponible" />
                        </Form.Group>

                        <div className="d-flex ms-3">
                            <Link className="btn btn-dark border-end" to={`/item/${prod.id}`}>
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
