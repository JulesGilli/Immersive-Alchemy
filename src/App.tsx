import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardNav from './components/CardNav';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import AllServices from './pages/AllServices';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
const navItems = [{
  label: 'Explore',
  bgColor: '#1b1206',
  textColor: '#fff',
  links: [{
    label: 'Home',
    href: '/',
    ariaLabel: 'Home'
  }, {
    label: 'All Services',
    href: '/services',
    ariaLabel: 'All Services'
  }, {
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact'
  }]
}, {
  label: 'Services',
  bgColor: '#241a0a',
  textColor: '#fff',
  links: [{
    label: 'Interactive Experiences',
    href: '/services/1',
    ariaLabel: 'Interactive Experiences'
  }, {
    label: 'Real-time 3D',
    href: '/services/2',
    ariaLabel: 'Real-time 3D'
  }, {
    label: 'Gamification',
    href: '/services/3',
    ariaLabel: 'Gamification'
  }, {
    label: 'Digital Solutions',
    href: '/services/4',
    ariaLabel: 'Digital Solutions'
  }]
}, {
  label: 'Contact',
  bgColor: '#2a1e0c',
  textColor: '#fff',
  links: [{
    label: 'Send a message',
    href: '/contact',
    ariaLabel: 'Contact form'
  }, {
    label: 'Email',
    href: 'mailto:contact@immersivealchemy.com',
    ariaLabel: 'Email us'
  }]
}];
export function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <div className="w-full min-h-screen bg-black text-white font-sans">
        <CardNav logo={`${import.meta.env.BASE_URL}ima-logo.svg`} logoAlt="Immersive Alchemy logo" logoText="Immersive Alchemy" items={navItems} baseColor="rgba(20, 18, 16, 0.55)" menuColor="#F4A622" buttonBgColor="#F4A622" buttonTextColor="#000000" />
        <Routes>
          <Route path="/" element={<main>
                <Hero />
                <Services />
              </main>} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}
