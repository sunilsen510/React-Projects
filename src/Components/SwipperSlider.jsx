// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import sofaImg from '../assets/sofa.jpg';

// const mainCards = [
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00',
//   },
// ];

// const SwiperSlider = () => {
//   return (
//     <section className="py-10 bg-gray-400">
//       <div className="max-w-[90%] ml-auto w-full ">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={24}
//           loop={true}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//         >
//           {mainCards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl duration-300 h-full cursor-pointer">
//                 <img
//                   src={card.imgUrl}
//                   alt={card.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//                   <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
//                   <p className="text-sm text-gray-800 text-center mt-2 font-bold">{card.price}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SwiperSlider;



// import React, { useCallback, useEffect, useState, useRef } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import sofaImg from '../assets/sofa.jpg';

// const mainCards = [
//   {
//     title: 'Arne Dining Chair',
//     desc: 'The small round table in the dinette may be great for casual meals with your family.',
//     imgUrl: sofaImg,
//     price: '$350.00'
//   },
//   {
//     title: 'Luxury Sofa',
//     desc: 'Perfect comfort meets beautiful design in this elegant piece.',
//     imgUrl: sofaImg,
//     price: '$450.00'
//   },
//   {
//     title: 'Wooden Table',
//     desc: 'Made from premium oak wood, a centerpiece of any room.',
//     imgUrl: sofaImg,
//     price: '$500.00'
//   },
//   {
//     title: 'Minimalist Lamp',
//     desc: 'Brighten your space with sleek modern lighting.',
//     imgUrl: sofaImg,
//     price: '$120.00'
//   },
//   {
//     title: 'Office Chair',
//     desc: 'Ergonomic and stylish for your workspace.',
//     imgUrl: sofaImg,
//     price: '$280.00'
//   },
//   {
//     title: 'Bookshelf Rack',
//     desc: 'Organize your books with this modern storage solution.',
//     imgUrl: sofaImg,
//     price: '$180.00'
//   }
// ];

