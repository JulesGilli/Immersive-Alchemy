import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from './OurWork';
const ProjectDetail = () => {
  const {
    projectId
  } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = projects.find(p => p.id === parseInt(projectId));
    setProject(foundProject);
    setLoading(false);
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [projectId]);
  const nextImage = () => {
    setActiveImageIndex(prev => (prev + 1) % project.gallery.length);
  };
  const prevImage = () => {
    setActiveImageIndex(prev => (prev - 1 + project.gallery.length) % project.gallery.length);
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
  if (!project) {
    return <main className="pt-24 pb-16 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/work">
              <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
                Back to Projects
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
          <Link to="/work" className="inline-flex items-center text-gray-400 hover:text-[#F4A622] transition-colors duration-300">
            <ArrowLeftIcon size={16} className="mr-2" />
            <span>Back to Projects</span>
          </Link>
        </div>
        {/* Project header */}
        <div className="mb-12">
          <span className="text-[#F4A622] text-sm font-medium uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, index) => <span key={index} className="bg-[#F4A622]/10 text-[#F4A622] px-3 py-1 rounded-sm text-sm">
                {tech}
              </span>)}
          </div>
          <p className="text-xl text-gray-300 max-w-4xl">
            {project.description}
          </p>
        </div>
        {/* Project gallery */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-sm border border-[#F4A622]/20 aspect-video mb-4">
            <img src={project.gallery[activeImageIndex]} alt={`${project.title} - Image ${activeImageIndex + 1}`} className="w-full h-full object-cover" />
            {/* Navigation arrows */}
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300" aria-label="Previous image">
              <ChevronLeftIcon size={24} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300" aria-label="Next image">
              <ChevronRightIcon size={24} />
            </button>
            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-sm">
              {activeImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {project.gallery.map((image, index) => <button key={index} onClick={() => setActiveImageIndex(index)} className={`flex-shrink-0 w-20 h-20 border-2 transition-all duration-300 ${activeImageIndex === index ? 'border-[#F4A622]' : 'border-transparent hover:border-[#F4A622]/50'}`}>
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>)}
          </div>
        </div>
        {/* Project details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">
                The Challenge
              </h2>
              <p className="text-gray-300">{project.challenge}</p>
            </div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Our Solution
              </h2>
              <p className="text-gray-300">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => <li key={index} className="flex items-start">
                    <span className="text-[#F4A622] mr-2">•</span>
                    <span className="text-gray-300">{result}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-black border border-[#F4A622]/20 p-6 rounded-sm">
              <h3 className="text-xl font-bold mb-4 text-white">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                    Client
                  </h4>
                  <p className="text-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                    Category
                  </h4>
                  <p className="text-white">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => <span key={index} className="bg-[#F4A622]/10 text-[#F4A622] text-xs px-2 py-1 rounded-sm">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#F4A622]/20">
                <blockquote className="italic text-gray-300 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <p className="text-white font-medium">
                    {project.testimonial.author}
                  </p>
                  <p className="text-gray-400">{project.testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA section */}
        <div className="bg-black/70 border border-[#F4A622]/20 p-8 rounded-sm text-center">
          <h2 className="text-2xl font-bold mb-3">
            Interested in a similar solution?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Let's discuss how we can create a custom immersive experience
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#contact">
              <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm font-medium transition-all duration-300">
                Start a Conversation
              </button>
            </a>
            <Link to="/work">
              <button className="border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-6 py-3 rounded-sm font-medium transition-all duration-300">
                Explore More Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>;
};
export default ProjectDetail;