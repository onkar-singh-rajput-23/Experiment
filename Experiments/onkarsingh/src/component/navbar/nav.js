import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import "./nav.css";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navb navbar-background "
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="https://cdn.photographylife.com/wp-content/uploads/2017/08/Nikon-D850-Sample-Image-2.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2 rounded-circle"
            alt="Logo"
          />
          Onkar Singh Rajput
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify -content-end ">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
