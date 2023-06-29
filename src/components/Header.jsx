import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className='flex items-center justify-between px-4 py-2 bg-white fixed top-0 left-0 right-0 z-10 shadow-md'>
        <div className='flex items-center'>
          <a href='/'>
            <img
              src='/images/logo-black.png'
              alt='Logo'
              className='h-16 w-auto mr-2'
            />
          </a>
        </div>
        <nav className='space-x-4 hidden md:block'>
          <a
            href='/'
            className='text-black hover:text-gray-300 transition duration-300'>
            Flytteservice
          </a>
          <a
            href='/pristilbud'
            className='text-black hover:text-gray-300 transition duration-300'>
            Pristilbud
          </a>
          <a
            href='/about'
            className='text-black hover:text-gray-300 transition duration-300'>
            Om oss
          </a>
          <a
            href='/Contact'
            className='text-black hover:text-gray-300 transition duration-300'>
            Kontakt
          </a>
        </nav>
        <div onClick={handleNavToggle} className='md:hidden'>
          {isMobileMenuOpen ? (
            <AiOutlineClose size={25} onClick={handleCloseMenu} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'
          onClick={handleCloseMenu}>
          <div className='max-w-md w-full p-6 bg-white rounded-md'>
            <nav className='text-black'>
              <ul className='space-y-4 text-center'>
                <li>
                  <a
                    href='/'
                    className='block py-2 hover:text-gray-300 transition duration-300'>
                    Flytteservice
                  </a>
                </li>
                <li>
                  <a
                    href='/pristilbud'
                    className='block py-2 hover:text-gray-300 transition duration-300'>
                    Pristilbud
                  </a>
                </li>
                <li>
                  <a
                    href='/about'
                    className='block py-2 hover:text-gray-300 transition duration-300'>
                    Om oss
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='block py-2 hover:text-gray-300 transition duration-300'>
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavToggle = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleCloseMenu = e => {
//     e.stopPropagation(); // Stop event propagation
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className='relative z-10'>
//       <div className='flex items-center justify-between px-4 py-2 bg-white fixed top-0 left-0 right-0 z-10 shadow-md'>
//         <div className='flex items-center'>
//           <a href='/'>
//             <img
//               src='/images/logo-black.png'
//               alt='Logo'
//               className='h-16 w-auto mr-2'
//             />
//           </a>
//         </div>
//         <nav className='space-x-4 hidden md:block'>
//           <a
//             href='/'
//             className='text-black hover:text-gray-300 transition duration-300'>
//             Flytteservice
//           </a>
//           <a
//             href='/pristilbud'
//             className='text-black hover:text-gray-300 transition duration-300'>
//             Pristilbud
//           </a>
//           <a
//             href='/about'
//             className='text-black hover:text-gray-300 transition duration-300'>
//             Om oss
//           </a>
//           <a
//             href='/contact'
//             className='text-black hover:text-gray-300 transition duration-300'>
//             Kontakt
//           </a>
//         </nav>
//         <div onClick={handleNavToggle} className='md:hidden'>
//           {isMobileMenuOpen ? (
//             <AiOutlineClose size={25} onClick={handleCloseMenu} />
//           ) : (
//             <AiOutlineMenu size={25} />
//           )}
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div
//           className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'
//           onClick={handleCloseMenu}>
//           <div className='max-w-md w-full p-6 bg-white rounded-md'>
//             <nav className='text-black'>
//               <ul className='space-y-4 text-center'>
//                 <li>
//                   <a
//                     href='/about'
//                     className='block py-2 hover:text-gray-300 transition duration-300'>
//                     Flytteservice
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='/'
//                     className='block py-2 hover:text-gray-300 transition duration-300'>
//                     Pristilbud
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='/about'
//                     className='block py-2 hover:text-gray-300 transition duration-300'>
//                     Om oss
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='/contact'
//                     className='block py-2 hover:text-gray-300 transition duration-300'>
//                     Kontakt
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
