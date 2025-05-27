import React from 'react';
import { ContactForm } from '../Components/ContactForm';
import InnerHero from '../Components/InnerHero';
import contactImg from '../assets/store-slider.png';

const ContactPage = () => {
  return (
    <>
      <section className="w-full h-auto bg-gray-100">
        <InnerHero
          title="Contact Us"
          subtitle="Our key focus is you, the user. Our entire approach revolves around understanding your unique needs, preferences, and aspirations!"
          backgroundImage={contactImg}
          titleColor="text-white"
          subtitleColor="text-white"
        />
      </section>
      <ContactForm />
    </>
  );
};

export default ContactPage;

