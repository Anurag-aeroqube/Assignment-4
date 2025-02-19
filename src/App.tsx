
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Villas from "./Components/Villas";
import Services from "./Components/Services";
// import Partners from "./Components/Partners";
import Contact from "./Components/Contact";
import Partners from './Components/Partners'
import VillasDetails from "./Components/VillasDetails";




const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">{children}</div>

      {/* Footer */}
      <footer className="bg-[#373f41] text-white text-center p-4 text-sm">
        © Villacrest | All rights reserved
      </footer>
    </div>
  );
};


function App() {
  return (
    <Router>
      <Nav />
      <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/villasdetails" element={<VillasDetails/>} />
      </Routes>
      </Layout>
     
    </Router>
  );
}

export default App;
