import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MailIcon, SendIcon, CheckIcon } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import SpotlightButton from '../components/SpotlightButton';
const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.name');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // In a real app, this would send the data to a backend
      setSubmitted(true);
      window.scrollTo(0, 0);
    }
  };
  return <main className="pt-40 pb-16 bg-black min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#F4A622]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {submitted ? <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F4A622]/20 mb-6">
              <CheckIcon size={40} className="text-[#F4A622]" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{t('contact.successTitle')}</h1>
            <p className="text-gray-300 mb-8">
              {t('contact.successText')}
            </p>
            <SpotlightButton to="/" variant="primary">
              {t('contact.backHome')}
            </SpotlightButton>
          </div> : <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                {t('contact.title1')} <span className="text-[#F4A622]">{t('contact.title2')}</span>
              </h1>
              <p className="text-gray-300">
                {t('contact.subtitle')}
              </p>
            </div>
            <GlowCard borderRadius={16} className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="name">
                      {t('contact.name')}
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder={t('contact.namePlaceholder')} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="email">
                      {t('contact.email')}
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder={t('contact.emailPlaceholder')} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="message">
                      {t('contact.project')}
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-[#F4A622]/30'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]`} placeholder={t('contact.projectPlaceholder')} />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>
                <SpotlightButton type="submit" variant="primary" size="lg" fullWidth className="mt-8">
                  {t('contact.send')}
                  <SendIcon size={18} className="ml-2" />
                </SpotlightButton>
              </form>
              <div className="mt-8 pt-6 border-t border-[#F4A622]/10 flex items-center justify-center text-gray-400">
                <MailIcon size={18} className="text-[#F4A622] mr-2" />
                <span>contact@immersivealchemy.com</span>
              </div>
            </GlowCard>
          </>}
      </div>
    </main>;
};
export default Contact;
