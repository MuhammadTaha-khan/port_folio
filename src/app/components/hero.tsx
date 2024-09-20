"use client";
import Image from 'next/image';
import React from "react";
import image from '../../../public/Banner.png';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly px-8 pt-20" id="hero">
      {/* Left Side - Text */}
      <div className="flex flex-col space-y-4 max-w-lg">
        <h1 className="text-5xl font-normal text-black leading-[1.5] gap-10">
          Hello I&apos;m <span className="text-black font-bold">Evren Shah.</span> <br />
          <span className="text-black font-bold">Frontend</span> <span className="text-black custom-text-border">Developer</span>
          <br />
          Based in <span className="text-black font-bold">India.</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base pb-10 pt-5">
          I&apos;m Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 md:mt-0">
        <Image
          src={image}
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Hero;
// "use client";
// import Image from 'next/image'
// import React from "react";
// import image from '../../../public/Banner.png'
// import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

// const Hero: React.FC = () => {
//   return (
 
//     <section className="flex flex-col md:flex-row items-center justify-evenly px-8 pt-20" id='hero'>
//       {/* Left Side - Text */}
//       <div className="flex flex-col space-y-4 max-w-lg">
//         <h1 className="text-5xl font-normal text-black leading-[1.5] gap-10">
//           Hello I&apos;am <span className="text-black font-bold">Evren Shah.</span> <br />
//           <span className="text-black font-bold">Frontend</span> <span className="text-black custom-text-border">Developer</span>
//           <br />
//           Based in <span className="text-black font-bold">India.</span>
//         </h1>
//         <p className="text-gray-600 text-sm md:text-base pb-10 pt-5">
//           I&apos;m Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//         </p>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4 ">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4 ">
//             <FaFacebook size={24} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4 ">
//             <FaTwitter size={24} />
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black  hover:bg-black hover:text-white border-2 p-4 ">
//             <FaGithub size={24} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-black hover:text-white border-2 p-4 ">
//             <FaLinkedin size={24} />
//           </a>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="mt-8 md:mt-0">
//       <Image
//       src={image}
//       width={600}
//       height={600}
//       alt="Picture of the author"
//     />
//       </div>
//     </section>
//   );
// };

// export default Hero;
