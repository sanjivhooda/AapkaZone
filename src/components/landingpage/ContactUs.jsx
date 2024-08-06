import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { ToastContainer } from 'react-toastify';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');

    const formData = {
      name,
      email,
      phoneNumber,
      message,
    };
    // Add your form submission logic here
  };

  return (
    <>
      <div className='flex items-center justify-center text-2xl font-semibold'>Contact Us</div>
      <div className="mb-20 mx-auto mt-8 max-w-5xl bg-white rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="hidden md:block md:col-span-5 bg-[#18b8b0] p-6 text-white rounded-l-2xl">
            <h2 className="text-xl mb-4 text-center">Aapka Zone</h2>
            <div className="mt-12 space-y-6">
              <div className="flex items-center">
                <FaLocationDot className="text-xl" />
                <span className="ml-4">New Delhi, India</span>
              </div>
              <div className="flex items-center">
                <IoCall className="text-xl" />
                <span className="ml-4">+91 9911116547</span>
              </div>
              <div className="flex items-center">
                <MdMessage className="text-xl" />
                <span className="ml-4">info@aapkazone.com</span>
              </div>
            </div>
          </div>

          <div className='col-span-1 md:col-span-7 p-6'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder='Write your message here...'
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#18b8b0] text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
