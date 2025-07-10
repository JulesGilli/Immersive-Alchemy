import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
const Hero = () => {
  return <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F4A622]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
        {/* Hexagon grid background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({
          length: 10
        }).map((_, i) => <div key={i} className="absolute border border-[#F4A622]/20" style={{
          width: `${Math.random() * 150 + 50}px`,
          height: `${Math.random() * 150 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: 'rotate(45deg)'
        }}></div>)}
        </div>
        {/* Animated bubbles */}
        {Array.from({
        length: 8
      }).map((_, i) => <div key={i} className="absolute rounded-full bg-[#F4A622] opacity-70" style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        bottom: '0%',
        left: `${Math.random() * 100}%`,
        animation: `rise ${Math.random() * 10 + 15}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}></div>)}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="flex flex-col items-center">
          <img src="/image.png" alt="IMA Logo" className="w-32 h-32 mb-8 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-[#F4A622]">Immersive</span> Alchemy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
            Transforming digital experiences through interactive technology,
            real-time 3D, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-8 py-3 rounded-sm text-lg font-medium transition-all duration-300 flex items-center justify-center">
              Explore Our Work
              <ChevronRightIcon size={20} className="ml-2" />
            </button>
            <button className="border border-[#F4A622] text-[#F4A622] hover:bg-[#F4A622]/10 px-8 py-3 rounded-sm text-lg font-medium transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>;
};
export default Hero;