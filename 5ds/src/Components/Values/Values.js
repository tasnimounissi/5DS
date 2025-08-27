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
          {/* wrapper grille : horizontal seulement sur lg+ */}
          <div className="values-grid">
            {/* Image côté gauche */}
            <div className="image-col">
              <div className="image-container">
                <img
                  src={require("../assets/values.jpg")}
                  alt="Professional businessman"
                  className="img-fluid d-block"
                />
              </div>
            </div>

            {/* Contenu côté droit */}
            <div className="content-col">
              <div className="values-content">
                {/* Header */}
                <div className="mb-4">
                  <h6 className="badge text-danger">OUR VALUES</h6>
                  <h2 className="display-5 fw-bold text-dark mb-4">
                    Our Values Inspire Us And Shape The Way We Serve Our Clients.
                  </h2>
                </div>

                {/* Liste des valeurs */}
                <div className="values-list">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className={`value-item d-flex ${index !== values.length - 1 ? "mb-4" : ""}`}
                    >
                      <div className="value-icon me-3 flex-shrink-0">
                        <div className="value-number">{index + 1}.</div>
                      </div>
                      <div className="value-content">
                        <h5 className="fw-bold text-dark mb-2">{value.title}</h5>
                        <p className="text-muted mb-0 value-description">{value.description}</p>
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




