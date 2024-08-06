import { Button } from "antd";
import React from "react";
import heroImage from "../../assets/img_2.jpg";
import { Link } from "react-router-dom";

const OtherOpportunities = () => {
  return (
    <div className="pb-20">
      <h1
        className="text-3xl md:text-4xl flex items-center justify-center pt-20"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Become A Care Counsellor.
      </h1>

      <div className="py-9 w-full bg-[#18b8b0] mt-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-0">
          <div className="col-span-1 md:col-span-6 p-6 md:pl-[10vw]">
            <h1
              className="text-white text-lg md:text-xl text-justify"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Appakazone ElderCare is the gold standard among professionally
              managed services for the elderly, available across the country.
              Our mission is to help seniors age comfortably in their own homes
              by providing care like family, without compromise.
            </h1>
            <h2 className="text-gray-200 py-2">
              We offer a professional working environment.
            </h2>
            <Link to="/care-councellor">
              <Button className="bg-[#98ebe6] my-2 text-white rounded-3xl px-6 py-3 flex justify-center items-center">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-6 flex items-center justify-center">
            <img src={heroImage} className="h-auto w-full md:h-[330px] md:w-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOpportunities;
