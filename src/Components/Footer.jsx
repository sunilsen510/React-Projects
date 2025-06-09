import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import flogo from '../assets/logos.png';
import visaImg from '../assets/visa.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  // Get the translated toplinks array from JSON
  const footerTopLinks = t('footer.toplinks', { returnObjects: true });

  return (
    <section className="pt-[80px] bg-black">
      <div className="mx-auto overflow-hidden w-full px-4 sm:px-4 lg:px-4 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerTopLinks.map((key, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold text-white">{key.title}</h4>
              <ul className="flex flex-col items-start gap-2 mt-4">
                {key.links.map((link, indexes) => (
                  <li key={indexes}>
                    <Link to="/" className="text-white font-light">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[30px] pb-6 border-b border-white">
          <img src={flogo} alt={t('Footer Logo')} className="w-32 object-contain" />
          <SocialIcons socialIconClass="gap-4 flex" />
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-white text-sm py-6">
          <div className="flex items-center sm:gap-1 gap-4 flex-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={visaImg} alt="visa" className="h-3 w-auto" />
            ))}
          </div>
          <div className="flex justify-center flex-1">
            <p>© 2025 NAVO {t('footer.copyright')}</p>
          </div>
          <div className="flex justify-end flex-1">
            <p>{t('footer.ergonomised')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
