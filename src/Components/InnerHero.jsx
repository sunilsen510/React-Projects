// import React from 'react'
// import contentImage from '../assets/InnerHero.jpg'
// import { useTranslation } from 'react-i18next';

// const InnerHero = ({
//   title,
//   subtitle,
//   contentImage,
//   imageAlt = 'Inner Image',
//   backgroundImage,
//   height = "h-[60vh]",
//   titleColor = "text-gray-800",
//   subtitleColor = "text-gray-800",
//   showContentImage = false,
//   children,
// }) => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div
//       className={`relative w-full ${height} bg-cover bg-center text-white flex`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//       >

//         <div className='w-full flex items-center text-center justify-center gap-10'>
//           <div>
//             <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${titleColor}`}>{title}</h1>
//             {subtitle && <p className={`text-lg md:text-xl ${subtitleColor}`}>{subtitle}</p>}
//             {children}
//           </div>

//           {showContentImage && contentImage && (
//               <div className="flex w-full flex-col items-center justify-center ">
//                 <img
//                   src={contentImage}
//                   alt={imageAlt}
//                   className={`rounded-xl w-full max-h-[500px] h-auto max-w-[100%] mx-auto ${height} object-cover object-center`}
//                 />
//               </div>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default InnerHero



import React from 'react';
import fallbackImage from '../assets/InnerHero.jpg'; // renamed to avoid conflict
import { useTranslation } from 'react-i18next';

const InnerHero = ({
  title,
  subtitle,
  contentImage = fallbackImage,
  imageAlt = 'Inner Image',
  backgroundImage,
  height = "h-[60vh]",
  titleColor = "text-gray-800",
  subtitleColor = "text-gray-800",
  showContentImage = false,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center text-white flex`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full flex items-center text-center justify-center gap-10 px-4'>
        <div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${titleColor}`}>
            {t(title)}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl ${subtitleColor}`}>
              {t(subtitle)}
            </p>
          )}
          {children}
        </div>

        {showContentImage && contentImage && (
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src={contentImage}
              alt={imageAlt}
              className={`rounded-xl w-full max-h-[500px] h-auto max-w-[100%] mx-auto ${height} object-cover object-center`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerHero;
