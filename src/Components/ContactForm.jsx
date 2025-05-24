import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import contactImg from '../../public/assets/main-img.png';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email: z.string().trim().email('Invalid email'),
  message: z.string().trim().min(10, 'Message should be at least 10 characters'),
});

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* <section className="bg-gray-100">
        <div className='max-w-[90%] ml-auto flex items-center justify-center gap-4'>
          <div className="p-4 md:max-w-7xl w-full md:w-1/2 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>

            {submitted && <p className="text-green-600 mb-4">Message sent successfully!</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-2">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  autoComplete="off"
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  autoComplete="off"
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2 h-full">
            <img src={contactImg} alt="Contact Illustration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section> */}



  <section className="bg-gray-100 xl:py-0 xl:px-0 sm:py-10">
    <div className="w-full max-w-[90%] mx-auto lg:mx-0 lg:ml-auto flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Contact Form Section */}
      <div className="w-full  md:w-full lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>

        {submitted && <p className="text-green-600 mb-4">Message sent successfully!</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              {...register('name')}
              autoComplete="off"
              className="w-full border border-gray-300 p-2 rounded text-gray-700"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">Email</label>
            <input
              type="email"
              {...register('email')}
              autoComplete="off"
              className="w-full border border-gray-300 p-2 rounded text-gray-700"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">Message</label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full border border-gray-300 p-2 rounded text-gray-700"
              placeholder="Your Message"
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-full lg:w-1/2 flex justify-center">
        <img
          src={contactImg}
          alt="Contact"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>

    </>
  );
};
