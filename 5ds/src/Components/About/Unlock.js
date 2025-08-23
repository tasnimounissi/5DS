import React from 'react';
import './Unlock.css';
import bgImage from '../assets/2.jpg'; 

function Unlock() {
  return (
    <div className="unlock-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="container">
          <h2 className="mt-4 fw-bold text-white">Unlock Your Path To Success.</h2>
          <p className="textt">
            Feel free to reach out to us for any inquiries or information related to our training and<br/>
            coaching services across various Agile domains (PSM I, PSPO I, SAFe, ...), Data (PL-300, ...),<br/> 
            Cloud (Azure, AWS, ...), and beyond. We're here to assist you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unlock;


