import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import Button from 'react-bootstrap/Button';
function Slider() {
  return (
    <Carousel id="home"
      controls={false}
      indicators={true}
      wrap={true}
      pause={false}>
      <Carousel.Item interval={2000}>
        <div className="image-overlay">
         <img
          className="d-block w-100"
          src={require('../../assets/1.jpg')}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h1>Collaboration is our key of 
            success</h1>
          <p>
          The strength of the team is each individual member.<br/>
          The strength of each member is the team.<br/>
          -Phil Jackson-</p>
          <Button variant="danger" className="rounded-0" href="#contact">Contact us</Button>
           <Button variant="outline-light"  className="rounded-0 space" href="#about">Our company</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <div className="image-overlay">
          <img 
          className="d-block w-100"
          src={require('../../assets/2.jpg')}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h1>Innovation Through <br/>
            Insightful Consulting</h1>
          <p>Fueling improvement with visionary advice - Innovation with smart advice.</p>
          <Button variant="danger"  className="rounded-0" href="#contact">Contact us</Button>
          <Button variant="outline-light" className="rounded-0 space" href="#about">Our company</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className="image-overlay"> 
           <img
          className="d-block w-100"
          src={require('../../assets/3.jpg')}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h1>Driving your business to new horizons</h1>
          <p>
            Embark on a journey of unlimited possibilities, as<br/>
            we take your company to new horizons,where<br/>
            innovation meets success
          </p>
          <Button variant="danger"  className="rounded-0" href="#contact">Contact us</Button>
          <Button variant="outline-light"  className="rounded-0 space" href="#about">Our company</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;