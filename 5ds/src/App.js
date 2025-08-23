import Header from "./Components/Home/Header/Header";
import Slider from "./Components/Home/Slider/Slider";
import Slider2 from "./Components/Home/Slider2/Slider2";
import Values from "./Components/Values/Values";
import './App.css';
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Topback from "./Components/Tobback/Topback"
import Consultants from "./Components/Consultants/Consultants";
import Contact from "./Components/Contact/Contact";
import Training from "./Components/Training/Training";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/training" element={<Training />} />
      </Routes>
     
    </>
  );
};

export default App;