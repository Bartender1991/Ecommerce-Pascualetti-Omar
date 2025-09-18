import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { toast } from "react-toastify"
import { newProduct } from "../service/firebase"

const EditModalNew = ({ show, handleClose, setRefresh }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    const newData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      img: formData.get("img"),
    }

    newProduct(newData)
      .then(() => {
        toast.success("Producto agregado correctamente")
        handleClose()
        setRefresh(prev => !prev)
      })
      .catch((error) => toast.error("Error al agregar producto: " + error))
      .finally(() => setLoading(false))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={2} name="description" required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" step="0.01" name="price" required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" name="stock" required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control type="url" name="img" required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditModalNew
