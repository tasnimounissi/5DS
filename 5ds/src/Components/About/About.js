import React from "react";
import signature from "../assets/signature.png";
import Aboutus from "../assets/Aboutus.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="containers">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 order-1 order-lg-2">
              <div className="image-card rounded-0 overflow-hidden">
                <img
                  src={Aboutus}
                  alt="Team collaborating"
                  className="image w-100 h-100 about-visual rounded-0"
                />
              </div>
            </div>

            {/* Text column - appears second on mobile */}
            <div className="col-lg-7 order-2 order-lg-1">
              <p className="eyebrow text-danger mb-2">OUR MAIN FEATURES</p>

              <h2 className="display-7 fw-bold mb-3">
                We Collaborate With You To Tackle{" "}
                <span className="d-lg-block">
                  Your Most Critical Business Priorities
                </span>
              </h2>

              <p className="lead text-body-secondary mb-4 size">
                5DS is an IT company specialized in system consulting and computer
                software, as well as training across various domains in Web and
                mobile development.
              </p>

              <ul className="features list-unstyled mb-4 size">
                <li>We innovate with purpose</li>
                <li>We deliver results, not just reports</li>
                <li>We excel through diversity</li>
                <li>We empower through knowledge</li>
                <li>We leverage technology intelligently</li>
                <li>We learn from customer feedback</li>
              </ul>

              <hr className="rule my-4" />

              {/* Signature + nom + téléphone - 3 equal columns */}
              {/* Signature + nom + téléphone - 3 equal columns */}
              <div className="row align-items-start g-3 g-lg-3">
                <div className="col-2 text-start">
                  <img src={signature} alt="Signature" className="signature" />
                </div>

                <div className="col-4 text-start ps-4">
                  <div style={{ fontWeight: 800, fontSize: "20px" }}>Dhaou BERCHECH</div>
                  <div className="text-body-secondary small">
                    Chief Executive Officer
                  </div>
                </div>

                <div className="col-4 text-start">
                  <a
                    href="tel:+33635397899"
                    className="h5 d-block fw-semibold text-decoration-none text-dark"
                    style={{ fontWeight: 800 }}
                  >
                    +33 635 397 899
                  </a>
                  <div className="text-body-secondary small">
                    Call to ask any question
                  </div>
                </div>
              </div>
              <hr className="rule my-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}