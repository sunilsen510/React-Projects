import React from 'react'
import aboutImg from '../assets/aboutImg.jpg';
import InnerHero from '../Components/InnerHero';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';
import contactImg from '../assets/aboutt.png';

const AboutPage = () => {
  const title = "About Us";
  const { t } = useTranslation();

  const loading = useLoader(1000); 

  if (loading) return <Loader />;

  return (
    <>
      <section className="w-full bg-gray-500">
        <InnerHero
          title="About Us"
          subtitle="Welcome to the world of NAVO. Let's reimagine the way you work, play, live, and thrive."
          backgroundImage={contactImg}
          titleColor="text-white"
          subtitleColor="text-white"
        />
        <div className="bg-gray-100 py-16">
          <div className="w-full max-w-7xl xl:max-w-[80%] lg:max-w-[80%] md:max-w-full mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-10 items-center">
            {/* Image - takes 50% on md and above */}
            <img
              src={aboutImg}
              alt={t('aboutTitle')}
              className="w-full md:w-1/2 rounded-lg object-cover max-h-[500px] object-center"
            />

            {/* Content - takes 50% on md and above */}
            <div className="w-full md:w-1/2 space-y-4 text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold">{t('aboutTitle')}</h2>
              <p className="text-lg">{t('aboutParagraph4')}</p>
              <p className="text-lg">{t('aboutParagraph5')}</p>
              <Link
                to="/blogs"
                className="text-gray-800 border border-gray-800 text-lg rounded-3xl hover:bg-gray-800 transition-all hover:text-white py-[10px] px-4 inline-block"
              >
                {t('readMore')} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
