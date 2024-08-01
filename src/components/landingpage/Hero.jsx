import React from "react";
import heroImage from "../../assets/img_2.jpg";
import { Button } from "antd";

const Hero = () => {
  const handleSignIn = async () => {
    try {
      // Initiate the Google OAuth process by redirecting to the backend route
      const response = await fetch("/auth/google");
      if (response.ok) {
        // If the authentication was successful, handle the redirection or token response
        const { redirectUrl } = await response.json(); // Adjust based on your API response
        window.location.href = redirectUrl; // Redirect to Google OAuth page
      } else {
        // Handle error scenarios
        console.error("Failed to initiate Google sign in");
      }
    } catch (error) {
      console.error("Error initiating Google sign in:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-[90vh] bg-[#ffffff] mt-24 ">
        <div className="">
          <div
            className="ml-20 mt-28 w-[30vw] text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Expert Care for Elderly
          </div>
          <p className="text-justify mt-4 ml-20">
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
        {/* <Button onClick={handleSignIn}>
          Sign In by Google
        </Button> */}
        <div className="px-10 mt-12 mr-[5vw] ml-[6vw]">
          <img className="rounded-3xl" src={heroImage} alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
