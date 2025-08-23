import React from 'react';
import './Values.css';

function Values() {
  const values = [
    {
      title: "We Thrive On The Power Of Collaboration.",
      description: "Working together, we create synergy that propels us toward common goals and shared success."
    },
    {
      title: "We Fuel Creativity And Innovation.",
      description: "Embracing new ideas and creative solutions drives our continuous growth and transformation."
    },
    {
      title: "We Transform Motivation Into Action.",
      description: "Converting inspiration into tangible results through focused effort and strategic execution."
    },
    {
      title: "We Cultivate Success Rooted In Trust.",
      description: "Building lasting relationships and achieving sustainable growth through integrity and reliability."
    }
  ];

  return (
    <>
      <section className="values-section py-5" id="values">
        <div className="container">
          <div className="row align-items-center">
            {/* Image côté gauche */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src={require("../assets/values.jpg")}
                  alt="Professional businessman"
                  className="size"
                />
              </div>
            </div>

            {/* Contenu côté droit */}
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="values-content">
                {/* Header */}
                <div className="mb-4">
                  <h6 className="badge text-danger px-3 py-2 mb-3 rounded-pill">
                    OUR VALUES
                  </h6>
                  <h2 className="display-5 fw-bold text-dark mb-4">
                    Our Values Inspire Us And Shape The Way We Serve Our Clients.
                  </h2>
                </div>

                {/* Liste des valeurs */}
                <div className="values-list">
                  {values.map((value, index) => (
                    <div key={index} className="value-item d-flex mb-4">
                      <div className="value-icon me-3 flex-shrink-0">
                        <div className="value-number">
                          {index + 1}
                        </div>
                      </div>
                      <div className="value-content">
                        <h5 className="fw-bold text-dark mb-2">
                          {value.title}
                        </h5>
                        <p className="text-muted mb-0 value-description">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Values;