// const EmblaCarousel = () => {
// const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
// const [scrolling, setScrolling] = useState(false);
// const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
// const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) {
//       setScrolling(true);
//       emblaApi.scrollPrev();
//     }
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) {
//       setScrolling(true);
//       emblaApi.scrollNext();
//     }
//   }, [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setPrevBtnEnabled(emblaApi.canScrollPrev());
//     setNextBtnEnabled(emblaApi.canScrollNext());
//     setScrolling(false);
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on('select', onSelect);
//     emblaApi.on('reInit', onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="py-10 bg-gray-100 relative">
//       <div className="max-w-[80%] mx-auto w-full overflow-hidden" ref={emblaRef}>
//         <div className="flex gap-6 px-6">
//           {mainCards.map((card, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[33%] lg:w-[25%] xl:w-[20%] bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl duration-300 cursor-pointer"
//             >
//               <img
//                 src={card.imgUrl}
//                 alt={card.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
//                 <p className="text-sm text-gray-800 text-center mt-2 font-bold">{card.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='flex items-center justify-between gap-0'>
//         {/* Prev Arrow */}
//         <button
//           className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30"
//           onClick={scrollPrev}
//           disabled={!prevBtnEnabled || scrolling}
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         {/* Next Arrow */}
//         <button
//           className="absolute top-1/2 right-[15%] -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30"
//           onClick={scrollNext}
//           disabled={!nextBtnEnabled || scrolling}
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default EmblaCarousel;



// import React, { useCallback, useEffect, useState } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import sofaImg from '../assets/sofa.jpg' // Replace with your correct image path

// const EmblaCarousel = ({ options }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const mainCards = [
//     {
//       title: 'Arne Dining Chair',
//       desc: 'The small round table in the dinette may be great for casual meals with your family.',
//       imgUrl: sofaImg,
//       price: '$350.00'
//     },
//     {
//       title: 'Luxury Sofa',
//       desc: 'Perfect comfort meets beautiful design in this elegant piece.',
//       imgUrl: sofaImg,
//       price: '$450.00'
//     },
//     {
//       title: 'Wooden Table',
//       desc: 'Made from premium oak wood, a centerpiece of any room.',
//       imgUrl: sofaImg,
//       price: '$500.00'
//     },
//     {
//       title: 'Minimalist Lamp',
//       desc: 'Brighten your space with sleek modern lighting.',
//       imgUrl: sofaImg,
//       price: '$120.00'
//     },
//     {
//       title: 'Office Chair',
//       desc: 'Ergonomic and stylish for your workspace.',
//       imgUrl: sofaImg,
//       price: '$280.00'
//     },
//     {
//       title: 'Bookshelf Rack',
//       desc: 'Organize your books with this modern storage solution.',
//       imgUrl: sofaImg,
//       price: '$180.00'
//     }
//   ]

//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

//   const onInit = useCallback((api) => {
//     setSelectedIndex(api.selectedScrollSnap())
//     setPrevBtnDisabled(!api.canScrollPrev())
//     setNextBtnDisabled(!api.canScrollNext())
//   }, [])

//   const onSelect = useCallback((api) => {
//     setSelectedIndex(api.selectedScrollSnap())
//     setPrevBtnDisabled(!api.canScrollPrev())
//     setNextBtnDisabled(!api.canScrollNext())
//   }, [])

//   useEffect(() => {
//     if (!emblaApi) return

//     onInit(emblaApi)
//     emblaApi.on('select', onSelect)
//     emblaApi.on('reInit', onInit)
//   }, [emblaApi, onInit, onSelect])

//   const onPrevButtonClick = useCallback(() => {
//     if (!emblaApi) return
//     emblaApi.scrollPrev()
//   }, [emblaApi])

//   const onNextButtonClick = useCallback(() => {
//     if (!emblaApi) return
//     emblaApi.scrollNext()
//   }, [emblaApi])

//   const PrevArrow = () => (
//    <svg
//       className="w-6 h-6 text-gray-700"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="15 18 9 12 15 6" />
//     </svg>
//   )

//   const NextArrow = () => (
//      <svg
//       className="w-6 h-6 text-gray-700"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="9 18 15 12 9 6" />
//     </svg>
//   )

//   return (
//     <section className="relative py-10 bg-gray-100 " dir="rtl">
//       {/* Viewport */}

//       <div className="overflow-hidden w-full px-4 sm:px-4 lg:px-0 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[90%] ml-auto"  ref={emblaRef}>

//         <div className="flex rtl:flex-row-reverse">
//           {mainCards.map((card, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] sm:flex-[0_0_33.3333%] lg:flex-[0_0_20%] px-2 w-full sm:w-1/3 lg:w-1/4"
//             >
//               <div className="bg-white h-full rounded-lg shadow p-4">
//                 <img
//                   src={card.imgUrl}
//                   alt={card.title}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//                 <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
//                 <p className="text-gray-600 font-bold mt-2">{card.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Prev Button */}
//       <button
//         onClick={onPrevButtonClick}
//         disabled={prevBtnDisabled}
//         aria-label="Previous slide"
//         className="hidden sm:block absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2  bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//       >
//         <PrevArrow />
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={onNextButtonClick}
//         disabled={nextBtnDisabled}
//         aria-label="Next slide"
//         className="hidden sm:block absolute top-1/2 right-[15%] -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//       >
//         <NextArrow />
//       </button>
//     </section>
//   )
// }

// export default EmblaCarousel



import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import sofaImg from '../assets/sofa.jpg' // Replace with your correct image path

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const mainCards = [
    {
      title: 'Arne Dining Chair',
      desc: 'The small round table in the dinette may be great for casual meals with your family.',
      imgUrl: sofaImg,
      price: '$350.00'
    },
    {
      title: 'Luxury Sofa',
      desc: 'Perfect comfort meets beautiful design in this elegant piece.',
      imgUrl: sofaImg,
      price: '$450.00'
    },
    {
      title: 'Wooden Table',
      desc: 'Made from premium oak wood, a centerpiece of any room.',
      imgUrl: sofaImg,
      price: '$500.00'
    },
    {
      title: 'Minimalist Lamp',
      desc: 'Brighten your space with sleek modern lighting.',
      imgUrl: sofaImg,
      price: '$120.00'
    },
    {
      title: 'Office Chair',
      desc: 'Ergonomic and stylish for your workspace.',
      imgUrl: sofaImg,
      price: '$280.00'
    },
    {
      title: 'Bookshelf Rack',
      desc: 'Organize your books with this modern storage solution.',
      imgUrl: sofaImg,
      price: '$180.00'
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onInit = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevBtnDisabled(!api.canScrollPrev())
    setNextBtnDisabled(!api.canScrollNext())
  }, [])

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevBtnDisabled(!api.canScrollPrev())
    setNextBtnDisabled(!api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    emblaApi.on('select', () => onSelect(emblaApi))
    emblaApi.on('reInit', () => onInit(emblaApi))
  }, [emblaApi, onInit, onSelect])

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const PrevArrow = () => (
    <svg
      className="w-6 h-6 text-gray-700"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )

  const NextArrow = () => (
    <svg
      className="w-6 h-6 text-gray-700"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )

  return (
    <>
      <section className=" max-w-[100%] relative py-10 bg-gray-100" dir="rtl">
        {/* Viewport */}
        <div className="overflow-hidden w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[100%] mx-auto" ref={emblaRef}>
          <div className="flex rtl:flex-row-reverse w-full sm:px-2 mx-auto">
            {mainCards.map((card, index) => (
              <div
                key={index}
                className={`ml-left flex-[0_0_100%] sm:flex-[0_0_33.3333%] lg:flex-[0_0_20%] w-full
                  ${index === 0 ? "ml-3 sm:ml-5 md:ml-6 lg:ml-[5vw] xl:ml-[10vw]" : "ml-0"}
                  ${index === mainCards.length - 1 ? "mr-4 xl:mr-[10vw]" : ""}
                  px-2`}
              > 

                <div className="bg-white h-full rounded-lg shadow p-4 cursor-pointer">
                  <img
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
                  <p className="text-gray-600 font-bold mt-2">{card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Prev Button */}
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
          className="hidden sm:block absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2  bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <PrevArrow />
        </button>

        {/* Next Button */}
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
          className="hidden sm:block absolute top-1/2 right-[15%] -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow z-10  transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <NextArrow />
        </button>
      </section>
    </>
  )
}

export default EmblaCarousel
