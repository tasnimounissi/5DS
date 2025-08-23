import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import "./Training.css";
import singraLogo from "../assets/singra.png";
import backgroundImg from "../assets/background.jpg";

function Training() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <Spinner animation="border" role="status" variant="danger" />
        <p>LOADING</p>
      </div>
    );
  }

  return (
    <div
      className="training-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Container fluid>
        <Row className="min-vh-100 align-items-center">
          {/* Partie gauche */}
          <Col lg={7} className="left-section">
            <div className="content-wrapper">
              <h2 className="stay-tuned">Stay Tuned</h2>
              <h1 className="main-title">We are launching soon.</h1>
              
              <div className="countdown-section">
                <div className="date-info">
                  <h4 className="day-name">Wednesday</h4>
                  <p className="date">January 15th</p>
                </div>
                <div className="countdown-timer">
                  <span className="time-unit">00<sub>days</sub></span>
                  <span className="time-unit">00<sub>hours</sub></span>
                  <span className="time-unit">00<sub>min</sub></span>
                  <span className="time-unit">00<sub>sec</sub></span>
                </div>
              </div>
              
              <div className="video-intro">
                <Button 
                  variant="danger" 
                  className="play-button"
                  href="https://youtu.be/lL0IGfSQ-rA?si=GxXMVvx7QRjlIa93"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="play-icon">▶</span> Watch the little intro
                </Button>
              </div>
            </div>
          </Col>

          {/* Partie droite */}
          <Col lg={5} className="right-section">
            <div className="form-container">
              <div className="form-header">
                <h5 className="keep-informed">KEEP INFORMED</h5>
              </div>
              
              <div className="logo-section">
                <img src={singraLogo} alt="Singra Training" className="singra-logo" />
              </div>
              
              <p className="subscription-text">
                Subscribe now, We will let you know as soon<br />
                as we launch our new website
              </p>
              
              <Form className="subscription-form">
                <Form.Group className="email-group">
                  <Form.Control 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="email-input"
                  />
                </Form.Group>
                <Button variant="danger" className="subscribe-button">
                  SUBSCRIBE NOW
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Training;

