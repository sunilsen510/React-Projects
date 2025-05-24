import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AdidasLogo from "../../public/assets/brands/sanity.svg";
import AsanaLogo from "../../public/assets/brands/upwork.svg";
import GithubLogo from "../../public/assets/brands/docker.svg";
import GoogleLogo from "../../public/assets/brands/refs.svg";
import NotionLogo from "../../public/assets/brands/cloudflare.svg";
import AtlassianLogo from "../../public/assets/brands/zoom.svg";
import MailchimpLogo from "../../public/assets/brands/wordpress.svg";
import ShopifyLogo from "../../public/assets/brands/shopify.svg";
import SpotifyLogo from "../../public/assets/brands/fathom.svg";

const brandImg = [
  AdidasLogo,
  AsanaLogo,
  GithubLogo,
  GoogleLogo,
  NotionLogo,
  AtlassianLogo,
  MailchimpLogo,
  ShopifyLogo,
  SpotifyLogo,
];

const CardCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const brandImgs = [...brandImg, ...brandImg]; // duplicate for smooth loop

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      speed: 4, // smooth speed
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })] // delay 1ms to imitate continuous loop
  );

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
    <>
      <section className="py-10 bg-gray-100 relative">
         <div className="xl:max-w-[80%] md:max-w-full m-auto h-auto sm:h-16  max-w-screen-xl flex flex-col sm:flex-row items-center overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center">
              {brandImgs.map((imgSrc, index) => (
                <div
                  key={index}
                  className="px-2 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] xl:flex-[0_0_14.28%] transition-transform duration-300 ease-in-out"
                >
                  <div
                    className={`transition-all duration-300 w-full transform ${
                      centerIndex === index
                        ? "grayscale-0 opacity-100 scale-110 z-10"
                        : "grayscale opacity-50 scale-80"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Brand ${index}`}
                      className="h-16 sm:h-20 md:h-20 w-full object-contain mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Frame (Center Focus) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-[16.66%] sm:w-[14.28%] -translate-x-1/2 pointer-events-none z-20">
            <div className="h-20 rounded-md" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardCarousel;
