import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 p-4">
          <h1 className="font-serif text-lg mb-4">About</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus
            architecto fugiat!
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h2 className="font-serif text-lg mb-4">Quick Links</h2>
          <ul>
            <li className="py-1 underline text-gray-700">Amazing Atmosphere</li>
            <li className="py-1 underline text-gray-700">Caring Staff</li>
            <li className="py-1 underline text-gray-700">FAQs</li>
            <li className="py-1 underline text-gray-700">About Us</li>
            <li className="py-1 underline text-gray-700">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h2 className="font-serif text-lg mb-4">Helpful Links</h2>
          <ul>
            <li className="py-1 underline text-gray-700">Hospice Care</li>
            <Link to="/disclaimer">
              <li className="py-1 underline text-gray-700">Disclaimer</li>
            </Link>
            <Link to="/cookies">
              <li className="py-1 underline text-gray-700">Cookie Policy</li>
            </Link>
            <Link to="/terms&conditions">
              <li className="py-1 underline text-gray-700">Terms</li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h2 className="font-serif text-lg mb-4">Resources</h2>
          <ul>
            <li className="py-1 underline text-gray-700">Health Care</li>
            <li className="py-1 underline text-gray-700">Elderly Care</li>
            <li className="py-1 underline text-gray-700">Quality Care</li>
            <li className="py-1 underline text-gray-700">Care with Love</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <p className="text-gray-500">
          Copyright AapkaZone ©2024 All rights reserved |
        </p>
      </div>
    </div>
  );
};

export default Footer;
