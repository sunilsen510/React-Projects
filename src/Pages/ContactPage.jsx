import React from 'react'
import { ContactForm } from '../Components/ContactForm'
import InnerHero from '../Components/InnerHero'
import contactImg from '../assets/store-slider.png';

const ContactPage = () => {
  return (
    <>
    <InnerHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us anytime!"
        backgroundImage={contactImg}
        height="h-[50vh]"
      />
      <ContactForm />
    </>
  )
}

export default ContactPage