import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurWork from './pages/OurWork';
import AllServices from './pages/AllServices';
import ProjectDetail from './pages/ProjectDetail';
import ServiceDetail from './pages/ServiceDetail';
import StartProject from './pages/StartProject';
export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen bg-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<main>
                <Hero />
                <Services />
                <Process />
                <Clients />
                <Contact />
              </main>} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/start-project" element={<StartProject />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}