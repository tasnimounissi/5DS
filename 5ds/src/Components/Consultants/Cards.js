import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

const GAP_PX = 24; // doit correspondre au gap CSS

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);      // 3 (lg) / 2 (md) / 1 (sm)
  const [stepPx, setStepPx] = useState(0);        // largeur d’un “pas” en px (carte + gap)
  const firstCardRef = useRef(null);

  const consultants = [
    {
      title: "Product Owner",
      subtitle: "4 years' experience",
      rating: 5,
      description:
        "Certified in PSM I, PSPO I, and SaFe 6.0, with a technical background in HTML, CSS, and MERN stack. Proficient in DevOps practices with GitLab and Docker, as well as testing methodologies including Xray, she also has data skills with Power BI and ELK, and excels in UX/UI design.",
      icon: "👤"
    },
    {
      title: "FrontEnd Developer",
      subtitle: "15 years' experience",
      rating: 5,
      description:
        "Equipped with extensive expertise in Angular development, Node.js, MariaDB, MongoDB, and SQL. With a strong foundation in Agile methodologies, UX/UI, coupled with proficiency in DevOps practices, he brings a holistic approach to software development.",
      icon: "👤"
    },
    {
      title: "Security Architect",
      subtitle: "13 years' experience",
      rating: 5,
      description:
        "Our consultant excels in ensuring comprehensive project security. Proficient in SonarQube and with a set of tools such as Jira, Confluence, AWS and GitLab, he seamlessly integrates robust cybersecurity measures into Agile methodologies.",
      icon: "👤"
    },
    {
      title: "Cloud Engineer",
      subtitle: "10 years' experience",
      rating: 5,
      description:
        "Specialized in designing and deploying cloud-native solutions. Experienced in Kubernetes, Docker, AWS, and Azure. Skilled at implementing CI/CD pipelines and automating infrastructure with Terraform and Ansible.",
      icon: "👤"
    },
    {
      title: "Data Scientist",
      subtitle: "8 years' experience",
      rating: 5,
      description:
        "Expert in machine learning algorithms, data visualization, and statistical analysis. Proficient in Python, R, TensorFlow, and big data technologies like Hadoop and Spark.",
      icon: "👤"
    },
    {
      title: "DevOps Engineer",
      subtitle: "12 years' experience",
      rating: 5,
      description:
        "Specializes in automation, monitoring, and deployment pipelines. Expert in Jenkins, GitLab CI/CD, Kubernetes, and cloud infrastructure management across AWS and Azure platforms.",
      icon: "👤"
    }
  ];

  // 1) Gérer le responsive: 1 (sm) / 2 (md) / 3 (lg)
  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      if (w < 768) return 1;        // sm
      if (w < 992) return 2;        // md
      return 3;                     // lg+
    };
    const onResize = () => setPerView(computePerView());
    setPerView(computePerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 2) Mesurer la largeur d’une carte pour un scroll précis (gap inclus)
  useEffect(() => {
    const recalc = () => {
      if (firstCardRef.current) {
        const w = firstCardRef.current.offsetWidth;  // largeur de la carte visible
        setStepPx(w + GAP_PX);                       // carte + gap
      }
    };
    // recalcul initial + après un petit délai pour laisser le layout se poser
    recalc();
    const id = setTimeout(recalc, 50);
    window.addEventListener("resize", recalc);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", recalc);
    };
  }, [perView]);

  // 3) Auto-scroll (toutes les 12s) et s'arrête à la fin (ne revient pas au début)
  useEffect(() => {
    const maxIndex = Math.max(0, consultants.length - perView);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    }, 12000); // 12 secondes entre chaque “pas”
    return () => clearInterval(interval);
  }, [consultants.length, perView]);

  // 4) Si perView change, rester dans la plage valide
  useEffect(() => {
    const maxIndex = Math.max(0, consultants.length - perView);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView]);

  const maxIndex = Math.max(0, consultants.length - perView);

  return (
    <div className="cards-carousel-container">
      <div
        className="cards-scroll-wrapper"
        style={{
          transform: `translateX(-${currentIndex * stepPx}px)`,
          // Variables CSS pour calculer les largeurs en pur CSS
          "--per-view": perView,
          "--gap": `${GAP_PX}px`,
        }}
      >
        {consultants.map((consultant, index) => (
          <Card
            key={index}
            className="consultant-card"
            ref={index === 0 ? firstCardRef : null}
          >
            <Card.Body>
              <div className="consultant-header">
                <div className="consultant-icon">{consultant.icon}</div>
                <div className="consultant-info">
                  <Card.Title className="consultant-title">
                    {consultant.title}
                  </Card.Title>
                  <Card.Subtitle className="consultant-subtitle">
                    {consultant.subtitle}
                  </Card.Subtitle>
                </div>
              </div>

              <div className="rating-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`star ${i < consultant.rating ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <Card.Text className="consultant-description">
                {consultant.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* (Optionnel) petites flèches pour contrôler aussi à la main */}
      <div className="nav-arrows">
        <button
          className="nav-btn"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          ‹
        </button>
        <button
          className="nav-btn"
          onClick={() => setCurrentIndex((i) => Math.min(maxIndex, i + 1))}
          disabled={currentIndex === maxIndex}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Cards;





