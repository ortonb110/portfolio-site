import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import { Home, Contact, Portfolio, Error } from "./Pages/index";
import { useState, useEffect } from "react";
import Preloading from "./Components/Preloader";
import { AnimatePresence } from "framer-motion";

import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll(); // Smooth scrolling effect
  const [isLoading, setIsLoading] = useState(true);
  //const { currentPath, dispatch } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);
  }, []);

  

  return (
    <>
    <AnimatePresence>{isLoading && <Preloading />}</AnimatePresence>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
