import "../css/NavBar.css"
import { NavLink } from 'react-router-dom';
import React from "react";
import { Navbar, Container, Nav, Dropdown, NavItem, NavDropdown } from "react-bootstrap";
import CartWidgetIcon from "./CartWidgetIcon";

function NavBarBS() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>

        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo"
            src="https://i.postimg.cc/vBWf7MYF/logo.png"
            className="logo d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to='/' >
              Home
            </Nav.Link>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="nav-link">
                Categorías
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/categories/computadoras">
                  Computadoras
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/perifericos">
                  Periféricos
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/monitores">
                  Monitores
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/almacenamiento">
                  Almacenamiento
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/componentes">
                  Componentes
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/redes">
                  Redes
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/audio">
                  Audio
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/impresoras">
                  Impresoras
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/tablets">
                  Tablets
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/camaras">
                  Cámaras
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/accesorios">
                  Accesorios
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/proyectores">
                  Proyectores
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item as={NavLink} to="/categories/wearables">
                  Wearables
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/cart">
              <CartWidgetIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;