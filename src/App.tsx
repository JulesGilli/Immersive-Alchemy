import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import CardNav from './components/CardNav';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import AllServices from './pages/AllServices';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><main><Hero /><Services /></main></Page>} />
        <Route path="/services" element={<Page><AllServices /></Page>} />
        <Route path="/services/:serviceId" element={<Page><ServiceDetail /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

export function App() {
  const { t } = useTranslation();
  const navItems = [
    {
      label: t('nav.explore'),
      bgColor: '#1b1206',
      textColor: '#fff',
      links: [
        { label: t('nav.home'), href: '/', ariaLabel: t('nav.home') },
        { label: t('nav.allServices'), href: '/services', ariaLabel: t('nav.allServices') },
        { label: t('nav.contact'), href: '/contact', ariaLabel: t('nav.contact') }
      ]
    },
    {
      label: t('nav.services'),
      bgColor: '#241a0a',
      textColor: '#fff',
      links: [
        { label: t('services.interactive.title'), href: '/services/1', ariaLabel: t('services.interactive.title') },
        { label: t('services.realtime3d.title'), href: '/services/2', ariaLabel: t('services.realtime3d.title') },
        { label: t('services.gamification.title'), href: '/services/3', ariaLabel: t('services.gamification.title') },
        { label: t('services.digital.title'), href: '/services/4', ariaLabel: t('services.digital.title') }
      ]
    },
    {
      label: t('nav.contact'),
      bgColor: '#2a1e0c',
      textColor: '#fff',
      links: [
        { label: t('nav.sendMessage'), href: '/contact', ariaLabel: t('nav.sendMessage') },
        { label: t('nav.email'), href: 'mailto:contact@immersivealchemy.com', ariaLabel: t('nav.email') }
      ]
    }
  ];
  return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <div className="w-full min-h-screen bg-black text-white font-sans">
        <CardNav logo={`${import.meta.env.BASE_URL}ima-logo.svg`} logoAlt="Immersive Alchemy logo" logoText="Immersive Alchemy" items={navItems} baseColor="rgba(20, 18, 16, 0.55)" menuColor="#F4A622" cta={<LanguageSwitcher />} />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>;
}
