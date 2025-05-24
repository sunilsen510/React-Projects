import React from 'react';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twiter.svg';
import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

const SocialIcons = ({ socialIconClass = 'flex items-center gap-4', linkdetails = [] }) => {
  const defaultSocialLinks = [
    { link: 'https://facebook.com', linkImg: Facebook, alt: 'Facebook' },
    { link: 'https://twitter.com', linkImg: Twitter, alt: 'Twitter' },
    { link: 'https://linkedin.com', linkImg: LinkedIn, alt: 'LinkedIn' },
    { link: 'https://instagram.com', linkImg: Instagram, alt: 'Instagram' },
    { link: 'https://facebook.com', linkImg: Facebook, alt: 'Facebook' },
    { link: 'https://twitter.com', linkImg: Twitter, alt: 'Twitter' },
  ];

  const socialLinks = defaultSocialLinks.map((item, index) => ({
    link: linkdetails[index]?.link || item.link,
    linkImg: item.linkImg,
    alt: item.alt
  }));

  return (
    <ul className={socialIconClass}>
      {socialLinks.map((val, i) => (
        <li key={i}>
          <a
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={val.alt}
            className="inline-block transition-transform transform hover:scale-110"
          >
            <img src={val.linkImg} alt={`${val.alt} icon`} className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
