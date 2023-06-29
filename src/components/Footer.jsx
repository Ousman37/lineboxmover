import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h6 className='text-xl font-bold mb-4'>
              LINEBOX Flytteservice - Totalleverandør for flytting i Oslo og
              Akershus!
            </h6>
          </div>
          <div>
            <h6 className='text-xl font-bold mb-4'>Contact Details</h6>
            <p>Adresse: Nedre Ullevål 4 c 0850 Oslo</p>
            <p>Telefon: 96800897</p>
            <p>Email: Post@linebox.no</p>
          </div>
          <div>
            <h6 className='text-xl font-bold mb-4'>Quick Links</h6>
            <ul className='footer-links'>
              <li>
                <a href='/'>Kontakt</a>
              </li>
              <li>
                <a href='/'>Minilager Oslo</a>
              </li>
              <li>
                <a href='/'>Kontorflytting Oslo</a>
              </li>
              <li>
                <a href='/'>Flyttehjelp Oslo</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-8' />
        <div className='flex justify-between'>
          <div>
            <p className='text-gray-500'>
              &copy; 2023 All Rights Reserved | Designed by Ethmane
            </p>
          </div>
          <div>
            <ul className='social-icons'>
              <li>
                <a className='facebook' href='/'>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li>
                <a className='instagram' href='/'>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
