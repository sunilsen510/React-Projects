import React from 'react'
import NewsTicker from '../Components/NewsTicker';
import CardCarousel from '../Components/CardCarousel';
import SwipperSlider from '../Components/SwipperSlider';
import InnerHero from '../Components/InnerHero';
import aboutImg from '../assets/store-slider.png';

const HomePage = () => {

  return (
    <>
      <NewsTicker />
      <InnerHero title="About Us"
        subtitle="Smart Standing Desk/Height Adjustable Desk With Bluetooth is the desk you want for your home or office space"
        backgroundImage={aboutImg}
         />
      <CardCarousel />
      <SwipperSlider slides={[...Array(20).keys()]} options={{ loop: false }} />
    </>
  )
}

export default HomePage