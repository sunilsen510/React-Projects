// import { useState, useEffect, useCallback, useMemo } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import AdidasLogo from "../../public/assets/brands/sanity.svg";
// import AsanaLogo from "../../public/assets/brands/upwork.svg";
// import GithubLogo from "../../public/assets/brands/docker.svg";
// import GoogleLogo from "../../public/assets/brands/refs.svg";
// import AtlassianLogo from "../../public/assets/brands/zoom.svg";
// import MailchimpLogo from "../../public/assets/brands/wordpress.svg";
// import ShopifyLogo from "../../public/assets/brands/shopify.svg";
// import SpotifyLogo from "../../public/assets/brands/fathom.svg";
// import { useTranslation } from "react-i18next";

// const brandImg = [
//   AdidasLogo,
//   AsanaLogo,
//   GithubLogo,
//   GoogleLogo,
//   AtlassianLogo,
//   MailchimpLogo,
//   ShopifyLogo,
//   SpotifyLogo,
// ];

// const CardCarousel = () => {
//   const { i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   const [centerIndex, setCenterIndex] = useState(0);

//   // const brandImgs = [...brandImg, ...brandImg]; 

//     const brandImgs = useMemo(() => {
//     const imgs = [...brandImg, ...brandImg]; // duplicate for smooth loop
//     return isRTL ? imgs.reverse() : imgs;
//   }, [isRTL]);

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       skipSnaps: false,
//       speed: 4, // smooth speed
//       direction: isRTL ? "rtl" : "ltr",
//     },
//     [Autoplay({ delay: 2000, stopOnInteraction: false })] // delay 1ms to imitate continuous loop
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCenterIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <>
//       <section className="py-10 bg-gray-100 relative">
//          <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16  max-w-screen-xl flex flex-col sm:flex-row items-center overflow-hidden">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex items-center">
//               {brandImgs.map((imgSrc, index) => (
//                 <div
//                   key={index}
//                   className="px-2 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] xl:flex-[0_0_14.28%] transition-transform duration-300 ease-in-out"
//                 >
//                   <div
//                     className={`transition-all duration-300 w-full transform ${
//                       centerIndex === index
//                         ? "grayscale-0 opacity-100 scale-110 z-10"
//                         : "grayscale opacity-50 scale-80"
//                     }`}
//                   >
//                     <img
//                       src={imgSrc}
//                       alt={`Brand ${index}`}
//                       className="h-16 sm:h-20 md:h-20 w-full object-contain mx-auto"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Highlight Frame (Center Focus) */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-[16.66%] sm:w-[14.28%] -translate-x-1/2 pointer-events-none z-20">
//             <div className="h-20 rounded-md" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CardCarousel;




// import { useState, useEffect, useCallback, useMemo } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import AdidasLogo from "../../public/assets/brands/sanity.svg";
// import AsanaLogo from "../../public/assets/brands/upwork.svg";
// import GithubLogo from "../../public/assets/brands/docker.svg";
// import GoogleLogo from "../../public/assets/brands/refs.svg";
// import AtlassianLogo from "../../public/assets/brands/zoom.svg";
// import MailchimpLogo from "../../public/assets/brands/wordpress.svg";
// import ShopifyLogo from "../../public/assets/brands/shopify.svg";
// import SpotifyLogo from "../../public/assets/brands/fathom.svg";
// import { useTranslation } from "react-i18next";


// const brandImg = [
//   AdidasLogo,
//   AsanaLogo,
//   GithubLogo,
//   GoogleLogo,
//   AtlassianLogo,
//   MailchimpLogo,
//   ShopifyLogo,
//   SpotifyLogo,
// ];

// const CardCarousel = () => {
//   const { i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   const brandImgs = useMemo(() => {
//     const imgs = [...brandImg, ...brandImg]; // duplicate for loop illusion
//     return isRTL ? imgs.reverse() : imgs;
//   }, [isRTL]);

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       skipSnaps: false,
//       speed: 4,
//       direction: isRTL ? "rtl" : "ltr",
//     },
//     [Autoplay({ delay: 2000, stopOnInteraction: false })]
//   );

//   const [centerSnap, setCenterSnap] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCenterSnap(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="py-10 bg-gray-100 relative">
//       <div className="xl:max-w-[80%] max-w-screen-xl m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
//         <div className="overflow-hidden w-full" ref={emblaRef}>
//           <div className="flex items-center">
//             {brandImgs.map((imgSrc, index) => (
//               <div
//                 key={index}
//                 className="px-2 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] xl:flex-[0_0_14.28%] transition-transform duration-300 ease-in-out"
//               >
//                 <div
//                   className={`transition-all duration-300 transform w-full ${
//                     centerSnap === index % brandImg.length
//                       ? "grayscale-0 opacity-100 scale-110 z-10"
//                       : "grayscale opacity-50 scale-80"
//                   }`}
//                 >
//                   <img
//                     src={imgSrc}
//                     alt={`Brand ${index}`}
//                     className="h-16 sm:h-20 md:h-20 w-full object-contain mx-auto"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Center Focus Highlight */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-[16.66%] sm:w-[14.28%] -translate-x-1/2 pointer-events-none z-20">
//           <div className="h-20 rounded-md" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardCarousel;



