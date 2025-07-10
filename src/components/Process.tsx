import React from 'react';
import { BeakerIcon, LightbulbIcon, PuzzleIcon, RocketIcon } from 'lucide-react';
const ProcessStep = ({
  number,
  icon,
  title,
  description
}) => {
  return <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-black border-2 border-[#F4A622] h-14 w-14 rounded-full flex items-center justify-center z-10">
          {icon}
        </div>
        <div className="ml-6">
          <span className="text-[#F4A622] text-sm font-medium uppercase tracking-wider">
            Step {number}
          </span>
          <h3 className="text-xl font-bold mt-1 mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      {number < 4 && <div className="absolute left-7 top-14 h-full w-0 border-l-2 border-dashed border-[#F4A622]/30"></div>}
    </div>;
};
const Process = () => {
  const steps = [{
    icon: <BeakerIcon size={24} className="text-[#F4A622]" />,
    title: 'Experiment',
    description: 'We analyze your needs and experiment with different approaches to find the perfect solution for your unique challenges.'
  }, {
    icon: <LightbulbIcon size={24} className="text-[#F4A622]" />,
    title: 'Conceptualize',
    description: 'Our team develops comprehensive concepts and prototypes that align with your brand vision and objectives.'
  }, {
    icon: <PuzzleIcon size={24} className="text-[#F4A622]" />,
    title: 'Create',
    description: 'We bring concepts to life through meticulous development, design, and testing processes to ensure quality.'
  }, {
    icon: <RocketIcon size={24} className="text-[#F4A622]" />,
    title: 'Launch',
    description: 'Your immersive experience is deployed with ongoing support to ensure optimal performance and user engagement.'
  }];
  return <section id="process" className="py-20 bg-gradient-to-b from-black to-black/95 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F4A622]/5 opacity-20 transform skew-y-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#F4A622]">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our methodical approach transforms your vision into reality through
            a proven workflow
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-16">
            {steps.slice(0, 2).map((step, index) => <ProcessStep key={index} number={index + 1} icon={step.icon} title={step.title} description={step.description} />)}
          </div>
          <div className="space-y-16">
            {steps.slice(2, 4).map((step, index) => <ProcessStep key={index} number={index + 3} icon={step.icon} title={step.title} description={step.description} />)}
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm text-lg font-medium transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>;
};
export default Process;