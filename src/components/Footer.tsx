import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="relative z-20 bg-black border-t border-[#F4A622]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/ima-logo.svg" alt="Immersive Alchemy logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold">Immersive Alchemy</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming digital experiences through interactive technology,
              real-time 3D, and innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/1" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Interactive Experiences
                </Link>
              </li>
              <li>
                <Link to="/services/2" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Real-time 3D
                </Link>
              </li>
              <li>
                <Link to="/services/3" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Gamification
                </Link>
              </li>
              <li>
                <Link to="/services/4" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#F4A622]/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Immersive Alchemy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
