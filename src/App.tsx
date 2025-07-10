import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>;
}