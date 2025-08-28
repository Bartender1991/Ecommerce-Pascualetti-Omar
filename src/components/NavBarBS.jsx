import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/NavBar.css"
import CartWidgetIcon from './CartWidgetIcon';

function NavBarBS() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
             <img alt='logo' src='https://i.postimg.cc/vBWf7MYF/logo.png' className='logo'/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nuevos</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Mas Vendidos</Nav.Link>
          </Nav>
             <CartWidgetIcon/>
        </Container>
      </Navbar>   
    </>
  );
}

export default NavBarBS;