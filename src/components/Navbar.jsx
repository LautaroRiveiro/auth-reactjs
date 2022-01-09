import { useContext } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/user">Usuario</Nav.Link>
            <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={logout}>Cerrar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}