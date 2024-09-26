import React from "react";
import projImage1 from "../../../public/project-images/projimg1.png";
import projImage2 from "../../../public/project-images/projimg2.png";
import projImage3 from "../../../public/project-images/projimg3.png";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: projImage1,
  },
  {
    id: 2,
    title: "Freelance Marketplace Platform",
    description:
      "This platform helps freelancers and clients connect easily for various projects. Built with React, Node, and MongoDB to ensure efficient performance and scalability.",
    imageUrl: projImage2,
  },
  {
    id: 3,
    title: "Task Management Application",
    description:
      "An application to manage daily tasks efficiently. It helps users create, assign, and track tasks in real-time, with notifications and analytics features.",
    imageUrl: projImage3,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="bg-black text-white pt-20 px-6 lg:px-24">
        <h2 className="text-4xl font-normal mb-16 text-center ">
          My <span className="text-white font-bold ">Projects</span>
        </h2>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`myproject flex flex-col gap-10 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center mb-12 lg:mb-14` }
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col ">
              <h3 className="text-5xl font-bold mb-6"> {`0${index + 1}`}</h3>
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <Link href={`/project/${project.id}`}>
                <FiExternalLink className="mt-3 text-lg cursor-pointer text-white " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
















// import React from "react";
// import projImage1 from "../../../public/project-images/projimg1.png";
// import projImage2 from "../../../public/project-images/projimg2.png";
// import projImage3 from "../../../public/project-images/projimg3.png";
// import Image from "next/image";
// import { FiExternalLink } from "react-icons/fi";
// import Link from "next/link";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: StaticImageData;
//   goto: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Crypto Screener Application",
//     description:
//       "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     imageUrl: projImage1,
//     goto: "/Descfirst",
//   },
//   {
//     id: 2,
//     title: "Freelance Marketplace Platform",
//     description:
//       "This platform helps freelancers and clients connect easily for various projects. Built with React, Node, and MongoDB to ensure efficient performance and scalability.",
//     imageUrl: projImage2,
//     goto: "/Descsecond",
//   },
//   {
//     id: 3,
//     title: "Task Management Application",
//     description:
//       "An application to manage daily tasks efficiently. It helps users create, assign, and track tasks in real-time, with notifications and analytics features.",
//     imageUrl: projImage3,
//     goto: "/Descthird",
//   },
// ];

// const ProjectSection = () => {
//   return (
//     <section id="projects">
//       <div className="bg-black text-white pt-20 px-6 lg:px-24">
//         <h2 className="text-4xl font-normal mb-16 text-center ">
//           My <span className="text-white font-bold">Projects</span>
//         </h2>
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`flex flex-col gap-10 ${
//               index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//             } items-center mb-12 lg:mb-14`}
//           >
//             <div className="lg:w-1/2 mb-6 lg:mb-0">
//               <Image
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="rounded-lg shadow-lg w-full object-cover"
//               />
//             </div>
//             <div className="lg:w-1/2 px-4 flex flex-col ">
//               <h3 className="text-5xl font-bold mb-6">{`0${index + 1}`}</h3>
//               <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
//               <p className="text-gray-400">{project.description}</p>
//               <Link href={{ pathname: project.goto, query: { img: project.imageUrl.src } }}>
//                 <FiExternalLink className="mt-3 text-lg cursor-pointer text-white" />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
