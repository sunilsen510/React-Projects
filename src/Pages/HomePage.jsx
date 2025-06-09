import React, { useEffect, useState } from 'react';
import NewsTicker from '../Components/NewsTicker';
import CardCarousel from '../Components/CardCarousel';
import SwipperSlider from '../Components/SwipperSlider';
import sideImg from '../assets/innerHero.jpg';
import InnerHero from '../Components/InnerHero';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';

const HomePage = () => {
 const { t } = useTranslation();
 const loading = useLoader(1000); 

  if (loading) return <Loader />;

  return (
    <>
      <NewsTicker />
      <section className="bg-gray-100 py-16 xl:px-0 xxl:px-0 lg:px-2 md:px-0 px-2">
       <div className="w-full max-w-screen-xl xl:max-w-[80%] lg:max-w-full mx-auto lg:px-0 md:px-4  flex flex-col sm:flex-col md:flex-col lg:flex-row flex-wrap gap-5 md:gap-10 lg:gap-10 items-center justify-between">
          <div className="space-y-4 flex-1 h-auto w-full text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold">{t('aboutTitle')}</h2>

            <p className='text-lg'>{t('aboutParagraph1')}</p>
            <p className='text-lg'>{t('aboutParagraph2')}</p>
            <p className='text-lg'>{t('aboutParagraph3')}</p>

            <Link
              to="/blogs"
              className="text-gray-800 text-lg mt-[20px] border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white py-[10px] px-4 inline-block"
            >
              {t('readMore')} →
            </Link>
          </div>

          <div className='flex-1 h-auto w-full'>
            <InnerHero
            contentImage={sideImg}
            showContentImage={true}
            title=""
            subtitle=""
            height = ''
          />
          </div>
        </div>
      </section>
     
      <CardCarousel />
      <SwipperSlider slides={[...Array(20).keys()]} options={{ loop: false }} />
    </>
  );
};

export default HomePage;
