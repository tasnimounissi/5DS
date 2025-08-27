import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

const GAP_PX = 24; // doit correspondre au gap CSS

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3); 
  const [stepPx, setStepPx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoScrollActive, setAutoScrollActive] = useState(false);
  const firstCardRef = useRef(null);
  const containerRef = useRef(null); 
  const intervalRef = useRef(null);

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

  // Observer pour détecter quand les cartes deviennent visibles
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setAutoScrollActive(true); // Démarrer l'auto-scroll
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentNode = containerRef.current; // copie locale
    if (currentNode) {
      observer.observe(currentNode);
    }

    return () => {
      if (currentNode) observer.unobserve(currentNode); // cleanup sûr
    };
  }, [isVisible]);

  // Gérer le responsive
  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      if (w < 768) return 1;
      if (w < 992) return 2;
      return 3;
    };
    const onResize = () => setPerView(computePerView());
    setPerView(computePerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mesurer la largeur d'une carte pour un scroll précis
  useEffect(() => {
    const recalc = () => {
      if (firstCardRef.current) {
        const w = firstCardRef.current.offsetWidth;
        setStepPx(w + GAP_PX);
      }
    };
    recalc();
    const id = setTimeout(recalc, 50);
    window.addEventListener("resize", recalc);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", recalc);
    };
  }, [perView]);

  // Auto-scroll intelligent
  useEffect(() => {
    if (!autoScrollActive) return;

    const maxIndex = Math.max(0, consultants.length - perView);
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= maxIndex) {
          setAutoScrollActive(false);
          return maxIndex;
        }
        return nextIndex;
      });
    }, 3000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoScrollActive, consultants.length, perView]);

  // Ajuster l'index si perView change
  useEffect(() => {
    const maxIndex = Math.max(0, consultants.length - perView);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [perView, currentIndex, consultants.length]);

  const maxIndex = Math.max(0, consultants.length - perView);

  const goToPrevious = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goToNext = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="cards-carousel-container" ref={containerRef}>
      <div
        className="cards-scroll-wrapper"
        style={{
          transform: `translateX(-${currentIndex * stepPx}px)`,
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
                  <Card.Title className="consultant-title">{consultant.title}</Card.Title>
                  <Card.Subtitle className="consultant-subtitle">{consultant.subtitle}</Card.Subtitle>
                </div>
              </div>
              <div className="rating-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < consultant.rating ? "filled" : ""}`}>★</span>
                ))}
              </div>
              <Card.Text className="consultant-description">{consultant.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="nav-arrows">
        <button className="nav-btn" onClick={goToPrevious} disabled={currentIndex === 0}>‹</button>
        <button className="nav-btn" onClick={goToNext} disabled={currentIndex === maxIndex}>›</button>
      </div>
    </div>
  );
};

export default Cards;






