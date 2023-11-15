import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import {Home, Contact, Portfolio, Error} from './Pages/index';

import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll(); // Smooth scrolling effect

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
