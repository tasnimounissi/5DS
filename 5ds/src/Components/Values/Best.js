
import React from 'react';
import './Best.css';
import bgImage from '../assets/3.jpg'; 
import { Button } from 'react-bootstrap';


const Best = () => {
  return (
    <section className="best-banner " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center">
            <h2 className="banner-subtitle text-danger fw-bold">WE MAKE A DIFFERENCE</h2>
            <h1 className="banner-title">The Best Solutions For</h1>
            <h1 className="banner-title">Developing Your Business</h1>
            <a href='#services'>
              <Button variant="danger rounded-0 p-3 mt-3 fw-bold">View more services</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;