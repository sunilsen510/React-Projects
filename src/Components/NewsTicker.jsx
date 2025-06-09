import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import addImg from '../../public/assets/add.svg';
import discountImg from '../../public/assets/discountss.svg';
import tableImg from '../../public/assets/table.svg';
import workstationImg from '../../public/assets/workstation.svg';
import officeChairImg from '../../public/assets/office-chair.svg';
import gamingChairImg from '../../public/assets/gaming-chair.svg';
import gamingDeskImg from '../../public/assets/gaming.svg';
import laptopImg from '../../public/assets/laptop.svg';
import webAnalyticsImg from '../../public/assets/web-analytics.svg';
import accessoriesImg from '../../public/assets/accessories.svg';
import officeImg from '../../public/assets/office.svg';
import stoolImg from '../../public/assets/stool.svg';
import databaseImg from '../../public/assets/database.svg';

const newsItems = [
  { key: 'sale', label: 'Sale', image: discountImg },
  { key: 'standingDesks', label: 'Standing Desks', image: tableImg },
  { key: 'workStations', label: 'WorkStations', image: workstationImg },
  { key: 'officeChairs', label: 'Office Chairs', image: officeChairImg },
  { key: 'gamingChairs', label: 'Gaming Chairs', image: gamingChairImg },
  { key: 'gamingDesks', label: 'Gaming Desks', image: gamingDeskImg },
  { key: 'monitorArms', label: 'Monitor Arms', image: laptopImg },
  { key: 'laptopMonitors', label: 'Laptop & Monitors', image: webAnalyticsImg },
  { key: 'accessories', label: 'Accessories', image: accessoriesImg },
  { key: 'standingDeskFrames', label: 'Standing Desk Frames', image: officeImg },
  { key: 'chairsStools', label: 'Chairs & Stools', image: stoolImg },
  { key: 'tables', label: 'Tables', image: tableImg },
  { key: 'storageOrganisers', label: 'Storage & Organisers', image: databaseImg },
];

const NewsTicker = () => {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const lang = localStorage.getItem('selectedLanguage') || i18n.language || 'en';
    const newDir = lang === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDir);
    document.documentElement.dir = newDir;
  }, [i18n.language]);

  return (
    <section className="w-full bg-white shadow overflow-hidden">
      <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16 flex items-center">
        {/* Left Icon */}
        <div className="w-auto bg-gray-200 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <img src={addImg} alt="Add Icon" className="w-5 h-5 object-contain" />
            <p className="text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
              {t('allCategories', 'All Categories')}
            </p>
          </div>
        </div>

        {/* News Ticker */}
        <div className="w-full overflow-hidden px-0">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={32}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            freeModeMomentum={false}
            allowTouchMove={false}
            observer={true}
            observeParents={true}
            dir={direction}
            key={direction} // 🔁 Important: force re-render on direction change
            className="!flex items-center"
          >
            {Array.from({ length: 4 })
              .flatMap(() => newsItems)
              .map(({ key, label, image }, i) => (
                <SwiperSlide
                  key={`${key}-${i}`}
                  className="!w-auto flex flex-col items-center min-w-[80px] px-2"
                >
                  <Link
                    to="/"
                    className="flex flex-col items-center text-center text-black hover:text-black transition gap-1"
                  >
                    <img src={image} alt={label} className="w-6 h-6 object-contain" />
                    <span className="text-xs font-medium">{t(`categories.${key}`, label)}</span>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
