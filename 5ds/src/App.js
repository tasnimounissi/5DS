import './App.css';
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