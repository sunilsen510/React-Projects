// import React from 'react';
// import Marquee from "react-fast-marquee";
// import addImg from '../../public/assets/add.svg';
// import { Link } from 'react-router-dom';
// import { useTranslation } from "react-i18next";


// const newsItems = [
//   { label: 'Sale', image: '../../public/assets/discountss.svg' },
//   { label: 'Standing Desks', image: '../../public/assets/table.svg' },
//   { label: 'WorkStations', image: '../../public/assets/workstation.svg' },
//   { label: 'Office Chairs', image: '../../public/assets/office-chair.svg' },
//   { label: 'Gaming Chairs', image: '../../public/assets/gaming-chair.svg'},
//   { label: 'Gaming Desks', image: '../../public/assets/gaming.svg'},
//   { label: 'Monitor Arms', image: '../../public/assets/laptop.svg'},
//   { label: 'Laptop & Monitors..', image: '../../public/assets/web-analytics.svg'},
//   { label: 'Accessories', image: '../../public/assets/accessories.svg'},
//   { label: 'Standing Desk Frames..', image: '../../public/assets/office.svg'},
//   { label: 'Chairs & Stools', image: '../../public/assets/stool.svg'},
//   { label: 'Tables', image: '../../public/assets/table.svg'},
//   { label: 'Storage & Organisers', image: '../../public/assets/database.svg'},
//   { label: 'Sale', image: '../../public/assets/discountss.svg' },
//   { label: 'Standing Desks', image: '../../public/assets/table.svg' },
//   { label: 'WorkStations', image: '../../public/assets/workstation.svg' },
//   { label: 'Office Chairs', image: '../../public/assets/office-chair.svg' },
//   { label: 'Gaming Chairs', image: '../../public/assets/gaming-chair.svg'},
//   { label: 'Gaming Desks', image: '../../public/assets/gaming.svg'},
//   { label: 'Monitor Arms', image: '../../public/assets/laptop.svg'},
//   { label: 'Laptop & Monitors..', image: '../../public/assets/web-analytics.svg'},
//   { label: 'Accessories', image: '../../public/assets/accessories.svg'},
//   { label: 'Standing Desk Frames..', image: '../../public/assets/office.svg'},
//   { label: 'Chairs & Stools', image: '../../public/assets/stool.svg'},
//   { label: 'Tables', image: '../../public/assets/table.svg'},
//   { label: 'Storage & Organisers', image: '../../public/assets/database.svg'},
// ];

// const NewsTicker = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <section className="w-full bg-white shadow">
//         <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
          
//           {/* Left Category Box */}
//           <div className="w-full sm:w-auto bg-gray-200 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
//             <div className="flex flex-col items-center gap-1">
//               <img src={addImg} alt="addImg" className="w-5 h-5 object-contain" />
//               <p className="text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
//                 {t('allCategories', 'All Categories')}
//               </p>
//             </div>
//           </div>

//           {/* Marquee Content */}
//           <div className="flex-1 gap-2 sm:p-4 w-full overflow-hidden">
//             <Marquee pauseOnHover gradient={false} speed={30} className="py-2">
//               <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 px-4">
//                 {newsItems.map((item, index) => (
//                   <li key={index} className="flex flex-col items-center min-w-[60px]">
//                     <Link
//                       to="/"
//                       className="flex flex-col text-black items-center gap-1 text-center hover:text-black transition"
//                     >
//                       <img
//                         src={item.image}
//                         alt={t(item.label)}
//                         className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                       />
//                       <span className="text-[10px] sm:text-xs font-medium">
//                         {/* {t(item.label)} */}
//                         {t(`categories.${item.label}`)}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </Marquee>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewsTicker;



// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import addImg from '../../public/assets/add.svg';

// const newsItems = [
//   { label: 'Sale', image: '../../public/assets/discountss.svg' },
//   { label: 'Standing Desks', image: '../../public/assets/table.svg' },
//   { label: 'WorkStations', image: '../../public/assets/workstation.svg' },
//   { label: 'Office Chairs', image: '../../public/assets/office-chair.svg' },
//   { label: 'Gaming Chairs', image: '../../public/assets/gaming-chair.svg' },
//   { label: 'Gaming Desks', image: '../../public/assets/gaming.svg' },
//   { label: 'Monitor Arms', image: '../../public/assets/laptop.svg' },
//   { label: 'Laptop & Monitors..', image: '../../public/assets/web-analytics.svg' },
//   { label: 'Accessories', image: '../../public/assets/accessories.svg' },
//   { label: 'Standing Desk Frames..', image: '../../public/assets/office.svg' },
//   { label: 'Chairs & Stools', image: '../../public/assets/stool.svg' },
//   { label: 'Tables', image: '../../public/assets/table.svg' },
//   { label: 'Storage & Organisers', image: '../../public/assets/database.svg' },
// ];

// const NewsTicker = () => {
//   const autoplay = useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
//   );

//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//       speed: 5,
//       align: 'start',
//       dragFree: true,
//     },
//     [autoplay.current]
//   );

//   useEffect(() => {
//     autoplay.current?.play();
//   }, []);

//   return (
//     <section className="w-full bg-white shadow">
//       <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
        
