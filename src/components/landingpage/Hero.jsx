import React from "react";
import heroImage from "../../assets/img_2.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row min-h-[90vh] bg-[#ffffff] mt-24 md:mt-0">
        <div className="md:ml-20 md:mt-28 p-6 md:p-0">
          <div
            className="text-3xl md:text-4xl md:pt-20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Expert Care for Elderly
          </div>
          <p className="text-justify mt-4 ">
            Expert care for the elderly involves comprehensive, specialized
            services designed to meet the unique needs of older adults. This
            includes medical care by geriatricians, personalized nursing,
            assistance with daily activities, and management of chronic
            conditions. It often integrates physical therapy, mental health
            support, and social engagement to enhance quality of life. Expert
            care ensures safety, promotes independence, and supports aging in
            place or within care facilities. It emphasizes dignity, respect,
            and individualized attention, addressing both physical and
            emotional well-being.
          </p>
        </div>
        <div className="flex justify-center px-6 md:p-32 mt-6 md:mt-12 ">
          <img className="rounded-3xl w-full md:w-auto" src={heroImage} alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
