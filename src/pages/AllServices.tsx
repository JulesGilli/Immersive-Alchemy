import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuitIcon, GlobeIcon, HeadsetIcon, SmartphoneIcon, TabletIcon } from 'lucide-react';
export const services = [{
  id: 1,
  icon: <div size={36} className="text-[#F4A622]" />,
  title: 'Interactive Experiences',
  description: 'We create engaging digital solutions that captivate audiences through immersive interactivity and responsive design. Our interactive experiences are tailored to meet specific business objectives while delivering memorable user journeys.',
  features: ['User-centered design approach', 'Cross-platform compatibility', 'Engaging interaction patterns', 'Performance optimization', 'Accessibility compliance'],
  longDescription: 'Our interactive experiences blend cutting-edge technology with thoughtful design to create digital solutions that captivate and engage users. We focus on creating intuitive, responsive interfaces that guide users through meaningful interactions while achieving specific business objectives. Each experience is crafted to be memorable, accessible, and optimized for performance across all platforms.',
  process: ['Discovery & Strategy: Understanding your goals, audience, and requirements', 'Conceptualization: Developing interactive concepts and user journeys', 'Prototyping: Creating functional prototypes for testing and refinement', 'Development: Building the experience with performance and scalability in mind', 'Testing & Optimization: Ensuring smooth operation and optimal user experience', 'Launch & Support: Deploying the solution and providing ongoing maintenance'],
  benefits: ['Increased user engagement and time spent with your brand', 'Higher conversion rates through intuitive user journeys', 'Memorable brand experiences that differentiate you from competitors', 'Accessible solutions that reach the widest possible audience', 'Scalable platforms that grow with your business needs'],
  caseStudies: [{
    title: 'Virtual Product Showcase',
    description: 'An immersive 3D product configurator allowing customers to customize and explore products in real-time.',
    link: '/work/1'
  }, {
    title: 'AR Product Catalog',
    description: 'Augmented reality catalog allowing customers to visualize products in their own space before purchasing.',
    link: '/work/5'
  }],
  faq: [{
    question: 'How long does it typically take to develop an interactive experience?',
    answer: 'Development timelines vary based on complexity, but most projects range from 8-16 weeks from concept to launch.'
  }, {
    question: 'Do you handle both design and development?',
    answer: 'Yes, our team includes both designers and developers who work collaboratively to ensure a seamless process from concept to implementation.'
  }, {
    question: 'How do you ensure the experience works across different devices?',
    answer: 'We employ responsive design principles and rigorous cross-device testing throughout development to ensure consistent performance.'
  }]
}, {
  id: 2,
  icon: <div size={36} className="text-[#F4A622]" />,
  title: 'Real-time 3D',
  description: 'Our team specializes in creating dynamic 3D environments and visualizations rendered in real-time for seamless user experiences. We leverage cutting-edge technologies to bring digital spaces to life with unprecedented realism and performance.',
  features: ['High-fidelity 3D modeling', 'Real-time lighting and physics', 'Optimized for web and mobile', 'Interactive object manipulation', 'Environment customization'],
  longDescription: 'Our real-time 3D solutions harness the power of cutting-edge rendering technologies to create immersive, interactive environments that respond instantly to user input. We specialize in creating high-fidelity 3D visualizations that maintain performance across web and mobile platforms, enabling users to explore and interact with digital spaces in ways previously impossible without specialized hardware.',
  process: ['Asset Planning: Defining the 3D assets, interactions, and technical requirements', '3D Modeling & Texturing: Creating optimized 3D models with appropriate detail levels', 'Environment Setup: Building the 3D space with lighting, physics, and interactive elements', 'Performance Optimization: Ensuring smooth rendering across target platforms', 'Integration: Connecting the 3D experience with existing systems and platforms', 'Testing & Refinement: Polishing the experience for maximum impact and usability'],
  benefits: ['Immersive product visualization that drives purchasing decisions', 'Interactive training environments that improve knowledge retention', 'Virtual spaces that eliminate geographical limitations', 'Engaging storytelling through explorable 3D narratives', 'Reduced costs compared to physical prototyping and visualization'],
  caseStudies: [{
    title: 'Architectural Visualization',
    description: 'Interactive architectural visualization allowing clients to explore and customize building designs before construction.',
    link: '/work/3'
  }],
  faq: [{
    question: 'What platforms can your real-time 3D experiences run on?',
    answer: 'Our solutions are designed to run on modern web browsers, mobile devices, and when appropriate, VR/AR headsets.'
  }, {
    question: 'How do you balance visual fidelity with performance?',
    answer: 'We employ level-of-detail techniques, optimized asset creation, and performance-focused development practices to maintain the right balance for each project.'
  }, {
    question: 'Can you integrate real-time 3D with our existing website or app?',
    answer: 'Yes, we specialize in creating solutions that integrate seamlessly with existing digital platforms and content management systems.'
  }]
}, {
  id: 3,
  icon: <BrainCircuitIcon size={36} className="text-[#F4A622]" />,
  title: 'Gamification',
  description: 'We implement strategic game mechanics to enhance user engagement and drive meaningful interactions. Our gamification solutions transform routine activities into compelling experiences that motivate users and achieve business goals.',
  features: ['Reward and progression systems', 'Competitive and collaborative mechanics', 'Performance analytics and insights', 'Behavioral psychology integration', 'Adaptive difficulty scaling'],
  longDescription: 'Our gamification services transform ordinary digital experiences into engaging, motivating interactions by applying game design principles to non-game contexts. We strategically implement reward systems, competitive elements, and progression mechanics that tap into intrinsic and extrinsic motivation, driving user behavior while collecting valuable data on engagement and performance.',
  process: ['Behavioral Analysis: Understanding user motivations and business objectives', 'Mechanic Design: Crafting appropriate game elements and reward structures', 'Progression Mapping: Designing user journeys with increasing challenges and rewards', 'Analytics Integration: Implementing measurement systems to track engagement', 'Visual Design: Creating appealing interfaces that communicate progress and achievement', 'Testing & Iteration: Refining mechanics based on user behavior and feedback'],
  benefits: ['Increased user engagement and retention rates', 'Higher completion rates for training and educational content', 'Improved data collection through voluntary user participation', 'Enhanced brand loyalty through positive reinforcement', 'Valuable insights into user behavior and preferences'],
  caseStudies: [{
    title: 'Gamified Training Platform',
    description: 'A comprehensive training solution that uses game mechanics to improve employee engagement and knowledge retention.',
    link: '/work/2'
  }],
  faq: [{
    question: 'Is gamification appropriate for all types of businesses?',
    answer: 'While gamification can benefit many contexts, we carefully assess each situation to determine if and how game mechanics should be applied to achieve your specific goals.'
  }, {
    question: 'How do you measure the success of gamification?',
    answer: 'We establish clear KPIs at the outset and implement comprehensive analytics to track engagement, completion rates, and other relevant metrics throughout the experience.'
  }, {
    question: 'Can gamification be added to our existing digital products?',
    answer: 'Yes, we can often integrate gamification elements into existing websites, apps, and platforms without requiring a complete rebuild.'
  }]
}, {
  id: 4,
  icon: <GlobeIcon size={36} className="text-[#F4A622]" />,
  title: 'Digital Solutions',
  description: 'We develop cutting-edge digital products tailored to solve complex business challenges with innovative technology. Our solutions combine technical excellence with creative vision to deliver transformative digital experiences.',
  features: ['Custom software development', 'System integration', 'Cloud-based solutions', 'Data visualization', 'Digital transformation consulting'],
  longDescription: 'Our digital solutions practice delivers custom software and platforms that address complex business challenges through innovative technology. We combine strategic thinking with technical expertise to create scalable, secure, and user-friendly digital products that drive efficiency, engagement, and growth. From enterprise applications to customer-facing platforms, we build solutions that transform how organizations operate and connect with their audiences.',
  process: ['Requirements Analysis: Deeply understanding the problem space and business needs', 'Solution Architecture: Designing the technical foundation and system components', 'Agile Development: Building the solution in iterative cycles with regular feedback', 'Integration: Connecting with existing systems and data sources', 'Quality Assurance: Rigorous testing across functionality, security, and performance', 'Deployment & Support: Launching the solution and providing ongoing maintenance'],
  benefits: ['Streamlined operations through automation and workflow optimization', 'Enhanced decision-making with better data access and visualization', 'Improved customer experiences through intuitive digital touchpoints', 'Scalable infrastructure that grows with your business', 'Competitive advantage through innovative digital capabilities'],
  caseStudies: [{
    title: 'Interactive Data Visualization',
    description: 'Dynamic data visualization platform that transforms complex datasets into intuitive, interactive experiences.',
    link: '/work/4'
  }, {
    title: 'Virtual Event Platform',
    description: 'Custom virtual event platform with interactive networking, 3D exhibition halls, and real-time engagement features.',
    link: '/work/6'
  }],
  faq: [{
    question: 'How do you approach security in your digital solutions?',
    answer: 'Security is integrated throughout our development process, with regular code reviews, penetration testing, and adherence to industry best practices for data protection.'
  }, {
    question: 'Can you work with our existing technology stack?',
    answer: 'Yes, we have experience integrating with diverse technologies and can adapt our approach to work with your current systems and preferences.'
  }, {
    question: 'What support do you provide after launch?',
    answer: 'We offer flexible support options ranging from basic maintenance to comprehensive managed services, ensuring your solution continues to perform optimally.'
  }]
}, {
  id: 5,
  icon: <div size={36} className="text-[#F4A622]" />,
  title: 'VR/AR Development',
  description: 'We create immersive virtual and augmented reality experiences that transform how users interact with digital content. Our VR/AR solutions range from enterprise training to consumer entertainment applications.',
  features: ['Cross-platform VR/AR development', 'Spatial computing', 'Immersive storytelling', '360° content creation', 'Hardware integration'],
  longDescription: 'Our VR/AR development services create immersive experiences that blend digital content with the physical world or transport users to entirely virtual environments. We leverage spatial computing, advanced interaction design, and optimized 3D content to deliver solutions that range from practical business applications to engaging consumer experiences, all while maintaining performance across a variety of hardware platforms.',
  process: ['Experience Design: Crafting the core interaction model and spatial UX', 'Content Creation: Developing optimized 3D assets and environments', 'Interaction Programming: Building natural and intuitive user controls', 'Platform Optimization: Ensuring performance across target VR/AR devices', 'User Testing: Validating comfort, usability, and effectiveness', 'Deployment & Distribution: Preparing the experience for your target platforms'],
  benefits: ['Immersive training that improves knowledge retention and skill development', 'Engaging marketing experiences that create memorable brand impressions', 'Virtual product demonstrations that drive purchase decisions', 'Spatial visualization of complex data and concepts', 'Remote collaboration capabilities that transcend physical limitations'],
  caseStudies: [{
    title: 'AR Product Catalog',
    description: 'Augmented reality catalog allowing customers to visualize products in their own space before purchasing.',
    link: '/work/5'
  }],
  faq: [{
    question: 'What VR/AR platforms do you develop for?',
    answer: 'We develop for a wide range of platforms including WebAR, mobile AR (iOS/Android), and major VR headsets, selecting the appropriate technology based on your goals and audience.'
  }, {
    question: 'Do users need special equipment to use your VR/AR experiences?',
    answer: "It depends on the solution. We can create AR experiences that work on standard smartphones, or VR experiences that require headsets. We'll help determine the right approach for your needs."
  }, {
    question: 'How do you ensure VR experiences are comfortable for users?',
    answer: 'We follow best practices for VR comfort, including optimized frame rates, proper locomotion techniques, and thoughtful spatial design to minimize the risk of discomfort.'
  }]
}, {
  id: 6,
  icon: <HeadsetIcon size={36} className="text-[#F4A622]" />,
  title: 'Immersive Audio',
  description: 'Our spatial audio solutions create rich, three-dimensional soundscapes that enhance immersion and user engagement. We design audio experiences that complement visual elements and create emotional connections.',
  features: ['3D spatial audio design', 'Interactive sound systems', 'Adaptive audio environments', 'Voice user interfaces', 'Custom sound design'],
  longDescription: 'Our immersive audio services create rich, three-dimensional soundscapes that enhance user engagement and emotional impact across digital experiences. We specialize in spatial audio that responds dynamically to user actions and environment changes, voice user interfaces that enable natural interaction, and custom sound design that reinforces brand identity and supports narrative objectives.',
  process: ['Audio Strategy: Defining the role of sound in the overall experience', 'Sound Design: Creating custom audio elements and spatial arrangements', 'Interaction Mapping: Connecting audio responses to user actions and events', 'Technical Implementation: Integrating audio systems with the broader experience', 'Mixing & Optimization: Balancing audio elements and optimizing for delivery platforms', 'Testing & Refinement: Ensuring audio enhances rather than distracts from the experience'],
  benefits: ['Enhanced immersion in virtual environments and experiences', 'Improved user orientation and navigation through audio cues', 'Stronger emotional engagement with content and narratives', 'Accessibility improvements for vision-impaired users', 'Brand differentiation through distinctive audio identity'],
  caseStudies: [{
    title: 'Virtual Event Platform',
    description: 'Custom virtual event platform with spatial audio for networking areas and presentations.',
    link: '/work/6'
  }],
  faq: [{
    question: 'How does spatial audio differ from standard stereo sound?',
    answer: 'Spatial audio creates a three-dimensional sound field where audio elements are positioned in space, responding to user movement and providing directional cues that standard stereo cannot achieve.'
  }, {
    question: 'Can immersive audio be experienced on standard devices?',
    answer: 'Yes, while specialized hardware can enhance the experience, we design immersive audio that delivers significant benefits even through standard headphones or speakers.'
  }, {
    question: 'How do you balance audio with other elements of an experience?',
    answer: 'We take a holistic approach to experience design, ensuring audio complements rather than competes with visual and interactive elements, with careful attention to mix levels and user control options.'
  }]
}, {
  id: 7,
  icon: <SmartphoneIcon size={36} className="text-[#F4A622]" />,
  title: 'Mobile Experiences',
  description: 'We develop innovative mobile applications that leverage device capabilities to deliver unique and engaging experiences. Our mobile solutions combine intuitive interfaces with powerful functionality.',
  features: ['Native and cross-platform development', 'Location-based experiences', 'Device sensor integration', 'Offline functionality', 'Push notification strategies'],
  longDescription: 'Our mobile experience services create applications that leverage the unique capabilities of smartphones and tablets to deliver engaging, useful interactions. We develop native and cross-platform solutions that utilize device sensors, location awareness, and offline capabilities to create experiences that are both powerful and intuitive, driving engagement wherever your users are.',
  process: ['User Research: Understanding mobile user behaviors and expectations', 'Experience Design: Creating intuitive interfaces optimized for touch interaction', 'Technical Architecture: Designing efficient, secure mobile application structures', 'Development: Building the application with appropriate native or cross-platform technologies', 'Device Testing: Ensuring compatibility across the target device ecosystem', 'Deployment & Analytics: Launching to app stores and implementing usage tracking'],
  benefits: ['Engaging experiences accessible to users wherever they are', 'Utilization of device capabilities for unique functionality', 'Direct communication channel with users through notifications', "Brand presence on users' most personal devices", 'Ability to function in low or no connectivity situations'],
  caseStudies: [{
    title: 'AR Product Catalog',
    description: 'Mobile application allowing customers to visualize products in their own space using augmented reality.',
    link: '/work/5'
  }],
  faq: [{
    question: 'Do you develop native apps, hybrid apps, or both?',
    answer: 'We develop both native and hybrid applications, selecting the approach based on your specific requirements, performance needs, and budget considerations.'
  }, {
    question: 'How do you handle the app store submission process?',
    answer: 'We manage the entire submission process for both Apple App Store and Google Play Store, ensuring your application meets all guidelines and requirements for approval.'
  }, {
    question: 'Can you integrate with our existing backend systems?',
    answer: 'Yes, we have extensive experience integrating mobile applications with various backend systems, APIs, and data sources to create cohesive digital ecosystems.'
  }]
}, {
  id: 8,
  icon: <TabletIcon size={36} className="text-[#F4A622]" />,
  title: 'Interactive Installations',
  description: 'We design and develop physical-digital installations that create memorable experiences in physical spaces. Our installations combine hardware, software, and creative design to engage audiences in innovative ways.',
  features: ['Touch and gesture interfaces', 'Projection mapping', 'Sensor integration', 'Multi-user experiences', 'Durable hardware solutions'],
  longDescription: 'Our interactive installation services create compelling physical-digital experiences that engage audiences in public spaces, retail environments, museums, and events. We combine innovative hardware solutions with custom software to create installations that respond to touch, gesture, movement, and other interactions, delivering memorable experiences that communicate your message in impactful ways.',
  process: ['Concept Development: Creating installation ideas that align with your space and objectives', 'Technical Feasibility: Evaluating hardware requirements and environmental factors', 'Content Creation: Developing the visual and interactive elements of the installation', 'Hardware Integration: Selecting and configuring the physical components', 'Software Development: Building the custom applications that drive the experience', 'On-site Implementation: Installing, calibrating, and testing in the final location'],
  benefits: ['Memorable physical experiences that create lasting impressions', 'Innovative brand activations that generate social sharing', 'Engaging educational experiences for museums and public spaces', 'Data collection opportunities through interactive engagement', 'Differentiation in retail and exhibition environments'],
  caseStudies: [{
    title: 'Interactive Data Visualization',
    description: 'Large-scale interactive installation allowing visitors to explore complex data through physical interaction.',
    link: '/work/4'
  }],
  faq: [{
    question: 'How durable are your interactive installations?',
    answer: 'We design installations with durability in mind, selecting commercial-grade hardware and creating software with fail-safes to ensure reliable operation in public environments.'
  }, {
    question: 'Can installations be updated with new content?',
    answer: 'Yes, we design our installations with content management systems that allow for updates and refreshes without requiring significant technical knowledge.'
  }, {
    question: 'What spaces are suitable for interactive installations?',
    answer: 'We can create installations for various environments, from controlled indoor spaces to semi-outdoor locations, adapting our approach to account for lighting, power, network, and environmental considerations.'
  }]
}];
const ServiceCard = ({
  service
}) => {
  return <div className="bg-black border border-[#F4A622]/20 p-8 rounded-sm transition-all duration-300 hover:border-[#F4A622] group">
      <div className="bg-[#F4A622]/10 p-5 rounded-sm inline-block mb-6 group-hover:bg-[#F4A622]/20 transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-[#F4A622] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      <h4 className="text-lg font-medium mb-3 text-white">Key Features</h4>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => <li key={index} className="flex items-start">
            <span className="text-[#F4A622] mr-2">•</span>
            <span className="text-gray-400">{feature}</span>
          </li>)}
      </ul>
      <div className="flex flex-col space-y-3">
        <Link to={`/services/${service.id}`}>
          <button className="w-full bg-transparent border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-6 py-3 rounded-sm font-medium transition-all duration-300">
            Learn More
          </button>
        </Link>
        <a href="/#contact">
          <button className="w-full bg-[#F4A622]/10 text-[#F4A622] hover:bg-[#F4A622]/20 px-6 py-3 rounded-sm font-medium transition-all duration-300">
            Inquire About This Service
          </button>
        </a>
      </div>
    </div>;
};
const AllServices = () => {
  return <main className="pt-16 bg-black min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#F4A622]/5 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F4A622]/5 to-transparent opacity-30"></div>
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
              Our <span className="text-[#F4A622]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of immersive technology solutions
              to transform your digital presence.
            </p>
          </div>
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(service => <ServiceCard key={service.id} service={service} />)}
          </div>
          {/* Contact CTA */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-[#F4A622]/5 blur-xl rounded-lg"></div>
            <div className="relative bg-black/80 border border-white/10 p-8 md:p-12 rounded-sm">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-3">
                    Ready to transform your{' '}
                    <span className="text-[#F4A622]">digital presence?</span>
                  </h3>
                  <p className="text-gray-300">
                    Let's discuss how our immersive solutions can help you
                    achieve your goals.
                  </p>
                </div>
                <a href="/#contact">
                  <button className="inline-block bg-[#F4A622] text-black px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-[#F4A622]/90 transition-colors duration-300 whitespace-nowrap">
                    Start a Conversation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default AllServices;