import { useContext } from "react"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../auth/AuthContext"

export const NavigationBar = () => {

  const { logout } = useContext(AuthContext)

  return (
    <Navbar bg="success" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/link">Link</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="#action/3.1">Users</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">Ingresar</Nav.Link>
          </Nav>
          <Button variant="outline-light" size="sm" onClick={logout}>Cerrar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}