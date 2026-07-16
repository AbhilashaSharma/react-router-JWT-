import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Post</Nav.Link> */}
            <Link className="nav-link" to="/post">
              Post
            </Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <Link to className="dropdown-item" to="/register">
                Register
              </Link>
              <Link to className="dropdown-item" to="/login">
                Login
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
