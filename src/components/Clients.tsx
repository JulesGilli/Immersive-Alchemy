import React from 'react';
const ClientLogo = ({
  name
}) => {
  return <div className="h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center px-6 transition-all duration-300 hover:border-[#F4A622]/50 hover:bg-black">
      <span className="text-gray-400 font-medium">{name}</span>
    </div>;
};
const TestimonialCard = ({
  quote,
  author,
  company
}) => {
  return <div className="bg-black border border-[#F4A622]/20 p-6 transition-all duration-300 hover:border-[#F4A622]">
      <div className="mb-4">
        <svg className="h-8 w-8 text-[#F4A622]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-[#F4A622]">{company}</p>
      </div>
    </div>;
};
const Clients = () => {
  const clients = [{
    name: 'TechVision'
  }, {
    name: 'Innovate Corp'
  }, {
    name: 'FutureWorks'
  }, {
    name: 'Digital Nexus'
  }, {
    name: 'Quantum Media'
  }, {
    name: 'Apex Solutions'
  }];
  const testimonials = [{
    quote: 'IMA transformed our product launch with an immersive experience that captivated our audience and increased engagement by 200%.',
    author: 'Sarah Johnson',
    company: 'TechVision, CMO'
  }, {
    quote: 'The team at Immersive Alchemy delivered beyond our expectations. Their innovative approach to gamification revolutionized our training program.',
    author: 'Michael Chen',
    company: 'Innovate Corp, Director'
  }, {
    quote: 'Working with IMA was seamless from concept to execution. Their attention to detail and technical expertise is unmatched in the industry.',
    author: 'Alex Rodriguez',
    company: 'Digital Nexus, CEO'
  }];
  return <section id="clients" className="py-20 bg-black relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#F4A622]/5 to-transparent opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#F4A622]">Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by innovative companies to deliver cutting-edge immersive
            experiences
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {clients.map((client, index) => <ClientLogo key={index} name={client.name} />)}
        </div>
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">What Our Clients Say</h3>
          <div className="w-16 h-1 bg-[#F4A622] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} company={testimonial.company} />)}
        </div>
      </div>
    </section>;
};
export default Clients;