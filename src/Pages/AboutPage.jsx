import React from 'react'
import aboutImg from '../assets/aboutImg.jpg';
import InnerHero from '../Components/InnerHero';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const title = "About Us";
  const { t } = useTranslation();

  return (
    <>
     <section className="bg-gray-100 py-16">
        <div className="xl:max-w-[80%] md:max-w-full mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <InnerHero
            contentImage={aboutImg}
            showContentImage={true}
            title=""
            subtitle=""
            />
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold">{t('aboutTitle')}</h2>
            <p className='text-lg'>{t('aboutParagraph4')}</p>
            <p className='text-lg'>{t('aboutParagraph5')}</p>
              <Link to="/blogs" className="text-gray-800 border-1 text-lg rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[10px] px-4 inline-block">
                {t('readMore')} →
              </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
