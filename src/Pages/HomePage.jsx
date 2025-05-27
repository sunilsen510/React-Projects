// import React from 'react';
// import NewsTicker from '../Components/NewsTicker';
// import CardCarousel from '../Components/CardCarousel';
// import SwipperSlider from '../Components/SwipperSlider';
// import sideImg from '../assets/innerHero.jpg';
// import InnerHero from '../Components/InnerHero';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const HomePage = () => {
//   const title = "About Us";
//   const { t } = useTranslation();

//   return (
//     <>
//       <NewsTicker />
//       <section className="bg-gray-100 py-16">
//         <div className="mx-auto px-4 max-w-[80%] xl:max-w-[80%] md:max-w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-4 text-gray-800">
//             <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
//             <p>
//               Welcome to our smart workspace platform where innovation meets comfort. Our mission is to empower productivity
//               through ergonomic and technology-integrated furniture.
//             </p>
//             <p>
//               Whether you're working from home or managing a modern office environment, our adjustable desks and accessories
//               are designed to support your health, focus, and style.
//             </p>
//             <p>
//               Explore a wide range of intelligent products that adapt to your needs and upgrade the way you work—every day.
//             </p>
//             <Link to="/blogs" className="text-gray-800  mt-[20px] border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[10px] px-4 inline-block">
//                 Read More →
//               </Link>
//           </div>
//           <InnerHero
//             contentImage={sideImg}
//             showContentImage={true}
//             title=""       
//             subtitle=""    
//           />
//         </div>
//           <div>
//             <h1>{t('welcome')}</h1>
//             <p>{t('contact')}</p>
//           </div>
//       </section>

//       <CardCarousel />
//       <SwipperSlider slides={[...Array(20).keys()]} options={{ loop: false }} />
//     </>
//   );
// };

// export default HomePage;


import React from 'react';
import NewsTicker from '../Components/NewsTicker';
import CardCarousel from '../Components/CardCarousel';
import SwipperSlider from '../Components/SwipperSlider';
import sideImg from '../assets/innerHero.jpg';
import InnerHero from '../Components/InnerHero';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NewsTicker />
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('welcome')}</h1>
        <p className="text-gray-600">{t('contact')}</p>
      </div>
      <section className="bg-gray-100 py-16">
        <div className="mx-auto px-4 max-w-[80%] xl:max-w-[80%] md:max-w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold">{t('aboutTitle')}</h2>

            <p>{t('aboutParagraph1')}</p>
            <p>{t('aboutParagraph2')}</p>
            <p>{t('aboutParagraph3')}</p>

            <Link
              to="/blogs"
              className="text-gray-800 mt-[20px] border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white py-[10px] px-4 inline-block"
            >
              {t('readMore')} →
            </Link>
          </div>

          <InnerHero
            contentImage={sideImg}
            showContentImage={true}
            title=""
            subtitle=""
          />
        </div>

        
      </section>

      <CardCarousel />
      <SwipperSlider slides={[...Array(20).keys()]} options={{ loop: false }} />
    </>
  );
};

export default HomePage;
