import React from 'react';
import './Consultants.css';

const Consultants = () => {
  return (
    <section className="consultants-section" id="consultants">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Colonne gauche : titres */}
          <div className="col-lg-4 col-md-12 ">
            <h6 className="consultants-title size-title text-danger">OUR CONSULTANTS</h6>
            <h2 className="consultants-subtitle size-subtitle fw-bold">
              Discover Our Diverse Consultant Showcase
            </h2>
          </div>

          {/* Colonne droite : description */}
          <div className="col-lg-8 col-md-12">
            <p className="consultants-description size-paragraph">
              From business strategy consulting to advanced technical expertise,our team of seasoned
              consultants is here to provide the solutions you require to achieve your goals.
              Explore their skills and find the right partner to accompany you on your path to success.
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Consultants;
