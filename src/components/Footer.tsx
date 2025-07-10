import React from 'react';
const Footer = () => {
  return <footer className="bg-black border-t border-[#F4A622]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/image.png" alt="IMA Logo" className="h-10 w-10 mr-3" />
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
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Interactive Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Real-time 3D
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Gamification
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
                  Digital Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#F4A622]/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Immersive Alchemy. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;