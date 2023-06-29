import React from 'react';

const About = () => {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-ff9000 py-10'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8 mt-8'>
          About Linebox
        </h1>
        <p className='text-lg text-gray-700 leading-relaxed mb-8 mt-6'>
          Linebox is a professional moving and storage company based in Oslo,
          Norway. We specialize in providing reliable and efficient moving
          services for residential and commercial customers. Our team of
          experienced movers ensures that your belongings are handled with care
          and delivered to your new location safely.
        </p>
        <p className='text-lg text-gray-700 leading-relaxed mb-8'>
          With our wide range of moving services, including local and
          long-distance moves, office relocations, and storage solutions, we
          cater to all your moving needs. We prioritize customer satisfaction
          and strive to make your moving experience as smooth and stress-free as
          possible.
        </p>
        <p className='text-lg text-gray-700 leading-relaxed mb-8'>
          Contact us today to discuss your moving requirements and get a
          personalized quote. We look forward to assisting you with your
          upcoming move!
        </p>
      </div>
    </div>
  );
};

export default About;
