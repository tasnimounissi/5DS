import React from "react";
import { Accordion } from "react-bootstrap";
import "./FaQ.css";

function FaQ() {
  return (
    <section className="faq-section container">
      <h2 className="fw-bold title mb-3">Frequently asked questions</h2>
      <p>
        We've compiled comprehensive information to address your queries and
        provide insights into our services.
      </p>

      <div className="row mt-4">
        {/* Colonne gauche : Accordions */}
        <div className="col-md-6 d-flex">
          {/* Ajout de la classe 'danger-headers' pour colorer les headers */}
          <Accordion defaultActiveKey="0" className="accordion-large danger-headers">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How can I avail your consulting services?
              </Accordion.Header>
              <Accordion.Body>
                You can contact us through our website, and our team will guide you
                through the initial steps, understanding your requirements and proposing
                suitable solutions.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>What is your approach when delivering consulting sevices ?</Accordion.Header>
              <Accordion.Body>
                We follow a collaborative approach, working closely with our customers to achieve the best possible results.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What is the typical duration of a consulting engagement ?</Accordion.Header>
              <Accordion.Body>
                The duration varies depending on the complexity of the project, but we strive to be efficient and effective in everything we do.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Colonne droite : textes centrés verticalement */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="faq-text">
            <h5>Service Offerings</h5>
            <p>Sculpting Success, One Tailored Solution at a Time.</p>

            <h5>Engagement Process</h5>
            <p>
              Navigating Excellence: Your Journey through Transparent
              Consultation.
            </p>

            <h5>Company Information</h5>
            <p>
              Innovate, Elevate, Excel: Your Trusted Partner in Consulting
              Excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaQ;





