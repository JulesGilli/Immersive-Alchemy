import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { services } from './AllServices';
const FAQ = ({
  question,
  answer,
  isOpen,
  toggleOpen
}) => {
  return <div className="border-b border-[#F4A622]/20 last:border-b-0">
      <button className="flex justify-between items-center w-full py-4 text-left" onClick={toggleOpen}>
        <h3 className="font-medium text-white">{question}</h3>
        {isOpen ? <ChevronUpIcon size={20} className="text-[#F4A622]" /> : <ChevronDownIcon size={20} className="text-[#F4A622]" />}
      </button>
      {isOpen && <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>}
    </div>;
};
const CaseStudyCard = ({
  caseStudy
}) => {
  return <Link to={caseStudy.link} className="block group">
      <div className="bg-black border border-[#F4A622]/20 rounded-sm p-6 transition-all duration-300 group-hover:border-[#F4A622] group-hover:bg-[#F4A622]/5">
        <h3 className="text-xl font-medium mb-2 group-hover:text-[#F4A622] transition-colors duration-300">
          {caseStudy.title}
        </h3>
        <p className="text-gray-400 mb-3">{caseStudy.description}</p>
        <span className="text-[#F4A622] text-sm font-medium flex items-center">
          View Case Study{' '}
          <ArrowLeftIcon size={14} className="ml-2 rotate-180" />
        </span>
      </div>
    </Link>;
};
const ServiceDetail = () => {
  const {
    serviceId
  } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFAQs, setOpenFAQs] = useState({});
  useEffect(() => {
    // In a real app, this would be an API call
    const foundService = services.find(s => s.id === parseInt(serviceId));
    setService(foundService);
    setLoading(false);
    // Initialize FAQ state
    if (foundService && foundService.faq) {
      const initialFAQState = {};
      foundService.faq.forEach((_, index) => {
        initialFAQState[index] = index === 0; // Open the first FAQ by default
      });
      setOpenFAQs(initialFAQState);
    }
    // Scroll to top when service changes
    window.scrollTo(0, 0);
  }, [serviceId]);
  const toggleFAQ = index => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
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
            <Link to="/services">
              <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
                Back to Services
              </button>
            </Link>
          </div>
        </div>
      </main>;
  }
  return <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
        {/* Hexagon background elements */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({
          length: 8
        }).map((_, i) => <div key={i} className="absolute border border-[#F4A622]/20" style={{
          width: `${Math.random() * 150 + 50}px`,
          height: `${Math.random() * 150 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: 'rotate(45deg)'
        }}></div>)}
        </div>
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
          <div className="bg-[#F4A622]/10 p-6 rounded-sm">{service.icon}</div>
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
                    <div className="bg-[#F4A622]/10 text-[#F4A622] flex items-center justify-center w-8 h-8 rounded-sm mr-4 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>)}
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => <div key={index} className="flex items-start bg-black/50 border border-[#F4A622]/10 p-4 rounded-sm">
                    <CheckIcon size={20} className="text-[#F4A622] mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>)}
              </div>
            </div>
            {service.caseStudies && service.caseStudies.length > 0 && <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Case Studies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.caseStudies.map((caseStudy, index) => <CaseStudyCard key={index} caseStudy={caseStudy} />)}
                </div>
              </div>}
            {service.faq && service.faq.length > 0 && <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <div className="border-t border-[#F4A622]/20">
                  {service.faq.map((faq, index) => <FAQ key={index} question={faq.question} answer={faq.answer} isOpen={openFAQs[index]} toggleOpen={() => toggleFAQ(index)} />)}
                </div>
              </div>}
          </div>
          <div>
            <div className="bg-black border border-[#F4A622]/20 p-6 rounded-sm sticky top-24">
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
                <a href="/#contact">
                  <button className="w-full bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
                    Request a Consultation
                  </button>
                </a>
                <Link to="/services">
                  <button className="w-full bg-transparent border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-6 py-3 rounded-sm font-medium transition-all duration-300">
                    Explore Other Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Related services CTA */}
        <div className="bg-black/70 border border-[#F4A622]/20 p-8 rounded-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ready to transform your digital experience?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Start a Conversation</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how our {service.title.toLowerCase()} services can
                help you achieve your business goals.
              </p>
              <a href="/#contact">
                <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
                  Contact Us
                </button>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Explore Our Work</h3>
              <p className="text-gray-300 mb-6">
                See examples of our {service.title.toLowerCase()} projects and
                the results we've achieved for our clients.
              </p>
              <Link to="/work">
                <button className="border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-6 py-3 rounded-sm font-medium transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>;
};
export default ServiceDetail;