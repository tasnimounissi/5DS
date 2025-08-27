import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const steps = [
    {
      number: "1",
      title: "We Listen",
      description:
        "We listen carefully to your specific circumstances, challenges and goals, to ensure that our solutions are deeply rooted in a comprehensive understanding of your business.",
    },
    {
      number: "2",
      title: "We Suggest",
      description:
        "We offer strategic suggestions tailored to your specific needs. We make insightful suggestions that enable your business to face complexity and seize opportunities with confidence.",
    },
    {
      number: "3",
      title: "We Update",
      description:
        "Our commitment to continuous improvement means we proactively update our strategies, staying in step with industry trends, market changes and your evolving organizational needs.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <h6 className="section-subtitle">WHY CHOOSE US</h6>
          <h2 className="section-title">
            We're seeking for a tailored approach for each project
          </h2>
          <p className="section-description">
            Our main objective before our work is to grab the intention of the
            clients as their desire is the number one element through which we
            present the reality of what they want
          </p>
        </div>

        <div className="features-grid">
          {steps.map((step, index) => (
            <div key={index} className="feature-card">
              <span className="num-badge">{step.number}</span>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
