import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import MissionVision from './components/MissionVision';
import Facilities from './components/Facilities';
import PaintShop from './components/PaintShop';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <MissionVision />
      <Facilities />
      <PaintShop />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;