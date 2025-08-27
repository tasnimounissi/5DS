import "./NavBar.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "values", "services", "consultants", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // 30% de la section doit être visible
        rootMargin: "-100px 0px -50% 0px" // Ajustement pour la navbar fixe
      }
    );

    // Observer toutes les sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Nettoyer l'observer
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Fonction pour gérer le clic sur un lien
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

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
              <Nav.Link 
                href="#home" 
                className={activeSection === "home" ? "active-link" : ""}
                onClick={() => handleNavClick("home")}
              >
                HOME
              </Nav.Link>
              <Nav.Link 
                href="#about" 
                className={activeSection === "about" ? "active-link" : ""}
                onClick={() => handleNavClick("about")}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link 
                href="#values" 
                className={activeSection === "values" ? "active-link" : ""}
                onClick={() => handleNavClick("values")}
              >
                VALUES
              </Nav.Link>
              <Nav.Link 
                href="#services" 
                className={activeSection === "services" ? "active-link" : ""}
                onClick={() => handleNavClick("services")}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link 
                href="#consultants" 
                className={activeSection === "consultants" ? "active-link" : ""}
                onClick={() => handleNavClick("consultants")}
              >
                CONSULTANTS
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                className={activeSection === "contact" ? "active-link" : ""}
                onClick={() => handleNavClick("contact")}
              >
                CONTACT
              </Nav.Link>

              {/* Bouton visible uniquement sur mobile */}
              <Nav.Item className="d-lg-none mt-3">
                <Button 
                  variant="outline-danger"
                  className="rounded-0 w-100"
                  onClick={() => navigate("/training","_blank")}
                >
                  Training information
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          {/* Bouton visible uniquement sur desktop */}
          <div className="d-none d-lg-block">
            <Button 
              variant="outline-danger"
              className="rounded-0"
              onClick={() => window.open("/training","_blank")}
            >
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

