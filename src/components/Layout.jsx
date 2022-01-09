import { Container } from "react-bootstrap";
import { NavigationBar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container>
        {children}
      </Container>
      <footer>Pie de pagona</footer>
    </>
  )
}