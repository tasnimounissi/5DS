import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: '< />',
      title: 'Engineering',
      description: 'Software Development / Web & Mobile Development / API Management.',
      iconClass: 'engineering-icon'
    },
    {
      id: 2,
      icon: '☁',
      title: 'Cloud Solutions',
      description: 'AWS / Azure / GCP...',
      iconClass: 'cloud-icon'
    },
    {
      id: 3,
      icon: '▬',
      title: 'Big Data',
      description: 'Business Intelligence / Big Data / Machine & Deep Learning.',
      iconClass: 'bigdata-icon'
    },
    {
      id: 4,
      icon: '📡',
      title: 'Training',
      description: 'Agile / SCRUM : SM, PO / Development / Cloud / Management / Robotics.',
      iconClass: 'training-icon'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Coaching',
      description: 'AGILE Coaching / Governance and Product Management.',
      iconClass: 'coaching-icon'
    },
    {
      id: 6,
      icon: '✖',
      title: 'Design & DM',
      description: 'Announcements / Advertisements / Posters ...',
      iconClass: 'design-icon'
    },
    {
      id: 7,
      icon: '🧪',
      title: 'Scientific Research',
      description: 'Artificial Intelligence (AI) / Internet of Things (IoT) / Virtual Reality (VR) / Augmented Reality (AR).',
      iconClass: 'research-icon'
    },
    {
      id: 8,
      icon: '👥',
      title: 'Talent Management',
      description: 'Career Development / Onboarding & Integration.',
      iconClass: 'talent-icon'
    }
  ];

  return (
    <>
      <section className="services-section" id="services">
        <Container>
          <div className="services-header">
            <span className="services-subtitle fw-bold">OUR SERVICES</span>
            <h2 className="services-title">
              We're Creating Solutions For Your <br />
              Organization
            </h2>
          </div>
          
          <Row className="services-grid">
            {servicesData.map((service) => (
              <Col lg={3} md={6} sm={12} key={service.id} className="mb-4">
                <div className="service-card">
                  <div className={`service-icon ${service.iconClass}`}>
                    {service.icon}
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default Services;