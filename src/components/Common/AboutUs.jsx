import React from "react";
import aboutus from "../../assets/aboutus.png";
import ContactUs from "../landingpage/ContactUs";

const AboutUs = () => {
  return (
    <div className="min-h-[100vh] mt-20 shadow-lg ">
      <div className="pt-12 flex font-semibold items-center text-3xl md:text-5xl pl-4 md:pl-[8vw] text-[#18b8b0]">
        About Us
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11">
        <div className="col-span-1 md:col-span-6 text-justify px-4 md:px-24 py-6 md:py-12">
          <div
            className="text-xl md:text-2xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome to Aapkazone – Your Trusted Partner in Elderly Care
          </div>
          <div className="mt-2 text-base md:text-lg">
            At Aapkazone, we are dedicated to providing exceptional care and
            support to the elderly. Our mission is to enhance the quality of
            life for older adults by delivering compassionate, comprehensive,
            and customized care services that cater to their unique needs. We
            understand that aging brings new challenges, and we are here to help
            navigate them with dignity and respect.
          </div>
          <div
            className="text-xl md:text-2xl mt-6 font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Mission
          </div>
          <div className="mt-2 text-base md:text-lg">
            Our mission is to empower the elderly to live fulfilling,
            independent, and healthy lives. We strive to create a supportive
            environment where they can thrive, surrounded by compassionate
            caregivers and a vibrant community.
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 mt-6 md:mt-12 px-4 md:px-0 flex justify-center">
          <img className="rounded-3xl w-full md:w-auto pr-0 md:pr-24" src={aboutus} alt="About Us" />
        </div>
      </div>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-4 px-4 md:px-24 gap-8">
        <div className="border rounded-3xl p-4 bg-[#18b8b0] text-white">
          <h1
            className="text-lg md:text-xl mb-2 font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Expertise and Experience
          </h1>
          <p className="text-justify">
            With a team of skilled professionals, we bring extensive experience
            and expertise in elderly care. Our caregivers are trained to handle
            the complexities of aging with compassion and professionalism.
          </p>
        </div>
        <div className="border rounded-3xl p-4 bg-[#18b8b0] text-white">
          <h1 className="text-lg md:text-xl mb-2 font-semibold">
            Personalized Care Plans
          </h1>
          <p className="text-justify">
            We believe in personalized care. Our care plans are tailored to meet
            the specific needs and preferences of each individual, ensuring they
            receive the best possible support.
          </p>
        </div>
        <div className="border rounded-3xl p-4 bg-[#18b8b0] text-white">
          <h1 className="text-lg md:text-xl mb-2 font-semibold">Holistic Approach</h1>
          <p className="text-justify">
            We adopt a holistic approach to elderly care, addressing physical,
            emotional, and social well-being. Our goal is to enhance every
            aspect of our clients' lives.
          </p>
        </div>
        <div className="border rounded-3xl p-4 bg-[#18b8b0] text-white">
          <h1 className="text-lg md:text-xl mb-2 font-semibold">Community Focused</h1>
          <p className="text-justify">
            We foster a sense of community and belonging. Our programs and
            services are designed to promote social engagement and build
            meaningful connections.
          </p>
        </div>
      </div>
      <div className="p-4 md:p-8 md:px-24 mt-4">
        <h1
          className="text-2xl md:text-3xl font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Promise
        </h1>
        <p className="mt-3 text-base md:text-lg">
          At Aapkazone, we are committed to making a positive difference in the
          lives of the elderly. We promise to provide compassionate care,
          respect their dignity, and support their independence. Together, we
          can create a nurturing and supportive environment where they can age
          gracefully and happily.
        </p>
      </div>
      <div className="mt-6">
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
