import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import sofaImg from '../assets/sofa.jpg';
import { useTranslation } from 'react-i18next'; 

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { t } = useTranslation();

  const mainCards = [
  {
    title: t('cards.title1'),
    desc: t('cards.description1'),
    price: t('cards.price1'),
    imgUrl: sofaImg
  },
  {
    title: t('cards.title2'),
    desc: t('cards.description2'),
    price: t('cards.price2'),
    imgUrl: sofaImg
  },
  {
    title: t('cards.title3'),
    desc: t('cards.description3'),
    price: t('cards.price3'),
    imgUrl: sofaImg
  },
  {
    title: t('cards.title4'),
    desc: t('cards.description4'),
    price: t('cards.price4'),
    imgUrl: sofaImg
  },
  {
    title: t('cards.title5'),
    desc: t('cards.description5'),
    price: t('cards.price5'),
    imgUrl: sofaImg
  },
  {
    title: t('cards.title6'),
    desc: t('cards.description6'),
    price: t('cards.price6'),
    imgUrl: sofaImg
  }
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
