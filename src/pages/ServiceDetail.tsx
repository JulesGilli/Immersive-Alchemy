import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { services } from './AllServices';
import GlowCard from '../components/GlowCard';
import SpotlightButton from '../components/SpotlightButton';
const ServiceDetail = () => {
  const {
    serviceId
  } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const foundService = services.find(s => s.id === parseInt(serviceId));
    setService(foundService);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [serviceId]);
  if (loading) {
    return <main className="pt-24 pb-16 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="w-16 h-16 border-4 border-[#F4A622]/20 border-t-[#F4A622] rounded-full animate-spin"></div>
          </div>
        </div>
      </main>;
  }
  if (!service) {
    return <main className="pt-24 pb-16 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-400 mb-8">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <SpotlightButton to="/services" variant="primary">
              Back to Services
            </SpotlightButton>
          </div>
        </div>
      </main>;
  }
  return <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
            <ArrowLeftIcon size={16} className="mr-2" />
            <span>Back to Services</span>
          </Link>
        </div>
        {/* Service header */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="bg-[#F4A622]/10 p-6 rounded-lg">{service.icon}</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl">
              {service.description}
            </p>
          </div>
        </div>
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 mb-6">{service.longDescription}</p>
              <h3 className="text-xl font-bold mb-4 text-white">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => <div key={index} className="flex items-start">
                    <div className="bg-[#F4A622]/10 text-[#F4A622] flex items-center justify-center w-8 h-8 rounded-lg mr-4 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>)}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => <div key={index} className="flex items-start bg-black/50 border border-[#F4A622]/10 p-4 rounded-lg">
                    <CheckIcon size={20} className="text-[#F4A622] mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>)}
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-24">
              <GlowCard borderRadius={16} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Key Features
                </h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => <li key={index} className="flex items-start">
                      <CheckIcon size={20} className="text-[#F4A622] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                </ul>
                <div className="space-y-4">
                  <SpotlightButton to="/contact" variant="primary" fullWidth>
                    Request a Consultation
                  </SpotlightButton>
                  <SpotlightButton to="/services" variant="secondary" fullWidth>
                    Explore Other Services
                  </SpotlightButton>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
        {/* Contact CTA */}
        <GlowCard borderRadius={20} className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about how our {service.title.toLowerCase()} services can
            help you achieve your goals.
          </p>
          <SpotlightButton to="/contact" variant="primary" size="lg">
            Contact Us
          </SpotlightButton>
        </GlowCard>
      </div>
    </main>;
};
export default ServiceDetail;
