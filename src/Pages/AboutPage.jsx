import React from 'react'
import aboutImg from '../assets/aboutImg.jpg';
import InnerHero from '../Components/InnerHero';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  const title = "About Us";
  return (
    <>
     <section className="bg-gray-100 py-16">
        <div className="xl:max-w-[80%] md:max-w-full mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <InnerHero
            contentImage={aboutImg}
            showContentImage={true}
            title=""
            subtitle=""
            />
          <div className="space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p>NAVO is a lifestyle brand that redefines ergonomics. We go beyond just selling products. We’re your trusted partner on your ergonomic journey, providing guidance and expertise with ease and confidence. Our goal is to promote a healthier and more fulfilling lifestyle by incorporating ergonomics into every aspect of your life.
             Join us on this transformative journey, where the fusion of expertise and approachability sets NAVO apart as a leader in ergonomic living.</p>
            <p>NAVO, initially known as NAVODESK, was founded by Saim Damudi in 2019. In just a few years, we evolved and, in 2023, rebranded as NAVO, ushering in a new era of ergonomics where our vision extends beyond office furniture. 
             Today, NAVO is your ultimate destination for all things ergonomic. Whether you’re in search of office furniture, work-from-home furniture, ergonomic accessories, or innovative space optimization solutions, NAVO is your go-to destination.</p>
              <Link to="/blogs" className="text-gray-800 border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[10px] px-4 inline-block">
                Read More →
              </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage