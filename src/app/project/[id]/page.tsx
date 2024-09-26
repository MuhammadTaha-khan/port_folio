"use client";
import React, {  useEffect, useState } from "react";
import Vediosr from "../../components/Vediosr";
import Techinv from "../../components/Techinv";
import firstProject from "../../../../public/project-images/projimg1.png";
import secondProject from "../../../../public/project-images/projimg2.png";
import thirdProject from "../../../../public/project-images/projimg3.png";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData | null;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: firstProject,
  },
  {
    id: 2,
    title: "Freelance Marketplace Platform",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: secondProject,
  },
  {
    id: 3,
    title: "Task Management Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: thirdProject,
  },
];

const Desc: React.FC = (req: any) => {
  const defaultProjectdetailsValue = {
    id: 0,
    title: "",
    description: "",
    imageUrl: null,
  };
  const [projectDetails, setProjectDetails] = useState<Project>(
    defaultProjectdetailsValue
  );
  useEffect(() => {
    let project: any = projects?.filter((id) => id.id == req.params.id);
    setProjectDetails(project[0]);
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-16">
        {projectDetails.imageUrl !== null && (
          <Image
            src={projectDetails?.imageUrl}
            alt="About Me Illustration"
            className="max-w-xs md:max-w-md mt-12"
            width={400}
            height={400}
          />
        )}
      </div>
      <div className="mt-8">
        <Techinv />
      </div>
      <div className="flex flex-col text-start mx-20 mt-20 ">
        <h1 className="text-4xl font-bold mb-10">{projectDetails.title}</h1>
        <h1 className="text-4xl font-bold mb-10">Period Covered:</h1>
        {/* <h1 className='text-4xl font-bold mb-10'>Period Covered: <span className='text-4xl font-normal'>From</span> <span className='font-semibold'>01.10.2013 </span> <span className='text-4xl font-normal'>To</span> <span className='font-semibold'> 01.10.2017 </span></h1> */}
        <h1 className="text-3xl mb-4">Project Description</h1>
        <p className="mx-0 text-start ">{projectDetails.description}</p>
      </div>
      <div className="mt-12">
        <Vediosr />
      </div>
    </div>
  );
};
export default Desc;
