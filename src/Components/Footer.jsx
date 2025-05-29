// import React from 'react';
// import { Link } from 'react-router-dom';
// import SocialIcons from './SocialIcons';
// import flogo from '../assets/logos.png';
// import visaImg from '../assets/visa.png';
// import { useTranslation } from "react-i18next";

// const Footer = () => {
//     const { t } = useTranslation();

//   return (
//     <section className="pt-[80px] bg-black">
//       <div className="mx-auto overflow-hidden w-full px-4 sm:px-4 lg:px-4 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[80%] mx-aut">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
//             {/* Information */}
//             <div>
//                 <h4 className="text-xl font-semibold text-white">Information</h4>
//                 <ul className="flex flex-col items-start gap-2 mt-4">
//                 <li><Link to="/" className="text-white font-light">About Navo</Link></li>
//                 <li><Link to="/" className="text-white font-light">Navo Identity</Link></li>
//                 <li><Link to="/" className="text-white font-light">Terms & Conditions</Link></li>
//                 <li><Link to="/" className="text-white font-light">Privacy Policy</Link></li>
//                 </ul>
//             </div>

//             {/* Shop Online */}
//             <div>
//                 <h4 className="text-xl font-semibold text-white">Shop Online</h4>
//                 <ul className="flex flex-col items-start gap-2 mt-4">
//                 <li><Link to="/" className="text-white font-light">On Sale</Link></li>
//                 <li><Link to="/" className="text-white font-light">Office Chairs</Link></li>
//                 <li><Link to="/" className="text-white font-light">Monitor Arms</Link></li>
//                 <li><Link to="/" className="text-white font-light">Accessories</Link></li>
//                 <li><Link to="/" className="text-white font-light">Gaming</Link></li>
//                 <li><Link to="/" className="text-white font-light">See All Categories</Link></li>
//                 <li><Link to="/" className="text-white font-light">Standing Desk Frames</Link></li>
//                 </ul>
//             </div>

//             {/* Help Center */}
//             <div>
//                 <h4 className="text-xl font-semibold text-white">Help Center</h4>
//                 <ul className="flex flex-col items-start gap-2 mt-4">
//                 <li><Link to="/" className="text-white font-light">Downloads</Link></li>
//                 <li><Link to="/" className="text-white font-light">FAQs</Link></li>
//                 <li><Link to="/" className="text-white font-light">Troubleshoot</Link></li>
//                 <li><Link to="/" className="text-white font-light">Tutorials</Link></li>
//                 <li><Link to="/" className="text-white font-light">Contact</Link></li>
//                 </ul>
//             </div>

//             {/* Ergonomics */}
//             <div>
//                 <h4 className="text-xl font-semibold text-white">Ergonomics</h4>
//                 <ul className="flex flex-col items-start gap-2 mt-4">
//                 <li><Link to="/" className="text-white font-light">What is Ergonomics</Link></li>
//                 <li><Link to="/" className="text-white font-light">Blog</Link></li>
//                 </ul>
//             </div>

//             {/* Get In Touch */}
//             <div>
//                 <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
//                 <ul className="flex flex-col items-start gap-2 mt-4">
//                 <li><Link to="/" className="text-white font-light">Let's Collaborate</Link></li>
//                 <li><Link to="/" className="text-white font-light">Become a Reseller</Link></li>
//                 <li><Link to="/" className="text-white font-light">Contact us</Link></li>
//                 </ul>
//             </div>
//             </div>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[30px] pb-6 border-b border-white">
//                 <img src={flogo} alt="Footer Logo" className="w-32 object-contain" />
//                 <SocialIcons socialIconClass="gap-4 flex" />
//             </div>

//            <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-white text-sm py-6">
//                 <div className="flex items-center sm:gap-1 gap-4 flex-1">
//                     <img src={visaImg} alt="visa" className="h-3 w-auto" />
//                     <img src={visaImg} alt="visa" className="h-3 w-auto" />
//                     <img src={visaImg} alt="visa" className="h-3 w-auto" />
//                     <img src={visaImg} alt="visa" className="h-3 w-auto" />
//                     <img src={visaImg} alt="visa" className="h-3 w-auto" />
//                 </div>
//                 <div className="flex justify-center flex-1">
//                     <p>© Copyright 2025 NAVO All Rights Reserved</p>
//                 </div>
//                 <div className="flex justify-end flex-1">
//                     <p>Your World Ergonomised</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   );
// };

