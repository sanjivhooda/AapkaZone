import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" h-[70vh]">
      <div className="flex p-8"> 
        <div className="w-80">
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}>about</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus
            architecto fugiat!
          </p>
        </div>
        <div className="ml-28">
          <ul className="py-3">
            <li
              className="py-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </li>
            <li className="underline py-2">Amazing Atmosphere</li>
            <li className="underline py-2">Caring Staff</li>
            <li className="underline py-2">FAQs</li>
            <li className="underline py-2">About Us</li>
            <li className="underline py-2">Contact Us</li>
          </ul>
        </div>
        <div className="ml-28">
          <ul className="py-3">
            <li
              className="py-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Helpful Links
            </li>
            <li className="underline py-2">Hospice Care</li>
          <Link to="disclaimer">  <li className="underline py-2">Disclaimer</li> </Link>
          <Link to="/cookies">  <li className="underline py-2">Cookie Policy</li></Link>

          <Link to="/terms&conditions">  <li className="underline py-2">Terms</li></Link>
          </ul>
        </div>
        <div className="ml-28">
          <ul className="py-3">
            <li
              className="py-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Resources
            </li>
            <li className="underline py-2">Health care</li>
            <li className="underline py-2">Elderly Care</li>
            <li className="underline py-2">Quality Care</li>
            <li className="underline py-2">Care with Love</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-16">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
    </div>
  );
};

export default Footer;
