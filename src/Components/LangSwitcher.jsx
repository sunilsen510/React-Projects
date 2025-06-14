import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    label: 'English',
    icon: 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/us.svg',
  },
  {
    code: 'ar',
    label: 'العربية (SA)',
    icon: 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/sa.svg',
  },
];

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('selectedLanguage', code); // Persist selection
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr'; // Update direction
    setIsOpen(false);

    // Update ticker classes immediately
    const ticker = document.querySelector('.ticker-track');
    if (ticker) {
      ticker.classList.remove('rtl-ticker', 'ltr-ticker');
      ticker.classList.add(code === 'ar' ? 'rtl-ticker' : 'ltr-ticker');
    }
  };

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // On window load: set language & direction, and run ticker logic
  useEffect(() => {
    const handleLoad = () => {
      const storedLang = localStorage.getItem('selectedLanguage') || 'en';
      i18n.changeLanguage(storedLang);
      document.documentElement.dir = storedLang === 'ar' ? 'rtl' : 'ltr';

      const ticker = document.querySelector('.ticker-track');
      if (ticker) {
        ticker.classList.add(storedLang === 'ar' ? 'rtl-ticker' : 'ltr-ticker');
      }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [i18n]);

  return (
    <div className="relative max-w-[100px] w-full text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[90px] flex items-center text-gray-800 justify-between px-3 py-2 hover:bg-gray-300 border-gray-300 rounded-md bg-gray-200"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-2">
          <img src={currentLang.icon} alt={currentLang.label} className="w-5 h-5" />
          <span className="text-sm font-medium uppercase">{currentLang.code}</span>
        </div>
        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.64a.75.75 0 01-1.08 0l-4.25-4.64a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-full bg-gray-300 border border-transparent rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center text-gray-800 space-x-2 px-3 py-2 text-sm text-left hover:bg-gray-400 ${
                i18n.language === lang.code ? 'bg-gray-200 font-semibold' : ''
              }`}
            >
              <img src={lang.icon} alt={lang.label} className="w-5 h-5" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
