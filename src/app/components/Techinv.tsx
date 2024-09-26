import React from 'react';
// Importing specific icons from react-icons
import { FaGitAlt, FaJsSquare, FaSass, FaNodeJs} from 'react-icons/fa';
import { SiStorybook, SiSocketdotio } from "react-icons/si";

const skills = [
  { name: 'Git', icon: <FaGitAlt size={50} /> },
  { name: 'Javascript', icon: <FaJsSquare size={50} /> },
  { name: 'Sass/Scss', icon: <FaSass size={50} /> },
  { name: 'NestJs', icon: <FaNodeJs size={50} /> },
  { name: 'Storybook', icon: <SiStorybook size={50} /> },
  { name: 'Socket.io', icon: <SiSocketdotio size={50} /> },
  { name: 'Sass/Scss', icon: <FaSass size={50} /> },
  { name: 'NestJs', icon: <FaNodeJs size={50} /> },
  { name: 'Storybook', icon: <SiStorybook size={50} /> },
  { name: 'Socket.io', icon: <SiSocketdotio size={50} /> },
];

const Skills: React.FC = () => {
  return (
    <section className="container mx-auto py-16" id='skills'>
      <h2 className="text-center text-4xl font-light mb-10">
        Tech <span className="text-black font-bold">Involved</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center lg:grid-cols-5  gap-6 px-20 max-sm:p-5 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            // className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 h-40 w-40 hover:bg-black hover:text-white"
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg h-40 w-40 hover:bg-black hover:text-white "
          >
            {/* <div className="text-black  mb-4"> */}
              {skill.icon}
            {/* </div> */}
            <p className="text-lg font-medium mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
