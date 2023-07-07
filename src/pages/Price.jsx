import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl mb-8 text-center'>
        Kontakt oss for prisinformasjon
      </h1>
      <p className='text-xl mb-8 text-center'>
        Ønsker du å få informasjon om priser? Ta kontakt med oss!
      </p>
      <div className='flex justify-center'>
        <Link
          to='/contact'
          className='px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300'>
          Kontakt oss
        </Link>
      </div>
    </div>
  );
};

export default Price;