// import { useState, useEffect, useCallback, useMemo } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import AdidasLogo from "../../public/assets/brands/sanity.svg";
// import AsanaLogo from "../../public/assets/brands/upwork.svg";
// import GithubLogo from "../../public/assets/brands/docker.svg";
// import GoogleLogo from "../../public/assets/brands/refs.svg";
// import AtlassianLogo from "../../public/assets/brands/zoom.svg";
// import MailchimpLogo from "../../public/assets/brands/wordpress.svg";
// import ShopifyLogo from "../../public/assets/brands/shopify.svg";
// import SpotifyLogo from "../../public/assets/brands/fathom.svg";
// import { useTranslation } from "react-i18next";

// const brandImg = [
//   AdidasLogo,
//   AsanaLogo,
//   GithubLogo,
//   GoogleLogo,
//   AtlassianLogo,
//   MailchimpLogo,
//   ShopifyLogo,
//   SpotifyLogo,
// ];

// const CardCarousel = () => {
//   const { i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   const isRTL = typeof window !== "undefined" ? document?.documentElement?.dir === "rtl": false;
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: isRTL ? "rtl" : "ltr", });

//   const duplicatedImgs = useMemo(() => [...brandImg, ...brandImg], []);

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//       direction: isRTL ? "rtl" : "ltr",
//       speed: 4,
//     },
//     [Autoplay({ delay: 2000, stopOnInteraction: false })]
//   );

//   const [centerIndex, setCenterIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCenterIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="py-10 bg-gray-100 relative">
//       <div className="xl:max-w-[80%] max-w-screen-xl m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden">
//         <div className="overflow-hidden w-full" ref={emblaRef}>
//           <div className="flex items-center">
//             {duplicatedImgs.map((imgSrc, index) => {
//               const baseIndex = index % brandImg.length;
//               const isCentered =
//                 centerIndex % brandImg.length === baseIndex;

//               return (
//                 <div
//                   key={index}
//                   className="px-2 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] xl:flex-[0_0_14.28%] transition-transform duration-300 ease-in-out"
//                 >
//                   <div
//                     className={`transition-all duration-300 transform w-full ${
//                       isCentered
//                         ? "grayscale-0 opacity-100 scale-110 z-10"
//                         : "grayscale opacity-50 scale-80"
//                     }`}
//                   >
//                     <img
//                       src={imgSrc}
//                       alt={`Brand ${baseIndex}`}
//                       className="h-16 sm:h-20 md:h-20 w-full object-contain mx-auto"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Center highlight frame */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-[16.66%] sm:w-[14.28%] -translate-x-1/2 pointer-events-none z-20">
//           <div className="h-20 rounded-md" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardCarousel;



import { useState, useEffect, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AdidasLogo from "../../public/assets/brands/sanity.svg";
import AsanaLogo from "../../public/assets/brands/upwork.svg";
import GithubLogo from "../../public/assets/brands/docker.svg";
import GoogleLogo from "../../public/assets/brands/refs.svg";
import AtlassianLogo from "../../public/assets/brands/zoom.svg";
import MailchimpLogo from "../../public/assets/brands/wordpress.svg";
import ShopifyLogo from "../../public/assets/brands/shopify.svg";
import SpotifyLogo from "../../public/assets/brands/fathom.svg";
import { useTranslation } from "react-i18next";

const brandImg = [
  AdidasLogo,
  AsanaLogo,
  GithubLogo,
  GoogleLogo,
  AtlassianLogo,
  MailchimpLogo,
  ShopifyLogo,
  SpotifyLogo,
];

const CardCarousel = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      direction: isRTL ? "rtl" : "ltr",
      speed: 4,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const duplicatedImgs = useMemo(() => [...brandImg, ...brandImg], []);

  const [centerIndex, setCenterIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCenterIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 bg-gray-100 relative">
      <div className="xl:max-w-[80%] max-w-screen-xl m-auto h-auto sm:h-16 flex flex-col sm:flex-row items-center overflow-hidden relative">
        {/* Carousel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-center">
            {duplicatedImgs.map((imgSrc, index) => {
              const baseIndex = index % brandImg.length;
              const isCentered = centerIndex % brandImg.length === baseIndex;

              return (
                <div
                  key={index}
                  className="px-2 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] xl:flex-[0_0_14.28%] transition-transform duration-300 ease-in-out"
                >
                  <div
                    className={`transition-all duration-300 transform w-full ${
                      isCentered
                        ? "grayscale-0 opacity-100 scale-110 z-10"
                        : "grayscale opacity-50 scale-80"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand ${baseIndex}`}
                      className="h-16 sm:h-20 md:h-20 w-full object-contain mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight frame for centered brand */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
          } w-[16.66%] sm:w-[14.28%] pointer-events-none z-20`}
        >
          <div className="h-20 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
