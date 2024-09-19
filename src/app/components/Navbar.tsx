"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-20 bg-white ">
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
        <li>
          <Link href="/about" className="font-semibold">About Me</Link>
        </li>
        <li>
          <Link href="#skills" className="font-semibold">Skills</Link>
        </li>
        <li>
          <Link href="#projects" className="font-semibold">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="font-semibold">Contact Me</Link>
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




















// import Link from "next/link";
// import { FaFileDownload } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <img src="/logo.png" alt="Logo" className="w-8 h-8" />
//         <span className="text-xl font-bold">Personal</span>
//       </div>
//       {/* Links Section */}
//       <ul className="hidden md:flex space-x-8">
//         <li>
//           <Link href="#about-me" className="text-gray-600 hover:text-black">
//             About Me
//           </Link>
//         </li>
//         <li>
//           <Link href="#skills" className="text-gray-600 hover:text-black">
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link href="#projects" className="text-gray-600 hover:text-black">
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link href="#contact-me" className="text-gray-600 hover:text-black">
//             Contact Me
//           </Link>
//         </li>
//       </ul>

//       {/* Resume Button */}
//       <div className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2">
//         <Link
//           href="/resume.pdf"
//           download
//           className="flex items-center space-x-2"
//         >
//           <span>Resume</span>
//           <FaFileDownload />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



