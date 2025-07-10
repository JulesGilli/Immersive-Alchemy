import React, { useState, Fragment, memo } from 'react';
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Form steps components
const ProjectTypeStep = ({
  formData,
  updateFormData,
  nextStep
}) => {
  const projectTypes = [{
    id: 'interactive',
    title: 'Interactive Experience',
    description: 'Engaging digital solutions with immersive interactivity',
    icon: '🖥️'
  }, {
    id: 'realtime3d',
    title: 'Real-time 3D',
    description: 'Dynamic 3D environments and visualizations',
    icon: '🧊'
  }, {
    id: 'gamification',
    title: 'Gamification',
    description: 'Game mechanics to enhance user engagement',
    icon: '🎮'
  }, {
    id: 'vrar',
    title: 'VR/AR Development',
    description: 'Immersive virtual and augmented reality experiences',
    icon: '👓'
  }, {
    id: 'digital',
    title: 'Digital Solutions',
    description: 'Custom software to solve complex business challenges',
    icon: '💻'
  }, {
    id: 'audio',
    title: 'Immersive Audio',
    description: 'Spatial audio solutions for enhanced engagement',
    icon: '🔊'
  }, {
    id: 'mobile',
    title: 'Mobile Experiences',
    description: 'Innovative applications for mobile devices',
    icon: '📱'
  }, {
    id: 'installation',
    title: 'Interactive Installations',
    description: 'Physical-digital installations for memorable experiences',
    icon: '🏢'
  }];
  const handleSelect = typeId => {
    updateFormData({
      projectType: typeId
    });
    nextStep();
  };
  return <div>
      <h2 className="text-2xl font-bold mb-6">
        What type of project are you interested in?
      </h2>
      <p className="text-gray-300 mb-8">
        Select the category that best describes your project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map(type => <button key={type.id} className={`text-left p-6 border rounded-sm transition-all duration-300 flex items-start ${formData.projectType === type.id ? 'border-[#F4A622] bg-[#F4A622]/10' : 'border-[#F4A622]/20 hover:border-[#F4A622]/60 bg-black'}`} onClick={() => handleSelect(type.id)}>
            <span className="text-3xl mr-4">{type.icon}</span>
            <div>
              <h3 className="font-bold text-white">{type.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{type.description}</p>
            </div>
          </button>)}
      </div>
    </div>;
};
const ProjectDetailsStep = ({
  formData,
  updateFormData,
  nextStep,
  prevStep
}) => {
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    updateFormData({
      [name]: value
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectName?.trim()) {
      newErrors.projectName = 'Project name is required';
    }
    if (!formData.projectDescription?.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };
  return <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Tell us about your project</h2>
      <p className="text-gray-300 mb-8">
        Provide some details about what you're looking to create.
      </p>
      <div className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="projectName">
            Project Name
          </label>
          <input type="text" id="projectName" name="projectName" value={formData.projectName || ''} onChange={handleChange} className={`w-full bg-black border ${errors.projectName ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder="E.g., Virtual Product Showcase" />
          {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="projectDescription">
            Project Description
          </label>
          <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription || ''} onChange={handleChange} rows={5} className={`w-full bg-black border ${errors.projectDescription ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder="Describe your project, goals, and any specific requirements..." />
          {errors.projectDescription && <p className="text-red-500 text-sm mt-1">
              {errors.projectDescription}
            </p>}
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="targetAudience">
            Target Audience (optional)
          </label>
          <input type="text" id="targetAudience" name="targetAudience" value={formData.targetAudience || ''} onChange={handleChange} className="w-full bg-black border border-[#F4A622]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Who is this project intended for?" />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={prevStep} className="flex items-center text-white hover:text-[#F4A622] transition-colors">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back
        </button>
        <button type="submit" className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300 flex items-center">
          Continue
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </form>;
};
const BudgetTimelineStep = ({
  formData,
  updateFormData,
  nextStep,
  prevStep
}) => {
  const budgetRanges = [{
    id: 'under10k',
    label: 'Under $10,000'
  }, {
    id: '10k-25k',
    label: '$10,000 - $25,000'
  }, {
    id: '25k-50k',
    label: '$25,000 - $50,000'
  }, {
    id: '50k-100k',
    label: '$50,000 - $100,000'
  }, {
    id: 'over100k',
    label: 'Over $100,000'
  }, {
    id: 'undecided',
    label: 'Not sure yet'
  }];
  const timelineOptions = [{
    id: 'under1month',
    label: 'Less than 1 month'
  }, {
    id: '1-3months',
    label: '1-3 months'
  }, {
    id: '3-6months',
    label: '3-6 months'
  }, {
    id: '6-12months',
    label: '6-12 months'
  }, {
    id: 'over12months',
    label: 'Over 12 months'
  }, {
    id: 'flexible',
    label: 'Flexible'
  }];
  return <div>
      <h2 className="text-2xl font-bold mb-6">Budget & Timeline</h2>
      <p className="text-gray-300 mb-8">
        Help us understand your project constraints.
      </p>
      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-medium mb-4">
            What's your budget range?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {budgetRanges.map(range => <button key={range.id} type="button" className={`text-left p-4 border rounded-sm transition-all duration-300 ${formData.budgetRange === range.id ? 'border-[#F4A622] bg-[#F4A622]/10' : 'border-[#F4A622]/20 hover:border-[#F4A622]/60 bg-black'}`} onClick={() => updateFormData({
            budgetRange: range.id
          })}>
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border ${formData.budgetRange === range.id ? 'border-[#F4A622] bg-[#F4A622]' : 'border-white'} mr-3 flex items-center justify-center`}>
                    {formData.budgetRange === range.id && <CheckIcon size={12} className="text-black" />}
                  </div>
                  <span>{range.label}</span>
                </div>
              </button>)}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">What's your timeline?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {timelineOptions.map(option => <button key={option.id} type="button" className={`text-left p-4 border rounded-sm transition-all duration-300 ${formData.timeline === option.id ? 'border-[#F4A622] bg-[#F4A622]/10' : 'border-[#F4A622]/20 hover:border-[#F4A622]/60 bg-black'}`} onClick={() => updateFormData({
            timeline: option.id
          })}>
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border ${formData.timeline === option.id ? 'border-[#F4A622] bg-[#F4A622]' : 'border-white'} mr-3 flex items-center justify-center`}>
                    {formData.timeline === option.id && <CheckIcon size={12} className="text-black" />}
                  </div>
                  <span>{option.label}</span>
                </div>
              </button>)}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={prevStep} className="flex items-center text-white hover:text-[#F4A622] transition-colors">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back
        </button>
        <button type="button" onClick={nextStep} className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300 flex items-center">
          Continue
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>;
};
const ContactInfoStep = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  handleSubmit
}) => {
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    updateFormData({
      [name]: value
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company?.trim()) {
      newErrors.company = 'Company name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const onSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit();
    }
  };
  return <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
      <p className="text-gray-300 mb-8">
        Tell us how to reach you about your project.
      </p>
      <div className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="name">
            Your Name
          </label>
          <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleChange} className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder="Full Name" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleChange} className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder="your@email.com" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="company">
            Company
          </label>
          <input type="text" id="company" name="company" value={formData.company || ''} onChange={handleChange} className={`w-full bg-black border ${errors.company ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder="Company Name" />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="phone">
            Phone Number (optional)
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone || ''} onChange={handleChange} className="w-full bg-black border border-[#F4A622]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="+1 (123) 456-7890" />
        </div>
        <div>
          <label className="block text-white font-medium mb-2" htmlFor="additionalInfo">
            Additional Information (optional)
          </label>
          <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo || ''} onChange={handleChange} rows={3} className="w-full bg-black border border-[#F4A622]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Anything else you'd like us to know..." />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={prevStep} className="flex items-center text-white hover:text-[#F4A622] transition-colors">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back
        </button>
        <button type="submit" className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300 flex items-center">
          Submit Project
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </form>;
};
const SuccessStep = () => {
  return <div className="text-center py-10">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F4A622]/20 mb-6">
        <CheckIcon size={40} className="text-[#F4A622]" />
      </div>
      <h2 className="text-3xl font-bold mb-4">
        Project Submitted Successfully!
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Thank you for sharing your project details with us. Our team will review
        your submission and get back to you within 1-2 business days to discuss
        next steps.
      </p>
      <div className="space-y-4">
        <Link to="/">
          <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
            Return to Home
          </button>
        </Link>
        <div>
          <p className="text-gray-400 mt-6">
            Have questions? Contact us directly at{' '}
            <a href="mailto:contact@immersiveagency.com" className="text-[#F4A622] hover:underline">
              contact@immersiveagency.com
            </a>
          </p>
        </div>
      </div>
    </div>;
};
const StepIndicator = ({
  currentStep,
  totalSteps
}) => {
  return <div className="mb-10">
      <div className="flex items-center justify-between">
        {Array.from({
        length: totalSteps
      }).map((_, index) => <Fragment key={index}>
            {index > 0 && <div className={`flex-1 h-1 ${index <= currentStep ? 'bg-[#F4A622]' : 'bg-[#F4A622]/20'}`} />}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index < currentStep ? 'bg-[#F4A622] text-black' : index === currentStep ? 'border-2 border-[#F4A622] text-[#F4A622]' : 'border border-[#F4A622]/30 text-gray-400'}`}>
              {index < currentStep ? <CheckIcon size={16} /> : <span>{index + 1}</span>}
            </div>
          </Fragment>)}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-400">Project Type</span>
        <span className="text-sm text-gray-400">Project Details</span>
        <span className="text-sm text-gray-400">Budget & Timeline</span>
        <span className="text-sm text-gray-400">Contact Info</span>
      </div>
    </div>;
};
const StartProject = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const updateFormData = newData => {
    setFormData(prevData => ({
      ...prevData,
      ...newData
    }));
  };
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setStep(prevStep => Math.max(0, prevStep - 1));
    window.scrollTo(0, 0);
  };
  const handleSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    nextStep();
  };
  const renderStep = () => {
    switch (step) {
      case 0:
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 1:
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <BudgetTimelineStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <ContactInfoStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit} />;
      case 4:
        return <SuccessStep />;
      default:
        return null;
    }
  };
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {step < 4 && <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Start Your <span className="text-[#F4A622]">Project</span>
              </h1>
              <p className="text-gray-300">
                Tell us about your project and we'll help bring your vision to
                life.
              </p>
            </div>
            <StepIndicator currentStep={step} totalSteps={4} />
          </>}
        <div className="bg-black/60 border border-[#F4A622]/20 rounded-sm p-8">
          {renderStep()}
        </div>
      </div>
    </main>;
};
export default StartProject;