//         {/* Left Category Box */}
//         <div className="w-full sm:w-auto bg-gray-200 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
//           <div className="flex flex-col items-center gap-1">
//             <img src={addImg} alt="addImg" className="w-5 h-5 object-contain" />
//             <p className="text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
//               All Categories
//             </p>
//           </div>
//         </div>

//         {/* Embla Carousel Ticker */}
//         <div className="flex-1 overflow-hidden sm:p-4">
//           <div className="embla" ref={emblaRef}>
//             <ul className="embla__container flex gap-6 md:gap-8">
//               {newsItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="embla__slide flex-shrink-0 flex flex-col items-center min-w-[60px]"
//                 >
//                   <Link
//                     to="/"
//                     className="flex flex-col text-black items-center gap-1 text-center hover:text-black transition"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.label}
//                       className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                     />
//                     <span className="text-[10px] sm:text-xs font-medium">{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsTicker;


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import addImg from '../../public/assets/add.svg';

// const newsItems = [
//   { label: 'Sale', image: '../../public/assets/discountss.svg' },
//   { label: 'Standing Desks', image: '../../public/assets/table.svg' },
//   { label: 'WorkStations', image: '../../public/assets/workstation.svg' },
//   { label: 'Office Chairs', image: '../../public/assets/office-chair.svg' },
//   { label: 'Gaming Chairs', image: '../../public/assets/gaming-chair.svg' },
//   { label: 'Gaming Desks', image: '../../public/assets/gaming.svg' },
//   { label: 'Monitor Arms', image: '../../public/assets/laptop.svg' },
//   { label: 'Laptop & Monitors..', image: '../../public/assets/web-analytics.svg' },
//   { label: 'Accessories', image: '../../public/assets/accessories.svg' },
//   { label: 'Standing Desk Frames..', image: '../../public/assets/office.svg' },
//   { label: 'Chairs & Stools', image: '../../public/assets/stool.svg' },
//   { label: 'Tables', image: '../../public/assets/table.svg' },
//   { label: 'Storage & Organisers', image: '../../public/assets/database.svg' },
// ];

// const NewsTicker = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: 'start',
//       speed: 5,
//       dragFree: true,
//     },
//     [Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );

//   useEffect(() => {
//     if (emblaApi) emblaApi.reInit();
//   }, [emblaApi]);

//   return (
//     <section className="w-full bg-white shadow">
//       <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
        
//         {/* Left Category Box */}
//         <div className="w-full sm:w-auto bg-gray-200 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
//           <div className="flex flex-col items-center gap-1">
//             <img src={addImg} alt="addImg" className="w-5 h-5 object-contain" />
//             <p className="text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
//               All Categories
//             </p>
//           </div>
//         </div>

//         {/* Embla Carousel Ticker */}
//         <div className="flex-1 overflow-hidden sm:p-4">
//           <div className="embla h-auto" ref={emblaRef}>
//             <ul className="embla__container flex gap-4 md:gap-4">
//               {newsItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="embla__slide flex-shrink-0 basis-[100px] flex flex-col items-center"
//                 >
//                   <Link
//                     to="/"
//                     className="flex flex-col text-black items-center gap-1 text-center hover:text-black transition"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.label}
//                       className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                     />
//                     <span className="text-[10px] sm:text-xs font-medium">{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsTicker;




import React from 'react';
import Marquee from "react-fast-marquee";
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

import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const newsItems = [
  { key: 'sale', label: 'Sale', image: discountImg },
  { key: 'standingDesks', label: 'Standing Desks', image: tableImg },
  { key: 'workStations', label: 'WorkStations', image: workstationImg },
  { key: 'officeChairs', label: 'Office Chairs', image: officeChairImg },
  { key: 'gamingChairs', label: 'Gaming Chairs', image: gamingChairImg },
  { key: 'gamingDesks', label: 'Gaming Desks', image: gamingDeskImg },
  { key: 'monitorArms', label: 'Monitor Arms', image: laptopImg },
  { key: 'laptopMonitors', label: 'Laptop & Monitors..', image: webAnalyticsImg },
  { key: 'accessories', label: 'Accessories', image: accessoriesImg },
  { key: 'standingDeskFrames', label: 'Standing Desk Frames..', image: officeImg },
  { key: 'chairsStools', label: 'Chairs & Stools', image: stoolImg },
  { key: 'tables', label: 'Tables', image: tableImg },
  { key: 'storageOrganisers', label: 'Storage & Organisers', image: databaseImg },
];

const NewsTicker = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white shadow">
      <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
        
        {/* Left Category Box */}
        <div className="w-full sm:w-auto bg-gray-200 flex-shrink-0 p-3 sm:p-4 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <img src={addImg} alt="Add Icon" className="w-5 h-5 object-contain" />
            <p className="text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
              {t('allCategories', 'All Categories')}
            </p>
          </div>
        </div>

        {/* Marquee Content */}
        <div className="flex-1 gap-2 sm:p-4 w-full overflow-hidden">
          <Marquee pauseOnHover gradient={false} speed={30} className="py-2">
            <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 px-4">
              {newsItems.map(({ key, label, image }, index) => (
                <li key={index} className="flex flex-col items-center min-w-[60px]">
                  <Link
                    to="/"
                    className="flex flex-col text-black items-center gap-1 text-center hover:text-black transition"
                  >
                    <img
                      src={image}
                      alt={t(`categories.${key}`, label)}
                      className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs font-medium">
                      {t(`categories.${key}`, label)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
