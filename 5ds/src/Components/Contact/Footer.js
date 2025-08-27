import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container fluid>
        <Row className="footer-content">
          {/* Logo et description */}
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-logo">
              <img 
                src={require("../assets/white_logo.png")} 
                alt="logo" 
                className="footer-logo-img" 
              />
            </div>
            <p className="footer-description">
              Our goal is to turn your creative ideas into practical digital solutions. 
              We work to provide exceptional Web and Mobile Solutions and Comprehensive 
              e-Marketing Services to support our clients' Digital Transformation.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <span className="contact-text">contact@5ds.fr</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+33 635 397 899</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">38 Street of Glaciere , 75013 PARIS - FRANCE</span>
              </div>
            </div>
          </Col>

          {/* Quick links */}
          <Col lg={2} md={6} className="footer-column">
            <h4 className="footer-title">Quick links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#values" className="footer-link">Values</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#consultants" className="footer-link">Consultants</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Our services */}
          <Col lg={3} md={6} className="footer-column">
            <h4 className="footer-title">Our services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Engineering</a></li>
              <li><a href="#services" className="footer-link">Cloud Solutions</a></li>
              <li><a href="#services" className="footer-link">Big Data</a></li>
              <li><a href="#services" className="footer-link">Training</a></li>
              <li><a href="#services" className="footer-link">Coaching</a></li>
              <li><a href="#services" className="footer-link">Design & DM</a></li>
              <li><a href="#services" className="footer-link">Scientific Research</a></li>
              <li><a href="#services" className="footer-link">Talent Management</a></li>
            </ul>
          </Col>

          {/* Our clients */}
          <Col lg={4} md={6} className="footer-column">
            <h4 className="footer-title">Our clients</h4>
            <div className="clients-list">
              <div className="client-item">
                <img src={require("../assets/infotel.jpg")} alt="Infotel" className="client-image" />
                <div className="client-info">
                  <div className="client-date">Oct 01, 1979</div>
                  <div className="client-name">Infotel</div>
                  <a href="https://infotel.com/" 
                  className="client-link"
                  target="_blank"
                  rel="noreferrer">
                    Read more <span className="arrow">▶</span>
                  </a>
                </div>
              </div>
              
              <div className="client-item">
                <img src={require("../assets/enedis.jpg")} alt="Enedis" className="client-image" />
                <div className="client-info">
                  <div className="client-date">Jan 01, 2008</div>
                  <div className="client-name">Enedis</div>
                  <a href="https://www.enedis.fr/" 
                  className="client-link"
                  target="_blank"
                  rel="noreferrer">
                    Read more <span className="arrow">▶</span>
                  </a>
                </div>
              </div>
              
              <div className="client-item">
                <img src={require("../assets/voicedegit.png")} alt="VoiceDigit" className="client-image" />
                <div className="client-info">
                  <div className="client-date">Fev 15, 1983</div>
                  <div className="client-name">Voicedigit</div>
                  <a href="https://voicedigit.com" 
                  className="client-link"
                  target="_blank"
                  rel="noreferrer">
                    Read more <span className="arrow">▶</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>© 2024 All rights reserved. 5ds.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
