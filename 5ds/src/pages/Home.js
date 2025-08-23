import React from 'react'
import Header from '../Components/Home/Header/Header'
import Slider from '../Components/Home/Slider/Slider'
import Slider2 from '../Components/Home/Slider2/Slider2'
import About from '../Components/About/About'
import WhyChooseUs from '../Components/About/WhyChooseUs'
import Unlock from '../Components/About/Unlock'
import Values from '../Components/Values/Values'
import Best from '../Components/Values/Best'
import Services from '../Components/Services/Services'
import Consultants from '../Components/Consultants/Consultants'
import Cards from '../Components/Consultants/Cards'
import FaQ from '../Components/Consultants/FaQ'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Contact/Footer'
import Topback from '../Components/Tobback/Topback'
import NavBar from '../Components/Home/Header/NavBar'
import Counter from '../Components/Contact/Counter'


export default function Home() {
  return (
    <div>
        <Header />
        <NavBar />
        <Slider />
        <Topback />
        <Slider2 />
        <div style={{backgroundColor : "#F8F9FA",marginTop:"72px"}}>
        <About />
        <WhyChooseUs />
        <Unlock />
        <Values />
        <Best />
        <Services />
        <Consultants />
        <Cards />
        <FaQ />
        <Contact /> 
        <Counter />
      </div>
       
        <Footer />
          
      
    </div>
  )
}

