import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/navbar';
import Home from './Components/Home/home';
import Projects from './Components/project/Projects';
import About from './Components/About/about';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/footer';
import Service from './Components/Service/Service';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sathish-profile" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
