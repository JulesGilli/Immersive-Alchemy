import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#F4A622]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/image.png" alt="IMA Logo" className="h-10 w-10" />
              </Link>
            </div>
            <div className="hidden md:block ml-4">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-[#F4A622] transition-colors duration-300 text-sm uppercase tracking-wider">
                  Home
                </Link>
                <Link to="/services" className="text-gray-300 hover:text-[#F4A622] transition-colors duration-300 text-sm uppercase tracking-wider">
                  Services
                </Link>
                <Link to="/work" className="text-gray-300 hover:text-[#F4A622] transition-colors duration-300 text-sm uppercase tracking-wider">
                  Our Work
                </Link>
                <a href="/#process" className="text-gray-300 hover:text-[#F4A622] transition-colors duration-300 text-sm uppercase tracking-wider">
                  Process
                </a>
                <a href="/#contact" className="text-gray-300 hover:text-[#F4A622] transition-colors duration-300 text-sm uppercase tracking-wider">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/start-project">
              <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-4 py-2 rounded-sm text-sm uppercase tracking-wider font-medium transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-b border-[#F4A622]/20">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-[#F4A622] text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-[#F4A622] text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/work" className="block px-3 py-2 text-gray-300 hover:text-[#F4A622] text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
              Our Work
            </Link>
            <a href="/#process" className="block px-3 py-2 text-gray-300 hover:text-[#F4A622] text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
              Process
            </a>
            <a href="/#contact" className="block px-3 py-2 text-gray-300 hover:text-[#F4A622] text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Link to="/start-project" onClick={() => setIsMenuOpen(false)}>
              <button className="mt-2 w-full bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-4 py-2 rounded-sm text-sm uppercase tracking-wider font-medium transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;