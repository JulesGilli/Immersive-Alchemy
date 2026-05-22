import React from 'react';
import { MonitorIcon, BoxIcon, Gamepad2Icon, GlobeIcon } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import SpotlightButton from '../components/SpotlightButton';
export const services = [{
  id: 1,
  icon: <MonitorIcon size={36} className="text-[#F4A622]" />,
  title: 'Interactive Experiences',
  description: 'We create engaging digital solutions that captivate audiences through immersive interactivity and responsive design. Our interactive experiences are tailored to meet specific business objectives while delivering memorable user journeys.',
  features: ['User-centered design approach', 'Cross-platform compatibility', 'Engaging interaction patterns', 'Performance optimization', 'Accessibility compliance'],
  longDescription: 'Our interactive experiences blend cutting-edge technology with thoughtful design to create digital solutions that captivate and engage users. We focus on creating intuitive, responsive interfaces that guide users through meaningful interactions while achieving specific business objectives. Each experience is crafted to be memorable, accessible, and optimized for performance across all platforms.',
  process: ['Discovery & Strategy: Understanding your goals, audience, and requirements', 'Conceptualization: Developing interactive concepts and user journeys', 'Prototyping: Creating functional prototypes for testing and refinement', 'Development: Building the experience with performance and scalability in mind', 'Testing & Optimization: Ensuring smooth operation and optimal user experience', 'Launch & Support: Deploying the solution and providing ongoing maintenance'],
  benefits: ['Increased user engagement and time spent with your brand', 'Higher conversion rates through intuitive user journeys', 'Memorable brand experiences that differentiate you from competitors', 'Accessible solutions that reach the widest possible audience', 'Scalable platforms that grow with your business needs']
}, {
  id: 2,
  icon: <BoxIcon size={36} className="text-[#F4A622]" />,
  title: 'Real-time 3D',
  description: 'We create dynamic 3D environments and visualizations rendered in real-time for seamless user experiences. We leverage cutting-edge technologies to bring digital spaces to life with unprecedented realism and performance.',
  features: ['High-fidelity 3D modeling', 'Real-time lighting and physics', 'Optimized for web and mobile', 'Interactive object manipulation', 'Environment customization'],
  longDescription: 'Our real-time 3D solutions harness the power of cutting-edge rendering technologies to create immersive, interactive environments that respond instantly to user input. We specialize in creating high-fidelity 3D visualizations that maintain performance across web and mobile platforms, enabling users to explore and interact with digital spaces in ways previously impossible without specialized hardware.',
  process: ['Asset Planning: Defining the 3D assets, interactions, and technical requirements', '3D Modeling & Texturing: Creating optimized 3D models with appropriate detail levels', 'Environment Setup: Building the 3D space with lighting, physics, and interactive elements', 'Performance Optimization: Ensuring smooth rendering across target platforms', 'Integration: Connecting the 3D experience with existing systems and platforms', 'Testing & Refinement: Polishing the experience for maximum impact and usability'],
  benefits: ['Immersive product visualization that drives purchasing decisions', 'Interactive training environments that improve knowledge retention', 'Virtual spaces that eliminate geographical limitations', 'Engaging storytelling through explorable 3D narratives', 'Reduced costs compared to physical prototyping and visualization']
}, {
  id: 3,
  icon: <Gamepad2Icon size={36} className="text-[#F4A622]" />,
  title: 'Gamification',
  description: 'We implement strategic game mechanics to enhance user engagement and drive meaningful interactions. Our gamification solutions transform routine activities into compelling experiences that motivate users and achieve business goals.',
  features: ['Reward and progression systems', 'Competitive and collaborative mechanics', 'Performance analytics and insights', 'Behavioral psychology integration', 'Adaptive difficulty scaling'],
  longDescription: 'Our gamification services transform ordinary digital experiences into engaging, motivating interactions by applying game design principles to non-game contexts. We strategically implement reward systems, competitive elements, and progression mechanics that tap into intrinsic and extrinsic motivation, driving user behavior while collecting valuable data on engagement and performance.',
  process: ['Behavioral Analysis: Understanding user motivations and business objectives', 'Mechanic Design: Crafting appropriate game elements and reward structures', 'Progression Mapping: Designing user journeys with increasing challenges and rewards', 'Analytics Integration: Implementing measurement systems to track engagement', 'Visual Design: Creating appealing interfaces that communicate progress and achievement', 'Testing & Iteration: Refining mechanics based on user behavior and feedback'],
  benefits: ['Increased user engagement and retention rates', 'Higher completion rates for training and educational content', 'Improved data collection through voluntary user participation', 'Enhanced brand loyalty through positive reinforcement', 'Valuable insights into user behavior and preferences']
}, {
  id: 4,
  icon: <GlobeIcon size={36} className="text-[#F4A622]" />,
  title: 'Digital Solutions',
  description: 'We develop cutting-edge digital products tailored to solve complex business challenges with innovative technology. Our solutions combine technical excellence with creative vision to deliver transformative digital experiences.',
  features: ['Custom software development', 'System integration', 'Cloud-based solutions', 'Data visualization', 'Digital transformation consulting'],
  longDescription: 'Our digital solutions practice delivers custom software and platforms that address complex business challenges through innovative technology. We combine strategic thinking with technical expertise to create scalable, secure, and user-friendly digital products that drive efficiency, engagement, and growth. From enterprise applications to customer-facing platforms, we build solutions that transform how organizations operate and connect with their audiences.',
  process: ['Requirements Analysis: Deeply understanding the problem space and business needs', 'Solution Architecture: Designing the technical foundation and system components', 'Agile Development: Building the solution in iterative cycles with regular feedback', 'Integration: Connecting with existing systems and data sources', 'Quality Assurance: Rigorous testing across functionality, security, and performance', 'Deployment & Support: Launching the solution and providing ongoing maintenance'],
  benefits: ['Streamlined operations through automation and workflow optimization', 'Enhanced decision-making with better data access and visualization', 'Improved customer experiences through intuitive digital touchpoints', 'Scalable infrastructure that grows with your business', 'Competitive advantage through innovative digital capabilities']
}];
const ServiceCard = ({
  service
}) => {
  return <GlowCard borderRadius={20} className="flex flex-col h-full p-8">
      <div className="bg-[#F4A622]/10 p-5 rounded-lg inline-block w-fit mb-6">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      <h4 className="text-lg font-medium mb-3 text-white">Key Features</h4>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => <li key={index} className="flex items-start">
            <span className="text-[#F4A622] mr-2">•</span>
            <span className="text-gray-400">{feature}</span>
          </li>)}
      </ul>
      <div className="mt-auto">
        <SpotlightButton to={`/services/${service.id}`} variant="secondary" fullWidth>
          Learn More
        </SpotlightButton>
      </div>
    </GlowCard>;
};
const AllServices = () => {
  return <main className="pt-16 bg-black min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#F4A622]/5 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F4A622]/5 to-transparent opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#F4A622]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A focused set of immersive technology services to bring your
              ideas to life.
            </p>
          </div>
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(service => <ServiceCard key={service.id} service={service} />)}
          </div>
          {/* Contact CTA */}
          <div className="mt-20">
            <GlowCard borderRadius={20} className="p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-3">
                    Have a project in{' '}
                    <span className="text-[#F4A622]">mind?</span>
                  </h3>
                  <p className="text-gray-300">
                    Let's discuss how these services can help you achieve your
                    goals.
                  </p>
                </div>
                <SpotlightButton to="/contact" variant="primary" size="lg" className="whitespace-nowrap">
                  Start a Conversation
                </SpotlightButton>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>
    </main>;
};
export default AllServices;