// export default Footer;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import SocialIcons from './SocialIcons';
// import flogo from '../assets/logos.png';
// import visaImg from '../assets/visa.png';
// import { useTranslation } from "react-i18next";


// const footerMenus = {
//     toplinks: [
//     {
//       titleKey: 'Information',
//       links: [
//         { key: 'About Navo', path: '/about' },
//         { key: 'Navo Identity', path: '/identity' },
//         { key: 'Terms & Conditions', path: '/terms' },
//         { key: 'Privacy Policy', path: '/policy' },
//       ]
//     },
//     {
//       titleKey: 'Shop Online',
//       links: [
//         { key: 'On Sale', path: '/' },
//         { key: 'Office Chairs', path: '/' },
//         { key: 'Monitor Arms', path: '/' },
//         { key: 'Accessories', path: '/' },
//         { key: 'Gaming', path: '/' },
//         { key: 'See All Categories', path: '/' },
//         { key: 'Standing Desk Frames', path: '/' },
//       ],
//     }, 
//     {
//       titleKey: "Help Center",
//       links: [
//         { key: 'Downloads', path: '/' },
//         { key: 'FAQs', path: '/' },
//         { key: 'Troubleshoot', path: '/' },
//         { key: 'Tutorials', path: '/' },
//         { key: 'Contact', path: '/' },
//       ],
//     },
//     {
//        titleKey: "Ergonomics",
//        links: [
//         { key: 'What is Ergonomics', path: '/' },
//         { key: 'Blog', path: '/' },
//       ],
//     },
//     {
//         titleKey: "GetInTouch",
//         links: [
//             { key: "Let's Collaborate", path: '/' },
//             { key: 'Become a Reseller', path: '/' },
//             { key: 'Contact us', path: '/' },
//         ]
//     }
//   ]
// };

// const Footer = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="pt-[80px] bg-black">
//       <div className="mx-auto overflow-hidden w-full px-4 sm:px-4 lg:px-4 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[80%]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

//           {/* Information */}
//           <div>
//             <h4 className="text-xl font-semibold text-white">{t('title.Information')}</h4>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               {footerMenus.information.map(({ key, path }) => (
//                 <li key={key}>
//                   <Link to={path} className="text-white font-light">{t(`${key}`)}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Shop Online */}
//           <div>
//             <h4 className="text-xl font-semibold text-white">{t('Shop Online')}</h4>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               {footerMenus.shopOnline.map(({ key, path }) => (
//                 <li key={key}>
//                   <Link to={path} className="text-white font-light">{t(key)}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Help Center */}
//           <div>
//             <h4 className="text-xl font-semibold text-white">{t('Help Center')}</h4>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               {footerMenus.helpCenter.map(({ key, path }) => (
//                 <li key={key}>
//                   <Link to={path} className="text-white font-light">{t(key)}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Ergonomics */}
//           <div>
//             <h4 className="text-xl font-semibold text-white">{t('Ergonomics')}</h4>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               {footerMenus.ergonomics.map(({ key, path }) => (
//                 <li key={key}>
//                   <Link to={path} className="text-white font-light">{t(key)}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h4 className="text-xl font-semibold text-white">{t('Get In Touch')}</h4>
//             <ul className="flex flex-col items-start gap-2 mt-4">
//               {footerMenus.getInTouch.map(({ key, path }) => (
//                 <li key={key}>
//                   <Link to={path} className="text-white font-light">{t(key)}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[30px] pb-6 border-b border-white">
//           <img src={flogo} alt={t('Footer Logo')} className="w-32 object-contain" />
//           <SocialIcons socialIconClass="gap-4 flex" />
//         </div>

//         <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-white text-sm py-6">
//           <div className="flex items-center sm:gap-1 gap-4 flex-1">
//             <img src={visaImg} alt="visa" className="h-3 w-auto" />
//             <img src={visaImg} alt="visa" className="h-3 w-auto" />
//             <img src={visaImg} alt="visa" className="h-3 w-auto" />
//             <img src={visaImg} alt="visa" className="h-3 w-auto" />
//             <img src={visaImg} alt="visa" className="h-3 w-auto" />
//           </div>
//           <div className="flex justify-center flex-1">
//             <p>{t('footer.copyright')}</p>
//           </div>
//           <div className="flex justify-end flex-1">
//             <p>{t('footer.ergonomised')}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;



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
