import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Counter.css';

const Counter = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    awards: 0,
    years: 0
  });

  const finalCounts = {
    projects: 45,
    customers: 18,
    awards: 5,
    years: 2
  };

  const animateCount = (key, finalValue) => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(finalValue * easeOutQuart);
      setCounts(prev => ({ ...prev, [key]: currentValue }));
      if (progress < 1) requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateCount('projects', finalCounts.projects);
      animateCount('customers', finalCounts.customers);
      animateCount('awards', finalCounts.awards);
      animateCount('years', finalCounts.years);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="counter-section">
      <Container fluid className="px-0">
        <Row className="counter-row mx-0">
          <Col xs={12} md={6} lg={3} className="counter-item">
            <div className="counter-content">
              <div className="counter-number">{counts.projects}</div>
              <div className="counter-label">PROJECTS COMPLETED</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="counter-item">
            <div className="counter-content">
              <div className="counter-number">{counts.customers}</div>
              <div className="counter-label">SATISFIED CUSTOMERS</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="counter-item">
            <div className="counter-content">
              <div className="counter-number">{counts.awards}</div>
              <div className="counter-label">AWARDS RECEIVED</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="counter-item">
            <div className="counter-content">
              <div className="counter-number">{counts.years}</div>
              <div className="counter-label">YEARS OF EXISTENCE</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;



