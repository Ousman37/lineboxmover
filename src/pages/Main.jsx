import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <body className='overflow-x-hidden'>
        <section id='headline' className='relative overflow-hidden'>
          <div className='absolute inset-x-0 top-0 h-px bg-gray-300' />
          <div
            className='container flex items-center justify-center mx-auto px-4 max-w-8xl h-screen mt-20'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-section.jpeg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}>
            <div className='flex flex-col items-center text-center w-full'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4'>
                Vi forenkler flyttingen med Linebox - din problemfrie løsning
                for flytting.
              </h1>
              <p className='mt-2 text-lg md:text-xl lg:text-2xl text-white'>
                Linebox tilbyr skreddersydde flyttetjenester for å møte dine
                unike behov. Vårt erfarne team av flyttearbeidere er dedikert
                til å gjøre flyttingen din så enkel og praktisk som mulig.
                Uansett om du flytter lokalt eller over lange avstander, kan du
                stole på oss. Våre tjenester inkluderer:
              </p>
              <Link
                to='/contact'
                className='inline-block px-6 py-3 mt-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 text-xl'>
                Bestill flyttingen din i dag
              </Link>
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 h-px bg-gray-300' />
        </section>

        <section>
          <h2 className='text-center text-2xl font-bold py-4'>
            Grunner til å vurdere Linebox for dine flyttebehov
          </h2>
          <section className='service-section py-8 md:py-16 lg:py-24 bg-gray-100'>
            <div className='container mx-auto px-4'>
              <div className='flex flex-col md:flex-row items-center md:items-stretch shadow-lg'>
                <img
                  src='/images/quick.jpeg'
                  alt='Quick Movers'
                  className='card-image md:w-1/2 p-8'
                />
                <div className='card-content md:w-1/2 p-8'>
                  <p className='card-text text-lg md:text-xl lg:text-2xl'>
                    På Linebox tilbyr vi et bredt spekter av tilpassede
                    flyttetjenester for å imøtekomme dine unike behov. Vårt team
                    av erfarne flyttearbeidere er her for å gjøre flyttingen din
                    så stressfri og praktisk som mulig. Enten du flytter
                    innenfor samme by eller på tvers av landet, er vi her for
                    deg. Våre tjenester inkluderer:
                  </p>
                  <ul className='custom-icon-list list-none mt-6'>
                    <li className='custom-icon-list-item flex items-center mb-4'>
                      <FaCheck className='check-icon mr-2' />
                      <span className='custom-icon-list-text text-lg md:text-xl lg:text-2xl'>
                        Konkurransedyktige priser
                      </span>
                    </li>
                    <li className='custom-icon-list-item flex items-center mb-4'>
                      <FaCheck className='check-icon mr-2' />
                      <span className='custom-icon-list-text text-lg md:text-xl lg:text-2xl'>
                        Et godt rykte med hundrevis av fornøyde kunder
                      </span>
                    </li>
                    <li className='custom-icon-list-item flex items-center mb-4'>
                      <FaCheck className='check-icon mr-2' />
                      <span className='custom-icon-list-text text-lg md:text-xl lg:text-2xl'>
                        Pålitelig ankomst på avtalt dato og tidspunkt
                      </span>
                    </li>
                    <li className='custom-icon-list-item flex items-center mb-4'>
                      <FaCheck className='check-icon mr-2' />
                      <span className='custom-icon-list-text text-lg md:text-xl lg:text-2xl'>
                        Omfattende forsikringsdekning
                      </span>
                    </li>
                    <li className='custom-icon-list-item flex items-center mb-4'>
                      <FaCheck className='check-icon mr-2' />
                      <span className='custom-icon-list-text text-lg md:text-xl lg:text-2xl'>
                        Alt-i-ett flytteløsninger, inkludert midlertidig
                        lagring, flytterengjøring, pakking og avfallshåndtering
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <h2 className='text-center text-2xl font-bold py-4'>
            Oppdag våre tjenester
          </h2>
          <p className='text-gray-600 px-4'>
            Med vår omfattende erfaring og løsningsorienterte tilnærming til
            logistikk, tilbyr vi et bredt spekter av fleksible flyttetjenester
            til de mest konkurransedyktige prisene i bransjen. Vi prioriterer
            kvalitet og leverer raske og pålitelige flyttetjenester for alle
            dine behov, inkludert transport av store gjenstander som safes og
            møbler, samt rydding og håndtering av eiendommer.
          </p>
        </section>

        <section className='custom-section-services custom-inner-section py-8 md:py-16 lg:py-24 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full md:w-1/3 px-4 mb-5'>
                <div className='card-img h-full relative'>
                  <img
                    src='/images/premier-movers.jpeg'
                    alt=''
                    className='img-fluid-services object-cover w-full h-full'
                  />
                  <div className='card-body absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center'>
                    <h3
                      className='card-title text-white text-center'
                      style={{ textShadow: '1px 1px 2px #000000' }}>
                      Minilager
                    </h3>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 px-4 mb-5'>
                <div className='card-img h-full relative'>
                  <img
                    src='/images/expert-movers.jpeg'
                    alt=''
                    className='img-fluid-services object-cover w-full h-full'
                  />
                  <div className='card-body absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center'>
                    <h3
                      className='card-title text-white text-center'
                      style={{ textShadow: '1px 1px 2px #000000' }}>
                      Kontorflytting
                    </h3>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 px-4 mb-5'>
                <div className='card-img h-full relative'>
                  <img
                    src='/images/reddy-movers.jpeg'
                    alt=''
                    className='img-fluid-services object-cover w-full h-full'
                  />
                  <div className='card-body absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center'>
                    <h3
                      className='card-title text-white text-center'
                      style={{ textShadow: '1px 1px 2px #000000' }}>
                      Flyttehjelp
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='text-center mt-4 mb-8'>
          <Link
            to='/contact'
            className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Bestill flyttingen din i dag
          </Link>
        </div>

        <section className='bg-gray-100 py-8'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap items-center'>
              <div className='w-full md:w-1/2 p-4'>
                <img
                  className='w-full h-auto max-h-96 object-cover'
                  src='/images/moving-services.jpeg'
                  alt='LINEBOX img'
                />
              </div>
              <div className='w-full md:w-1/2 p-4'>
                <div className='px-4'>
                  <h5 className='text-2xl font-bold mb-4'>
                    Velkommen til LineBox – ditt pålitelige flyttefirma i Oslo
                  </h5>
                  <p className='text-gray-600'>
                    Vi strekker oss langt for å gjøre din flytteopplevelse så
                    enkel og stressfri som mulig. Med vår ekspertise og
                    erfaring, kan du være trygg på at dine eiendeler vil bli
                    håndtert med omsorg og presisjon. Vi tilbyr skreddersydde
                    løsninger for å møte dine individuelle behov og ønsker, slik
                    at du kan fokusere på å komme videre til ditt nye hjem. Velg
                    LineBox for å få en trygg og pålitelig flytteopplevelse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Main;
