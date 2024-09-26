import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaYoutube, FaApple } from 'react-icons/fa'; 

interface ExperienceItemProps {
  company: string;
  title: string;
  description: string;
  dateRange: string;
  icon: string;
  bgColor: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  title,
  description,
  dateRange,
}) => {
  // Function to dynamically return the correct icon
  const renderIcon = () => {
    switch (company.toLowerCase()) {
      case 'google':
        return <FcGoogle className="h-12 w-12" />;
      case 'youtube':
        return <FaYoutube className="h-12 w-12 text-red-600" />;
      case 'apple':
        return <FaApple className="h-12 w-12 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={` flex justify-center items-center`}>
      <div className="flex flex-col md:flex-row  text-white p-6 rounded-lg shadow-lg max-w-5xl mx-5 px-5 mb-5 hover:bg-[#27272a] border border-white">
        <div className="md:ml-6 mt-4 md:mt-0">
          <div className="Experience flex justify-between items-center">
            <div className=" flex items-center justify-center gap-6">
              {renderIcon()} 
              <h3 className="text-xl font-bold">
                {title} at {company}
              </h3>
            </div>
            <p className="text-white">{dateRange}</p>
          </div>
          <p className="text-white mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-4xl font-normal mb-8 text-center">My <span className="text-white font-bold">Experience</span></h2>
      <ExperienceItem
        company="Google"
        title="Lead Software Engineer"
        description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
        dateRange="Nov 2019 – Present"
        icon="google" 
        bgColor="bg-gray-900"
      />
      <ExperienceItem
        company="YouTube"
        title="Software Engineer"
        description="At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
        dateRange="Jan 2017 – Oct 2019"
        icon="youtube"
        bgColor="bg-gray-800"
      />
      <ExperienceItem
        company="Apple"
        title="Junior Software Engineer"
        description="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
        dateRange="Jan 2016 – Dec 2017"
        icon="apple"
        bgColor="bg-gray-700"
      />
    </section>
  );
};

export default Experience;















// import React from 'react';
// import { FcGoogle } from "react-icons/fc";

// interface ExperienceItemProps {
//   company: string;
//   title: string;
//   description: string;
//   dateRange: string;
//   icon: string;
//   bgColor: string;
// }

// const ExperienceItem: React.FC<ExperienceItemProps> = ({
//   company,
//   title,
//   description,
//   dateRange,
//   icon,
//   bgColor
// }) => {
//   return (

//     <div className="flex justify-center items-center ">
//     <div className="flex flex-col md:flex-row bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-5xl mx-5 px-5 mb-5">
//       {/* Right section with content */}
//       <div className="md:ml-6 mt-4 md:mt-0">
//         <div className="flex justify-between items-center">
//           <div className=" flex items-center justify-center gap-6">
//             <FcGoogle className="h-12 w-12" /> {/* Google Icon */}
//             <h3 className="text-xl font-bold">
//               {title} at {company}
//             </h3>
//           </div>
//           <p className="text-gray-400">{dateRange}</p>
//         </div>
//         <p className="text-gray-300 mt-6">
//           {description}
//         </p>
//       </div>
//     </div>
//   </div>
//   );
// };

// const Experience = () => {
//   return (
//     <section className="bg-black text-white py-12 px-6 ">
//       <h2 className="text-4xl font-normal mb-8 text-center">My <span className="text-white font-bold">Experience</span></h2>
//       <ExperienceItem
//         company="Google"
//         title="Lead Software Engineer"
//         description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
//         dateRange="Nov 2019 – Present"
//         icon="/google-icon.png" // Add appropriate icons
//         bgColor="bg-gray-900"
//       />
//       <ExperienceItem
//         company="YouTube"
//         title="Software Engineer"
//         description="At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
//         dateRange="Jan 2017 – Oct 2019"
//         icon="/youtube-icon.png"
//         bgColor="bg-gray-800"
//       />
//       <ExperienceItem
//         company="Apple"
//         title="Junior Software Engineer"
//         description="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission- critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross- functional team."
//         dateRange="Jan 2016 – Dec 2017"
//         icon="/apple-icon.png"
//         bgColor="bg-gray-700"
//       />
//     </section>
//   );
// };

// export default Experience;

























