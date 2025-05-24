import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import flogo from '../assets/logos.png';
import visaImg from '../assets/visa.png';

const Footer = () => {
  return (
    <section className="pt-[80px] bg-black">
      <div className="mx-auto overflow-hidden w-full px-4 sm:px-4 lg:px-4 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[80%] mx-aut">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Information */}
            <div>
                <h4 className="text-xl font-semibold text-white">Information</h4>
                <ul className="flex flex-col items-start gap-2 mt-4">
                <li><Link to="/" className="text-white font-light">About Navo</Link></li>
                <li><Link to="/" className="text-white font-light">Navo Identity</Link></li>
                <li><Link to="/" className="text-white font-light">Terms & Conditions</Link></li>
                <li><Link to="/" className="text-white font-light">Privacy Policy</Link></li>
                </ul>
            </div>

            {/* Shop Online */}
            <div>
                <h4 className="text-xl font-semibold text-white">Shop Online</h4>
                <ul className="flex flex-col items-start gap-2 mt-4">
                <li><Link to="/" className="text-white font-light">On Sale</Link></li>
                <li><Link to="/" className="text-white font-light">Office Chairs</Link></li>
                <li><Link to="/" className="text-white font-light">Monitor Arms</Link></li>
                <li><Link to="/" className="text-white font-light">Accessories</Link></li>
                <li><Link to="/" className="text-white font-light">Gaming</Link></li>
                <li><Link to="/" className="text-white font-light">See All Categories</Link></li>
                <li><Link to="/" className="text-white font-light">Standing Desk Frames</Link></li>
                </ul>
            </div>

            {/* Help Center */}
            <div>
                <h4 className="text-xl font-semibold text-white">Help Center</h4>
                <ul className="flex flex-col items-start gap-2 mt-4">
                <li><Link to="/" className="text-white font-light">Downloads</Link></li>
                <li><Link to="/" className="text-white font-light">FAQs</Link></li>
                <li><Link to="/" className="text-white font-light">Troubleshoot</Link></li>
                <li><Link to="/" className="text-white font-light">Tutorials</Link></li>
                <li><Link to="/" className="text-white font-light">Contact</Link></li>
                </ul>
            </div>

            {/* Ergonomics */}
            <div>
                <h4 className="text-xl font-semibold text-white">Ergonomics</h4>
                <ul className="flex flex-col items-start gap-2 mt-4">
                <li><Link to="/" className="text-white font-light">What is Ergonomics</Link></li>
                <li><Link to="/" className="text-white font-light">Blog</Link></li>
                </ul>
            </div>

            {/* Get In Touch */}
            <div>
                <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
                <ul className="flex flex-col items-start gap-2 mt-4">
                <li><Link to="/" className="text-white font-light">Let's Collaborate</Link></li>
                <li><Link to="/" className="text-white font-light">Become a Reseller</Link></li>
                <li><Link to="/" className="text-white font-light">Contact us</Link></li>
                </ul>
            </div>
            </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[30px] pb-6 border-b border-white">
                <img src={flogo} alt="Footer Logo" className="w-32 object-contain" />
                <SocialIcons socialIconClass="gap-4 flex" />
            </div>

           <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-white text-sm py-6">
                <div className="flex items-center sm:gap-1 gap-4 flex-1">
                    <img src={visaImg} alt="visa" className="h-3 w-auto" />
                    <img src={visaImg} alt="visa" className="h-3 w-auto" />
                    <img src={visaImg} alt="visa" className="h-3 w-auto" />
                    <img src={visaImg} alt="visa" className="h-3 w-auto" />
                    <img src={visaImg} alt="visa" className="h-3 w-auto" />
                </div>
                <div className="flex justify-center flex-1">
                    <p>© Copyright 2025 NAVO All Rights Reserved</p>
                </div>
                <div className="flex justify-end flex-1">
                    <p>Your World Ergonomised</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;
