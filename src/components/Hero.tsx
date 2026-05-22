import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { motion, LayoutGroup } from 'motion/react';
import SpotlightButton from './SpotlightButton';
import Plasma from './Plasma';
import RotatingText from './RotatingText';
const Hero = () => {
  return <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_35%,rgba(244,166,34,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 z-0">
        <Plasma color="#F4A622" speed={0.6} direction="forward" scale={1.1} opacity={0.8} mouseInteractive={true} />
      </div>
      {/* Contrast overlay to keep text readable and blend into the next section */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/10 to-black"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center -translate-y-8 sm:-translate-y-12">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <LayoutGroup>
              <motion.span layout="position" transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                We build
              </motion.span>
              <RotatingText
                texts={['Immersive', 'Interactive', 'Real-time 3D', 'Gamified']}
                mainClassName="px-3 md:px-4 bg-[#F4A622] text-black overflow-hidden py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 md:pb-2"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
              <motion.span layout="position" transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                experiences
              </motion.span>
            </LayoutGroup>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Transforming ideas into immersive digital experiences through
            interactive technology and real-time 3D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SpotlightButton to="/services" variant="primary" size="lg">
              Discover Our Services
              <ChevronRightIcon size={20} className="ml-2" />
            </SpotlightButton>
            <SpotlightButton to="/contact" variant="secondary" size="lg">
              Get in Touch
            </SpotlightButton>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;