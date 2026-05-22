import React from 'react';
import { MonitorIcon, BoxIcon, Gamepad2Icon, GlobeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CardSwap, { Card } from './CardSwap';
import SpotlightButton from './SpotlightButton';
const Services = () => {
  const { t } = useTranslation();
  const services = [{
    key: 'interactive',
    icon: <MonitorIcon size={32} className="text-[#F4A622]" />
  }, {
    key: 'realtime3d',
    icon: <BoxIcon size={32} className="text-[#F4A622]" />
  }, {
    key: 'gamification',
    icon: <Gamepad2Icon size={32} className="text-[#F4A622]" />
  }, {
    key: 'digital',
    icon: <GlobeIcon size={32} className="text-[#F4A622]" />
  }];
  return <section id="services" className="relative bg-black overflow-x-clip pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#F4A622]/5 to-transparent opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: heading + CTA */}
          <div className="pb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F4A622]">
              {t('home.servicesHeading')}
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
              {t('home.servicesText')}
            </p>
            <SpotlightButton to="/services" variant="secondary" size="lg">
              {t('home.discoverAll')}
            </SpotlightButton>
          </div>
          {/* Right: animated card showcase — pushed down so the footer crops the bottom of the cards */}
          <div className="relative h-[260px] lg:translate-y-[140px]">
            <CardSwap width={460} height={520} cardDistance={56} verticalDistance={68} delay={3500} skewAmount={5} pauseOnHover={false}>
              {services.map((service, index) => <Card key={index} customClass="!border-[#F4A622]/40 p-8 flex flex-col justify-start gap-4">
                  <div className="bg-[#F4A622]/10 p-4 rounded-lg inline-block w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-400">{t(`services.${service.key}.description`)}</p>
                </Card>)}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;
