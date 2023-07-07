import React from 'react';

const About = () => {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className='py-10'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center text-gray-800 my-8 mt-24'>
            Om Linebox
          </h1>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <p className='text-lg text-gray-700 leading-relaxed mb-8 mt-6'>
              Linebox er et profesjonelt flytte- og lagringsselskap basert i
              Oslo, Norge. Vi spesialiserer oss på å tilby pålitelige og
              effektive flyttetjenester for både privat- og bedriftskunder. Vårt
              erfarne team av flyttemedarbeidere sørger for at eiendelene dine
              blir håndtert med forsiktighet og trygt levert til ditt nye sted.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              Vi tilbyr et bredt spekter av flyttetjenester, inkludert lokale og
              langdistanseflyttinger, kontorflyttinger og lagringsløsninger, for
              å imøtekomme alle dine flyttebehov. Vi prioriterer
              kundetilfredshet og streber etter å gjøre din flytteopplevelse så
              enkel og stressfri som mulig.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              Kontakt oss i dag for å diskutere dine flyttebehov og få et
              tilpasset tilbud. Vi ser frem til å hjelpe deg med din kommende
              flytting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
