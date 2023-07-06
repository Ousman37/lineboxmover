import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Main() {
  return (
    <>
      <body className='overflow-x-hidden'>
        <section id='headline' className='relative overflow-hidden'>
          <div className='absolute inset-x-0 top-0 h-px bg-slate-900/5 dark:bg-slate-100/5' />
          <div
            className='container flex items-center justify-center mx-auto px-4 max-w-8xl h-screen mt-20' // Added 'mt-20' class for top margin
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-section.jpeg')`, // Added linear gradient for background transparency
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}>
            <div className='flex flex-col items-center text-center w-full'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4'>
                Enklere flytting med linebox, din problemfrie flytteløsning.
              </h1>
              <p className='mt-2 text-lg md:text-xl lg:text-2xl text-white'>
                På Linebox tilbyr vi et bredt spekter av tilpassede
                flyttetjenester for å imøtekomme dine unike behov. Vårt team av
                erfarne flyttearbeidere er her for å gjøre flyttingen din så
                stressfri og praktisk som mulig. Enten du flytter innenfor samme
                by eller på tvers av landet, er vi her for deg. Våre tjenester
                inkluderer:
              </p>
              <a
                href='contact'
                className='inline-block px-6 py-3 mt-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-xl'>
                Bestill flyttingen din i dag
              </a>
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/5 dark:bg-slate-100/5' />
        </section>

        <section>
          <h2 className='text-center pr-3 pt-5 mb-5'>
            Grunner til å vurdere Linebox for dine flyttebehov
          </h2>
          <section
            className='service-section py-8 md:py-16 lg:py-24'
            style={{
              backgroundColor: '#f5f5f5',
            }}>
            <div className='container mx-auto px-4'>
              <div
                className='card md:flex items-center shadow-lg'
                style={{
                  maxWidth: '1140px',
                  margin: '0 auto',
                }}>
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
          <section className='contact-section py-8 md:py-16 lg:py-24'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='card shadow-lg'>
                  <div className='card-content p-8'>
                    <h3 className='text-orange-500 md:text-xl'>
                      3: Fyll ut kontaktskjemaet:
                    </h3>
                    <p className='card-text text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500'>
                      For å kunne gi deg en mer nøyaktig prisforespørsel, setter
                      vi pris på om du kan gi oss så mye informasjon som mulig
                      om oppdraget ditt når du fyller ut kontaktskjemaet.
                    </p>
                  </div>
                </div>
                <div className='card shadow-lg'>
                  <div className='card-content p-8'>
                    <h3 className='text-orange-500  md:text-xl'>
                      3: Fyll ut kontaktskjemaet:
                    </h3>
                    <p className='card-text text-lg md:text-xl lg:text-2xl text-gray-500'>
                      For å kunne gi deg en mer nøyaktig prisforespørsel, setter
                      vi pris på om du kan gi oss så mye informasjon som mulig
                      om oppdraget ditt når du fyller ut kontaktskjemaet.
                    </p>
                  </div>
                </div>
                <div className='card shadow-lg'>
                  <div className='card-content p-8'>
                    <h3 className='text-orange-500  md:text-xl'>
                      3: Fyll ut kontaktskjemaet:
                    </h3>
                    <p className='card-text text-lg md:text-xl lg:text-2xl text-gray-500'>
                      For å kunne gi deg en mer nøyaktig prisforespørsel, setter
                      vi pris på om du kan gi oss så mye informasjon som mulig
                      om oppdraget ditt når du fyller ut kontaktskjemaet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className='service-section py-8 md:py-16 lg:py-24'
            style={{
              backgroundColor: '#f5f5f5',
            }}>
            <div className='container mx-auto px-4'>
              <div
                className='card md:flex items-center shadow-lg'
                style={{
                  maxWidth: '1140px',
                  margin: '0 auto',
                }}>
                <img
                  src='/images/quick.jpeg'
                  alt='Quick Movers'
                  className='card-image md:w-1/2 p-8'
                />
                <div className='card-content md:w-1/2 p-8'>
                  <p className='card-text text-lg md:text-xl lg:text-2xl'>
                    Leter du etter et pålitelig flyttebyrå i Oslo eller Viken?
                    Søk ikke lenger enn Linebox. Vi spesialiserer oss på å tilby
                    omfattende flyttetjenester for alle typer flyttinger, enten
                    de er store eller små. Fra pakking og transport til
                    rengjøring og avfallshåndtering, kan vi håndtere alle
                    aspekter av flyttingen i henhold til dine spesifikke behov.
                    Vi forstår at flytting kan være en skremmende oppgave,
                    derfor tilbyr vi ekstra tjenester som flyttevask og
                    møbeloppbevaring for å forenkle prosessen for deg. Som et av
                    de best rangerte flyttebyråene i Oslo, er vi forpliktet til
                    å sikre en jevn og stressfri flytteopplevelse for alle våre
                    kunder. Enten du trenger hjelp med en husstandsflytting
                    eller opprydning av en eiendom, kan du stole på oss for å gi
                    den ekspertisen og støtten du trenger for å få flyttingen
                    din til å bli vellykket. Kontakt oss i dag for å lære mer om
                    våre tjenester og hvordan vi kan hjelpe deg med din
                    flytting.
                  </p>
                  <a
                    href='contact'
                    className='inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg sm:inline sm:mt-0 sm:ml-4'>
                    Få svar - Ofte stilte spørsmål
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className='custom-section-services custom-inner-section'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap -mx-4 justify-center'>
                <div className='w-full md:w-1/3 px-4 mb-5'>
                  <div className='card-img h-full relative'>
                    <img
                      src='/images/premier-movers.jpeg'
                      alt=''
                      className='img-fluid-services object-cover w-full h-full'
                    />
                    <div className='card-body absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center'>
                      <h3 className='card-title text-white text-center'>
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
                      <h3 className='card-title text-white text-center'>
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
                      <h3 className='card-title text-white text-center'>
                        Flyttehjelp
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className='text-center mt-4'>
            <a
              href='contact'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Bestill flyttingen din i dag
            </a>
          </div>

          <section className='bg-white py-8'>
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
                      løsninger for å møte dine individuelle behov og ønsker,
                      slik at du kan fokusere på å komme videre til ditt nye
                      hjem. Velg LineBox for å få en trygg og pålitelig
                      flytteopplevelse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </body>
    </>
  );
}

export default Main;
