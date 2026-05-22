import React from 'react';
import { MonitorIcon, BoxIcon, Gamepad2Icon, GlobeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GlowCard from '../components/GlowCard';
import SpotlightButton from '../components/SpotlightButton';
export const services = [{
  id: 1,
  key: 'interactive',
  icon: <MonitorIcon size={36} className="text-[#F4A622]" />
}, {
  id: 2,
  key: 'realtime3d',
  icon: <BoxIcon size={36} className="text-[#F4A622]" />
}, {
  id: 3,
  key: 'gamification',
  icon: <Gamepad2Icon size={36} className="text-[#F4A622]" />
}, {
  id: 4,
  key: 'digital',
  icon: <GlobeIcon size={36} className="text-[#F4A622]" />
}];
const ServiceCard = ({
  service
}) => {
  const { t } = useTranslation();
  const features = t(`services.${service.key}.features`, { returnObjects: true }) as string[];
  return <GlowCard borderRadius={20} className="flex flex-col h-full p-8">
      <div className="bg-[#F4A622]/10 p-5 rounded-lg inline-block w-fit mb-6">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{t(`services.${service.key}.title`)}</h3>
      <p className="text-gray-300 mb-6">{t(`services.${service.key}.description`)}</p>
      <h4 className="text-lg font-medium mb-3 text-white">{t('servicesPage.keyFeatures')}</h4>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <span className="text-[#F4A622] mr-2">•</span>
            <span className="text-gray-400">{feature}</span>
          </li>)}
      </ul>
      <div className="mt-auto">
        <SpotlightButton to={`/services/${service.id}`} variant="secondary" fullWidth>
          {t('servicesPage.learnMore')}
        </SpotlightButton>
      </div>
    </GlowCard>;
};
const AllServices = () => {
  const { t } = useTranslation();
  return <main className="pt-16 bg-black min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#F4A622]/5 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F4A622]/5 to-transparent opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F4A622]">
              {t('servicesPage.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('servicesPage.subtitle')}
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
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {t('servicesPage.ctaHeading')}
                  </h3>
                  <p className="text-gray-300">
                    {t('servicesPage.ctaText')}
                  </p>
                </div>
                <SpotlightButton to="/contact" variant="primary" size="lg" className="whitespace-nowrap">
                  {t('servicesPage.ctaButton')}
                </SpotlightButton>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>
    </main>;
};
export default AllServices;
