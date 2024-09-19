// components/Testimonials.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import client01 from '../../../public/clientimg1.png';
import client02 from '../../../public/clientimg2.png';

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h5 className="text-3xl leading-6  flex justify-center items-center gap-2 ">
            <span className='font-normal' >My</span><span className='font-bold'>TESTIMONIAL</span>
          </h5>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 justify-items-center">
          <TestimonialCard
            image={client01}
            alt="Everen Shah"
            title="Everen Shah"
            text="Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise."
            bgColor="white"
            textColor="gray-900"
            designation="Designer"
            borderColor="black"
          />
          <TestimonialCard
            image={client02}
            alt="Floora Sheen"
            title="Floora Sheen"
            text="Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise."
            bgColor="black"
            textColor="white"
            designation="Designer"
            borderColor="white"

          />
          <TestimonialCard
            image={client01}
            alt="Everen Shah"
            title="Everen Shah"
            text="Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise."
            bgColor="white"
            textColor="gray-900"
            designation="Designer"
            borderColor="black"

          />
        </div>
      </div>
    </div>
  );
};

type TestimonialCardProps = {
  alt: string;
  title: string;
  text: string;
  image: StaticImageData | string;
  bgColor: string;
  textColor: string;
  designation: string;
  borderColor: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, alt, title, text, bgColor, textColor, designation, borderColor }) => (
  <div className={`max-w-sm bg-${bgColor} rounded-2xl border border-none shadow-md shadow-gray-300 `}>
    <div className="flex flex-col items-center justify-center p-10  ">
      <Image src={image} alt={alt} width={80} height={80} className="mb-3 rounded-full shadow-lg" />
      <p className={`text-sm text-${textColor} text-center mb-10`}>{text}</p>
      <div className={`h-0 w-32 border border-${borderColor} mb-4`} ></div>
      <h3 className={`mb-1 text-xl font-semibold text-${textColor} mb-4`}>{title}</h3>
      <p className={`mb-1  font-normal text-${textColor}`}>{designation}</p>
    </div>
  </div>
);

export default Testimonials;
