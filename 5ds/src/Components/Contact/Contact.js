import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   // Vérifier que tous les champs obligatoires sont remplis
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    alert("Veuillez remplir tous les champs obligatoires !");
    return; // Stoppe l'envoi
  }

    try {
      const res = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l’envoi du formulaire");
      }

      const data = await res.json();
      console.log("Formulaire envoyé avec succès:", data);

      // Vider le formulaire
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        subject: "",
        email: "",
        message: "",
      });

      alert("Votre message a été envoyé avec succès ");

    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue ");
    }
  };

  return (
    <div className="contact-page" id="contact">
      <Container fluid className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            Ask<span className="text-red">For</span> Information
          </h1>
          <p className="contact-subtitle">
            We'll do our best to answer you as soon as possible
          </p>
        </div>

        <Row className="contact-content gx-5">
          {/* Form Section */}
          <Col lg={5} md={12} className="form-section">
            <div className="contact-form-wrapper">
              <div className="red-line"></div>

              <Form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <PhoneInput
                        defaultCountry="us"
                        value={formData.phoneNumber}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            phoneNumber: value,
                          }))
                        }
                        inputProps={{
                          placeholder: "Phone number",
                          className: "custom-phone-input"
                        }}
                        className="phone-input-container"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Leave your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input message-input"
                  />
                </Form.Group>

                <Button type="submit" className="submit-btn">
                  Submit now
                </Button>
              </Form>
            </div>
          </Col>

          {/* Info Section */}
          <Col lg={4} md={5} className="info-section">
            <div className="info-container">
              <h3 className="info-title">Have a question?</h3>
              <p className="info-subtitle">
                If you got any questions please do not hesitate to send us a
                message.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon address-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h5>Address</h5>
                    <p>38 Street of Glaciere, 75013 PARIS - FRANCE</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon email-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h5>Email</h5>
                    <p>contact@5ds.fr</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon phone-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h5>Phone</h5>
                    <p>+33 635 397 899</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
