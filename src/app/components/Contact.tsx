// components/ContactForm.tsx
import React from 'react';
import Image from 'next/image'
import logo from '../../../public/fotterlogo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm: React.FC = () => {
    return (
        <>
        <section id='contact'>
            <div className="flex flex-row max-sm:flex-wrap justify-between items-start p-10 pt-20 bg-white  rounded-lg">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                {/* Your name */}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                {/* Email */}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                {/* your website (if exists) */}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="your website (if exists)" />
                        </div>
                    </div>
                    <div className="w-full ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            {/* How can I help? */}
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter your message..." rows={5}></textarea>
                    </div>
                    

                  {/* <div className="flex justify-between mt-7">
                   <button className="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button">
                       Get in Touch
                   </button>    
                   <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded"><FaFacebookF /></a>
                   <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded"><FaTwitter /></a>
                   <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded"><FaInstagram /></a>
                   <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded"><FaLinkedinIn /></a> 
                 </div> */}



                 <div className="contact-icon">
  <button className="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-4 px-6 rounded" type="button">
    Get in Touch
  </button>
  {/* <div className="flex space-x-8 mt-4 md:mt-0 social-icons"> */}
  <div className="social-icons">
    <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded">
      <FaFacebookF />
    </a>
    <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded">
      <FaTwitter />
    </a>
    <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded">
      <FaInstagram />
    </a>
    <a href="#" className="text-gray-700 border-2 border-black p-5 hover:bg-black hover:text-white rounded">
      <FaLinkedinIn />
    </a>
  </div>
</div> 
</form>
                <div className="flex flex-col justify-center mt-4 p-20 max-sm:p-0">
                    <h2 className="text-4xl font-bold mb-2">Let&apos;s  <span className="custom-text-border" >talk</span> for Something special</h2>
                    <p className="text-gray-700 mb-4">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <p className="text-xl font-semibold ">Youremail@gmail.com</p>
                    <p className="text-lg font-semibold">1234567890</p>
                </div>

            </div>
            <div className=' bg-black text-white p-5'>
                <div className='container mx-auto flex justify-between' >
                    <div className="flex items-center space-x-2">
                    <Image src={logo} alt="Logo" width={32} height={32} />
                        <span className="text-xl font-bold">Personal</span>
                    </div>
                    <div>
                        <p>@2019-2023 personal</p>
                        <p>Made in Figma</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default ContactForm;

















// // components/ContactForm.tsx
// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa';

// const ContactForm: React.FC = () => {
//     return (
//         <>
//         <div className="flex justify-between items-start p-10 bg-white  rounded-lg">
//             <form className="w-full max-w-lg">
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full px-3 mb-6 md:mb-0">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
//                             {/* Your name */}
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name" />
//                     </div>
//                     <div className="w-full px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//                             {/* Email */}
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="you@example.com" />
//                     </div>
//                     <div className="w-full px-3">
//                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//                             {/* your website (if exists) */}
//                         </label>
//                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="your website (if exists)" />
//                     </div>
//                 </div>
//                 <div className="w-full ">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
//                         {/* How can I help? */}
//                         </label>
//                     <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter your message..." rows={5}></textarea>
//                 </div>
//                 <div className="flex justify-between mt-7">
//                     <button className="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="button">
//                         Get in Touch
//                     </button>
//                     {/* <div className="flex space-x-4 mt-4 ml-5"> */}
//                     <a href="#" className="text-gray-700 border-2 p-5 hover:bg-black hover:text-white rounded"><FaFacebookF /></a>
//                     <a href="#" className="text-gray-700 border-2 p-5 hover:bg-black hover:text-white rounded"><FaTwitter /></a>
//                     <a href="#" className="text-gray-700 border-2 p-5 hover:bg-black hover:text-white rounded"><FaInstagram /></a>
//                     <a href="#" className="text-gray-700 border-2 p-5 hover:bg-black hover:text-white rounded"><FaLinkedinIn /></a>
//                     {/* </div> */}
//                 </div>
//             </form>
//             <div className="flex flex-col justify-center ml-10 ">
//                 <h2 className="text-3xl font-bold mb-2">Let's talk for Something special</h2>
//                 <p className="text-gray-700 mb-4">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
//                 <p className="text-lg">Youremail@gmail.com</p>
//                 <p className="text-lg">1234567890</p>
//             </div>
            
//         </div>
//         <div className=' bg-black text-white'>
//         <div className='container mx-auto flex justify-between' >
//             <div className="flex items-center space-x-2">
//                 <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
//                 <span className="text-xl font-bold">Personal</span>
//             </div>
//             <div>
//                 <p>@2019-2023 personal</p>
//                 <p>Made in Figma</p>
//             </div>
//         </div>
//         </div>
//     </>
//     );
// };

// export default ContactForm;






















