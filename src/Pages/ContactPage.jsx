import React from 'react';
import { ContactForm } from '../Components/ContactForm';
import InnerHero from '../Components/InnerHero';
import contactImg from '../assets/store-slider.png';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';


const ContactPage = () => {
  const loading = useLoader(1000); 

  if (loading) return <Loader />;

  return (
    <>
      <section className="w-full h-auto bg-gray-100">
        <InnerHero
          title="contact.title"
          subtitle="contact.subtitle"
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

