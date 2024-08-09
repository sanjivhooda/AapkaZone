import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 p-4">
          <h1 className="font-serif text-lg mb-4">About</h1>
          <p className="text-gray-600">
            At Aapkazone, we are dedicated to providing exceptional care and
            support to the elderly. Our mission is to enhance the quality of
            life for older adults by delivering compassionate,
            and customized care services that cater to their unique needs.
          </p>
        </div>
        <div className="w-full md:w-1/5 p-4 ml-8">
          <h2 className="font-serif text-lg mb-4">Quick Links</h2>
          <ul>
            <li className="py-1 underline text-gray-700">Home</li>
            <li className="py-1 underline text-gray-700">Care Plan</li>
            <li className="py-1 underline text-gray-700">Blog</li>
            <li className="py-1 underline text-gray-700">About Us</li>
            <li className="py-1 underline text-gray-700">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 p-4">
          <h2 className="font-serif text-lg mb-4">Helpful Links</h2>
          <ul>
            <li className="py-1 underline text-gray-700">Privacy Policy</li>
            <Link to="/disclaimer">
              <li className="py-1 underline text-gray-700">Disclaimer</li>
            </Link>
            <Link to="/cookies">
              <li className="py-1 underline text-gray-700">Cookies Policy</li>
            </Link>
            <Link to="/terms&conditions">
              <li className="py-1 underline text-gray-700">Terms</li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/5 p-4">
          <h2 className="font-serif text-lg mb-4">Services</h2>
          <ul>
            <Link to='/details/:name'>
            <li className="py-1 underline text-gray-700">Health Care</li>
            </Link>
            <Link to='/details/:name'>
            <li className="py-1 underline text-gray-700">Elderly Care</li>
            </Link>
            <Link to='/details/:name'>
            <li className="py-1 underline text-gray-700">Health Support</li>
            </Link>
            
            
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
