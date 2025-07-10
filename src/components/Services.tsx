import React from 'react';
import { BrainCircuitIcon, GlobeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServiceCard = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-black border border-[#F4A622]/20 p-6 transition-all duration-300 hover:border-[#F4A622] hover:translate-y-[-5px] group">
      <div className="bg-[#F4A622]/10 p-4 rounded-sm inline-block mb-4 group-hover:bg-[#F4A622]/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>;
};
const Services = () => {
  const services = [{
    icon: <div size={24} className="text-[#F4A622]" />,
    title: 'Interactive Experiences',
    description: 'Engaging digital solutions that captivate audiences through immersive interactivity and responsive design.'
  }, {
    icon: <div size={24} className="text-[#F4A622]" />,
    title: 'Real-time 3D',
    description: 'Dynamic 3D environments and visualizations rendered in real-time for seamless user experiences.'
  }, {
    icon: <BrainCircuitIcon size={24} className="text-[#F4A622]" />,
    title: 'Gamification',
    description: 'Strategic implementation of game mechanics to enhance user engagement and drive meaningful interactions.'
  }, {
    icon: <GlobeIcon size={24} className="text-[#F4A622]" />,
    title: 'Digital Solutions',
    description: 'Cutting-edge digital products tailored to solve complex business challenges with innovative technology.'
  }];
  return <section id="services" className="py-20 relative bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#F4A622]/5 to-transparent opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#F4A622]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into immersive digital experiences through our
            specialized services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
        </div>
        <div className="mt-16 text-center">
          <Link to="/services">
            <button className="border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-6 py-3 rounded-sm text-lg font-medium transition-all duration-300">
              Discover All Services
            </button>
          </Link>
        </div>
      </div>
    </section>;
};
export default Services;