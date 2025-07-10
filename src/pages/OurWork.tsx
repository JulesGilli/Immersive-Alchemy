import React, { useState } from 'react';
import { ExternalLinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Project data - in a real app, this would come from an API or CMS
export const projects = [{
  id: 1,
  title: 'Virtual Product Showcase',
  category: 'Interactive Experience',
  description: 'An immersive 3D product configurator allowing customers to customize and explore products in real-time.',
  image: 'https://placehold.co/600x400/111/F4A622?text=Virtual+Product',
  technologies: ['WebGL', 'Three.js', 'React'],
  client: 'TechVision',
  challenge: 'TechVision needed a way to showcase their complex product line that allowed customers to visualize customizations before purchase, reducing returns and increasing satisfaction.',
  solution: 'We developed a WebGL-powered 3D configurator that renders photorealistic models in real-time, allowing users to customize colors, materials, and components with instant visual feedback.',
  results: ['43% increase in online conversion rate', '27% reduction in product returns', 'Average session duration increased by 4.5 minutes'],
  testimonial: {
    quote: 'The virtual product showcase transformed our online sales process. Customers now spend more time engaging with our products and have much clearer expectations when they purchase.',
    author: 'Sarah Chen',
    title: 'Digital Marketing Director, TechVision'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=Product+Showcase+1', 'https://placehold.co/800x600/111/F4A622?text=Product+Showcase+2', 'https://placehold.co/800x600/111/F4A622?text=Product+Showcase+3']
}, {
  id: 2,
  title: 'Gamified Training Platform',
  category: 'Gamification',
  description: 'A comprehensive training solution that uses game mechanics to improve employee engagement and knowledge retention.',
  image: 'https://placehold.co/600x400/111/F4A622?text=Gamified+Training',
  technologies: ['Unity', 'WebGL', 'Custom Analytics'],
  client: 'Innovate Corp',
  challenge: 'Innovate Corp struggled with low completion rates and poor knowledge retention in their corporate training programs, leading to skill gaps and compliance issues.',
  solution: 'We created a gamified training platform that transformed boring training content into interactive challenges, complete with points, badges, leaderboards, and narrative elements.',
  results: ['94% training completion rate (up from 52%)', 'Knowledge retention improved by 68% based on assessment scores', 'Employee satisfaction with training increased from 2.3/5 to 4.7/5'],
  testimonial: {
    quote: 'The gamified approach completely transformed our training culture. What was once viewed as a chore is now something employees actively engage with and even enjoy.',
    author: 'Marcus Johnson',
    title: 'Chief Learning Officer, Innovate Corp'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=Training+Platform+1', 'https://placehold.co/800x600/111/F4A622?text=Training+Platform+2', 'https://placehold.co/800x600/111/F4A622?text=Training+Platform+3']
}, {
  id: 3,
  title: 'Architectural Visualization',
  category: 'Real-time 3D',
  description: 'Interactive architectural visualization allowing clients to explore and customize building designs before construction.',
  image: 'https://placehold.co/600x400/111/F4A622?text=Architectural+Viz',
  technologies: ['Unreal Engine', 'WebGL', 'VR'],
  client: 'FutureWorks',
  challenge: 'FutureWorks needed to help clients better understand architectural designs before construction, reducing costly mid-project changes and improving client satisfaction.',
  solution: "We developed a real-time 3D visualization platform that allows clients to virtually walk through buildings, change materials and layouts, and experience spaces in VR before they're built.",
  results: ['68% reduction in client-requested design changes after construction began', 'Sales cycle shortened by 35% due to faster client decision-making', 'Won 3 major projects against competitors specifically due to the visualization capabilities'],
  testimonial: {
    quote: "This visualization platform has revolutionized how we communicate with clients. They now truly understand what they're getting before we break ground, leading to smoother projects and happier clients.",
    author: 'Alexandra Rivera',
    title: 'Principal Architect, FutureWorks'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=Architectural+Viz+1', 'https://placehold.co/800x600/111/F4A622?text=Architectural+Viz+2', 'https://placehold.co/800x600/111/F4A622?text=Architectural+Viz+3']
}, {
  id: 4,
  title: 'Interactive Data Visualization',
  category: 'Digital Solutions',
  description: 'Dynamic data visualization platform that transforms complex datasets into intuitive, interactive experiences.',
  image: 'https://placehold.co/600x400/111/F4A622?text=Data+Visualization',
  technologies: ['D3.js', 'React', 'WebGL'],
  client: 'Digital Nexus',
  challenge: 'Digital Nexus needed to make complex financial data accessible to non-technical stakeholders, enabling better decision-making across the organization.',
  solution: 'We created an interactive data visualization platform that transforms complex datasets into intuitive visual experiences, with real-time filtering, drill-down capabilities, and customizable dashboards.',
  results: ['Decision-making time reduced by 47% according to internal metrics', 'Data accessibility expanded to 350+ employees (previously limited to data team)', 'Executive team reports 82% higher confidence in data-driven decisions'],
  testimonial: {
    quote: 'The interactive visualizations have democratized our data. Teams that previously relied on analysts to interpret information can now explore and understand it themselves, dramatically improving our decision velocity.',
    author: 'Thomas Wright',
    title: 'Chief Data Officer, Digital Nexus'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=Data+Viz+1', 'https://placehold.co/800x600/111/F4A622?text=Data+Viz+2', 'https://placehold.co/800x600/111/F4A622?text=Data+Viz+3']
}, {
  id: 5,
  title: 'AR Product Catalog',
  category: 'Interactive Experience',
  description: 'Augmented reality catalog allowing customers to visualize products in their own space before purchasing.',
  image: 'https://placehold.co/600x400/111/F4A622?text=AR+Catalog',
  technologies: ['ARKit', 'ARCore', 'React Native'],
  client: 'Quantum Media',
  challenge: "Quantum Media's furniture retail clients struggled with high return rates because customers couldn't accurately visualize how products would look in their homes.",
  solution: 'We developed an AR product catalog that allows customers to place virtual furniture in their actual living spaces using their smartphone camera, with accurate sizing and realistic materials.',
  results: ['Return rates decreased by 38% across participating retailers', 'Conversion rate increased by 56% for products with AR features', 'Average order value increased by 28% due to higher customer confidence'],
  testimonial: {
    quote: 'The AR catalog has transformed the furniture buying experience. Customers can now shop with confidence, knowing exactly how pieces will look and fit in their homes before they buy.',
    author: 'Elena Patel',
    title: 'Innovation Director, Quantum Media'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=AR+Catalog+1', 'https://placehold.co/800x600/111/F4A622?text=AR+Catalog+2', 'https://placehold.co/800x600/111/F4A622?text=AR+Catalog+3']
}, {
  id: 6,
  title: 'Virtual Event Platform',
  category: 'Digital Solutions',
  description: 'Custom virtual event platform with interactive networking, 3D exhibition halls, and real-time engagement features.',
  image: 'https://placehold.co/600x400/111/F4A622?text=Virtual+Event',
  technologies: ['WebGL', 'WebRTC', 'React'],
  client: 'Apex Solutions',
  challenge: 'When physical events were canceled, Apex Solutions needed a virtual alternative that would maintain the networking and engagement value of their flagship industry conference.',
  solution: 'We created a custom virtual event platform featuring 3D exhibition halls, spatial audio networking areas, interactive product showcases, and seamless integration of live and pre-recorded content.',
  results: ['Attendance increased by 134% compared to previous physical events', "87% of attendees rated the experience as 'better than other virtual events'", 'Exhibitor satisfaction score of 4.8/5, with 92% committing to the next event'],
  testimonial: {
    quote: "This wasn't just another Zoom meeting with a fancy interface. The platform delivered a truly immersive experience that captured the essence of our physical events while leveraging the unique advantages of digital.",
    author: 'Jonathan Lee',
    title: 'Events Director, Apex Solutions'
  },
  gallery: ['https://placehold.co/800x600/111/F4A622?text=Virtual+Event+1', 'https://placehold.co/800x600/111/F4A622?text=Virtual+Event+2', 'https://placehold.co/800x600/111/F4A622?text=Virtual+Event+3']
}];
const categories = ['All', 'Interactive Experience', 'Real-time 3D', 'Gamification', 'Digital Solutions'];
const ProjectCard = ({
  project
}) => {
  return <div className="bg-black border border-[#F4A622]/20 rounded-sm overflow-hidden group hover:border-[#F4A622] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-[#F4A622] text-sm font-medium">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {project.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => <span key={index} className="bg-[#F4A622]/10 text-[#F4A622] text-xs px-2 py-1 rounded-sm">
              {tech}
            </span>)}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Client: {project.client}
          </span>
          <Link to={`/work/${project.id}`} className="flex items-center text-[#F4A622] hover:text-[#F4A622]/80 transition-colors duration-300 text-sm font-medium">
            View Project <ExternalLinkIcon size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>;
};
const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  return <main className="pt-16 bg-black min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
          {/* Hexagon background elements */}
          <div className="absolute inset-0 opacity-20">
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#F4A622]">Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of immersive experiences, interactive
              solutions, and digital innovations.
            </p>
          </div>
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => <button key={index} className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-[#F4A622] text-black' : 'bg-black border border-[#F4A622]/30 text-gray-300 hover:border-[#F4A622] hover:text-white'}`} onClick={() => setActiveCategory(category)}>
                {category}
              </button>)}
          </div>
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to create something amazing?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how we can transform your ideas into immersive
              digital experiences.
            </p>
            <a href="/#contact">
              <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-8 py-3 rounded-sm text-lg font-medium transition-all duration-300">
                Start a Project
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>;
};
export default OurWork;