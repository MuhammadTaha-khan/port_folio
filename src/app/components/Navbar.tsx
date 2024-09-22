"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { FaFileDownload } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      // Set timeout for the 4-second scroll duration
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 4000); // 4 seconds (4000ms)
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">Personal</span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* This div will show on larger screens */}
          <div className="hidden md:flex bg-black text-white px-4 py-2 rounded-md items-center space-x-2">
            <Link href="/resume.pdf" download className="flex items-center space-x-2">
              <span>Resume</span>
              <FaFileDownload />
            </Link>
          </div>

          {/* Menu button */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar items */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`block py-2 px-3 rounded ${activeSection === 'about' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className={`block py-2 px-3 rounded ${activeSection === 'skills' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className={`block py-2 px-3 rounded ${activeSection === 'projects' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`block py-2 px-3 rounded ${activeSection === 'contact' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
              >
                Contact Me
              </a>
            </li>
            {/* This resume link will show in the menu when the screen is less than 768px */}
            <li className="md:hidden ">
              <Link
                href="/resume.pdf"
                download
                className="block  bg-black text-white px-4 py-4 rounded-md items-center space-x-2 w-40"
              >
                <span>Resume</span>
                <FaFileDownload className="inline ml-2" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import logo from '../../../public/logo.png';
// import { FaFileDownload } from 'react-icons/fa';
// import Link from 'next/link';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>('About Me');

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.3, // Trigger when 30% of the section is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.getAttribute('id');
//           if (sectionId) setActiveSection(sectionId);
//         }
//       });
//     }, observerOptions);

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-2">
//           <Image src={logo} alt="Logo" width={32} height={32} />
//           <span className="text-xl font-bold">Personal</span>
//         </a>

//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           {/* This div will show on larger screens */}
//           <div className="hidden md:flex bg-black text-white px-4 py-2 rounded-md items-center space-x-2">
//             <Link href="/resume.pdf" download className="flex items-center space-x-2">
//               <span>Resume</span>
//               <FaFileDownload />
//             </Link>
//           </div>

//           {/* Menu button */}
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded={isMenuOpen}
//             onClick={handleMenuToggle}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navbar items */}
//         <div
//           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#about"
//                 className={`block py-2 px-3 rounded ${activeSection === 'about' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
//               >
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#skills"
//                 className={`block py-2 px-3 rounded ${activeSection === 'skills' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className={`block py-2 px-3 rounded ${activeSection === 'projects' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className={`block py-2 px-3 rounded ${activeSection === 'contact' ? 'font-bold' : 'text-black'} md:bg-transparent md:p-0 dark:text-white`}
//               >
//                 Contact Me
//               </a>
//             </li>
//             {/* This resume link will show in the menu when the screen is less than 768px */}
//             <li className="md:hidden ">
//               <Link
//                 href="/resume.pdf"
//                 download
//                 className="block  bg-black text-white px-4 py-4 rounded-md items-center space-x-2 w-40"
//               >
//                 <span>Resume</span>
//                 <FaFileDownload className="inline ml-2" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
















//last time code
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '../../../public/logo.png';
// import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';

// type SectionId = 'about' | 'skills' | 'projects' | 'contact';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [activeSection, setActiveSection] = useState<SectionId | ''>('');

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll<HTMLElement>('section[id]');
//       let currentSection: SectionId | '' = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         if (window.scrollY >= sectionTop - 50) {
//           currentSection = section.getAttribute('id') as SectionId;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: SectionId) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-20 bg-white shadow-md z-50">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Image src={logo} alt="Logo" width={32} height={32} />
//         <span className="text-xl font-bold">Personal</span>
//       </div>
      

//       {/* Hamburger Menu Icon */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="text-2xl focus:outline-none">
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Links Section - Hidden on Mobile */}
//       <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
//         <li className={activeSection === 'about' ? 'active' : ''}>
//           <a href="#about" className="font-semibold" onClick={(e) => scrollToSection(e, 'about')}>About Me</a>
//         </li>
//         <li className={activeSection === 'skills' ? 'active' : ''}>
//           <a href="#skills" className="font-semibold" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
//         </li>
//         <li className={activeSection === 'projects' ? 'active' : ''}>
//           <a href="#projects" className="font-semibold" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
//         </li>
//         <li className={activeSection === 'contact' ? 'active' : ''}>
//           <a href="#contact" className="font-semibold" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</a>
//         </li>
//         {/* Resume Button - Hidden on Desktop, Shown in Mobile Menu */}
//         <li className="md:hidden bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
//           <Link href="/resume.pdf" download className="flex items-center space-x-2">
//             <span>Resume</span>
//             <FaFileDownload />
//           </Link>
//         </li>
//       </ul>

//       {/* Resume Button - Shown on Desktop, Hidden in Mobile */}
//       <div className="hidden md:flex bg-black text-white px-4 py-2 rounded-md items-center space-x-2">
//         <Link href="/resume.pdf" download className="flex items-center space-x-2">
//           <span>Resume</span>
//           <FaFileDownload />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;