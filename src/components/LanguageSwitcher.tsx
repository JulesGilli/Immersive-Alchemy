import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, ChevronDownIcon } from 'lucide-react';
import { languages } from '../i18n';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = languages.find(l => (i18n.resolvedLanguage || i18n.language || 'en').startsWith(l.code))?.code || 'en';

  return (
    <div className="relative inline-flex items-center">
      <GlobeIcon size={16} className="text-[#F4A622] pointer-events-none absolute left-2.5" />
      <select
        value={current}
        onChange={e => i18n.changeLanguage(e.target.value)}
        aria-label={t('language')}
        className="appearance-none cursor-pointer rounded-lg border border-[#F4A622]/40 hover:border-[#F4A622] bg-[#141210] text-[#F4A622] pl-8 pr-7 h-9 text-sm font-medium transition-colors duration-300 focus:outline-none focus:border-[#F4A622]"
      >
        {languages.map(l => (
          <option key={l.code} value={l.code} className="bg-[#0a0a0a] text-white">
            {l.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon size={14} className="text-[#F4A622] pointer-events-none absolute right-2" />
    </div>
  );
};

export default LanguageSwitcher;
