import "./NavBar.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png"; // logo importé

const NavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="custom-navbar navbar-light fixed-top bg-white navbar-fixed"
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo}
              alt="5DS Logo"
              className="navbar-logo img-fluid"
            />
          </Navbar.Brand>

          {/* Burger button */}
          <Navbar.Toggle aria-controls="mainmenu" />

          {/* Navigation links */}
          <Navbar.Collapse id="mainmenu">
            <Nav
              className="navigation-text ms-auto me-3 align-items-center"
              style={{ fontWeight: 700 }}
            >
              <Nav.Link href="#hero">HOME</Nav.Link>
              <Nav.Link href="#features">ABOUT</Nav.Link>
              <Nav.Link href="#">VALUES</Nav.Link>
              <Nav.Link href="#faq">SERVICES</Nav.Link>
              <Nav.Link href="./index-ar.html">CONSULTANTS</Nav.Link>
              <Nav.Link href="#feature">CONTACT</Nav.Link>

              {/* Bouton visible uniquement sur mobile */}
              <Nav.Item className="d-lg-none mt-3">
                <Button variant="outline-danger" className="rounded-0 w-100">
                  Training information
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          {/* Bouton visible uniquement sur desktop */}
          <div className="d-none d-lg-block">
            <Button variant="outline-danger" className="rounded-0">
              Training information
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Espace pour compenser la navbar fixed */}
      <div className="header-spacer"></div>
    </>
  );
};

export default NavBar;


