import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { logo } from "../assets";

function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-0" id="Navbar">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="" style={{ width: "200px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" style={{ width: "200px" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="headlink hover-underline-animation">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/about"
                    className="headlink hover-underline-animation"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className="headlink hover-underline-animation"
                  >
                    Reservation{" "}
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className="headlink hover-underline-animation"
                  >
                    FAQ{" "}
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    className="headlink hover-underline-animation"
                  >
                    Blogs
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    className="headlink  hover-underline-animation"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ backgroundColor: "" }}
                  /> */}
                  <NavDropdown.Item
                    href="/contactus"
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "rgb(2, 2, 186)",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    Contact Us
                  </NavDropdown.Item>

                  {/* <Button
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
