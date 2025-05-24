import React from 'react'
import NewsTicker from '../Components/NewsTicker';
import CardCarousel from '../Components/CardCarousel';
import SwipperSlider from '../Components/SwipperSlider';

const HomePage = () => {

  return (
    <>
      <NewsTicker />
      <CardCarousel />
      <SwipperSlider slides={[...Array(20).keys()]} options={{ loop: false }} />
    </>
  )
}

export default HomePage