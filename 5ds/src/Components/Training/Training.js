import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import "./Training.css";
import singraLogo from "../assets/singra.png";
import backgroundImg from "../assets/background.jpg";

function Training() {
  // 1️⃣ Hook pour gérer le chargement (déjà présent)
  const [loading, setLoading] = useState(true);

  // 2️⃣ Hook pour stocker l'email saisi par l’utilisateur
  const [email, setEmail] = useState("");

  // 3️⃣ Hook pour afficher un message d’erreur ou de succès
  const [message, setMessage] = useState("");

  // Effet de chargement au début (déjà présent)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 4️⃣ Fonction pour valider l’email
  const validateEmail = (email) => {
    // Regex simple pour vérifier que l’email ressemble à "exemple@domaine.com"
    return /\S+@\S+\.\S+/.test(email);
  };

  // 5️⃣ Fonction appelée quand on clique sur "SUBSCRIBE NOW"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (!validateEmail(email)) {
      setMessage(" Email invalide. Essayez encore.");
      return;
    }

    try {
      // On envoie l’email à notre fake API (json-server)
      const response = await fetch("http://localhost:5000/trainings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Merci ! Vous êtes inscrit.");
        setEmail(""); // Réinitialise le champ
      } else {
        setMessage(" Erreur lors de l’inscription.");
      }
    } catch (error) {
      console.error("Erreur API:", error);
      setMessage(" Impossible de contacter le serveur.");
    }
  };

  //  Écran de chargement
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
      <Container fluid className="h-100">
        <Row className="min-vh-100 align-items-center g-0">
          {/* Partie gauche */}
          <Col xs={12} lg={7} className="left-section d-flex">
            <div className="content-wrapper mx-auto my-auto">
              <h2 className="stay-tuned">Stay Tuned</h2>
              <h1 className="main-title">We are launching soon.</h1>

              {/* Compteur */}
              <div className="countdown-section text-center">
                <div className="date-info">
                  <h4 className="day-name">Wednesday</h4>
                  <p className="date">January 15th</p>
                </div>
                <div className="countdown-timer justify-content-center">
                  <span className="time-unit">00<sub>days</sub></span>
                  <span className="time-unit">00<sub>hours</sub></span>
                  <span className="time-unit">00<sub>min</sub></span>
                  <span className="time-unit">00<sub>sec</sub></span>
                </div>
              </div>

              {/* Vidéo */}
              <div className="video-intro text-center">
                <a
                  href="https://youtu.be/lL0IGfSQ-rA?si=GxXMVvx7QRjlIa93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-button"
                >
                  <span className="play-icon">▶</span>
                  <span className="play-text">Watch the little intro</span>
                </a>
              </div>
            </div>
          </Col>

          {/* Partie droite */}
          <Col xs={12} lg={5} className="right-section d-flex">
            <div className="form-container mx-auto my-auto">
              <div className="form-header">
                <h5 className="keep-informed">KEEP INFORMED</h5>
              </div>

              <div className="logo-section">
                <img
                  src={singraLogo}
                  alt="Singra Training"
                  className="singra-logo"
                />
              </div>

              <p className="subscription-text">
                Subscribe now, We will let you know as soon <br />
                as we launch our new website
              </p>

              {/* Formulaire */}
              <Form
                className="subscription-form row g-2 justify-content-center"
                onSubmit={handleSubmit}
              >
                <Col xs={12} md={8}>
                  <Form.Control
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // met à jour l’état email
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    type="submit"
                    variant="danger"
                    className="subscribe-button"
                  >
                    SUBSCRIBE NOW
                  </Button>
                </Col>
              </Form>

              {/* Message d’erreur ou succès */}
              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Training;



