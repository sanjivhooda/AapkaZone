import { Button } from "antd";
import React from "react";
import heroImage from "../../assets/img_2.jpg";
import { Link } from "react-router-dom";

const OtherOpportunities = () => {
  return (
    <div className=" pb-20">
      <h1
        className="text-4xl flex items-center justify-center pt-20"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Become A Care Counsellor.
      </h1>

      <div className="py-9 w-[100vw] bg-[#18b8b0] mt-6">
        <div className="container grid grid-cols-12">
          <div className=" p-6 col-span-6 pl-[10vw] ml-16 ">
            <h1
              className="text-white text-xl text-justify"
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
              <Button className="bg-[#98ebe6] ml-[12vw] my-2 text-white rounded-3xl p-5 justify-center items-center flex py-5 text-md">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="col-span-6 flex items-center justify-center ">
            <img src={heroImage} className="h-[330px] rounded-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOpportunities;
