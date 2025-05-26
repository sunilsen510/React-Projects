import React from 'react'
import aboutImg from '../assets/sofa.jpg';
import InnerHero from '../Components/InnerHero';


const AboutPage = () => {
  return (
    <>
        <InnerHero
        title="About Us"
        subtitle="Welcome to the world of NAVO. Let's reimagine the way you work, play, live, and thrive."
        backgroundImage={aboutImg}
      />
    </>
  )
}

export default AboutPage