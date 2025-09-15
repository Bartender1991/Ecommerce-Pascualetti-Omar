import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function getStatusBadge(stock) {
    if (stock === 0) {
        return (
            <div
                style={{
                    position: 'absolute',
                    width: '80%',
                    height: '45px',
                    top: '57px',
                    left: '26px',
                    background: 'red',
                    color: '#000000ff',
                    padding: '2px 16px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    borderRadius: '6px',
                    boxShadow: '5px 7px 5px 0px rgba(0,0,0,0.1)',
                    transform: 'rotate(326deg)',
                    textAlign: 'center',
                    zIndex: 2
                }}
            >
                Agotado
            </div>
        );
    } else if (stock <= 10) {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'yellow',
                    color: '#333',
                    padding: '2px 16px',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    borderRadius: '6px',
                    boxShadow: '5px 7px 5px 0px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    zIndex: 2
                }}
            >
                Oferta
            </div>
        );
    }
    return null;
}

function Item({ prod }) {

    return (
        <Card style={{ width: '15rem', height: '23rem' }}>
            <div style={{ position: 'relative', width: '100%', height: '150px' }}>
                {getStatusBadge(prod.stock)}

                <Card.Img
                    variant="top"
                    src={prod.img}
                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>
                <Link className='btn btn-primary mt-auto' to={`/item/${prod.id}`} >Ver más</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;