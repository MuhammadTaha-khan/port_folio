'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/logo.png';

type SectionId = 'about' | 'skills' | 'projects' | 'contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionId | ''>('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let currentSection: SectionId | '' = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute('id') as SectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: SectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-20 bg-white shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logo" width={32} height={32} />
        <span className="text-xl font-bold">Personal</span>
      </div>
      

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links Section - Hidden on Mobile */}
      <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" className="font-semibold" onClick={(e) => scrollToSection(e, 'about')}>About Me</a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" className="font-semibold" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" className="font-semibold" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" className="font-semibold" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</a>
        </li>
        {/* Resume Button - Hidden on Desktop, Shown in Mobile Menu */}
        <li className="md:hidden bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Link href="/resume.pdf" download className="flex items-center space-x-2">
            <span>Resume</span>
            <FaFileDownload />
          </Link>
        </li>
      </ul>

      {/* Resume Button - Shown on Desktop, Hidden in Mobile */}
      <div className="hidden md:flex bg-black text-white px-4 py-2 rounded-md items-center space-x-2">
        <Link href="/resume.pdf" download className="flex items-center space-x-2">
          <span>Resume</span>
          <FaFileDownload />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;









// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../../../public/logo.png';

// // Define the type for the section IDs to ensure they match the HTML IDs you have in your sections
// type SectionId = 'about' | 'skills' | 'projects' | 'contact';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [activeSection, setActiveSection] = useState<SectionId | ''>('');

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // ScrollSpy Logic
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll<HTMLElement>('section[id]'); // Type assertion for HTMLElement
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

//   // Function to handle smooth scrolling
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
//     <nav className="flex justify-between items-center py-4 px-20 bg-white ">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Image src={logo} alt="Logo" width={32} height={32} />
//         <span className="text-xl font-bold cursor-pointer">Personal</span>
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
//           {/* Updated to use scrollToSection function */}
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

















