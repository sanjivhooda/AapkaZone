import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { ToastContainer } from 'react-toastify';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setType(e.target.value);
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
      message,
      type,  
    };
  
  };

  return (
    <>
    <div className='flex items-center justify-center text-2xl font-semibold'>Contact Us</div>
    <div className=" mb-20 mx-auto flex mt-8 max-w-[80vw] bg-white rounded-2xl  border-black shadow-lg">
    <div className="hidden md:block h-[82vh] p-4 m-2 w-[33vw] rounded-xl text-white bg-[#18b8b0]">
  <h2 className="text-xl mt-4 mb-4 items-center justify-center flex">Aapka Zone</h2>
  <div className="flex items-center mt-24 mb-2">
    <FaLocationDot />
    <span className="ml-4">Gurugram, Haryana, India</span>
  </div>
  <div className="flex items-center mt-4 mb-2">
    <IoCall />
    <span className="ml-4">+1234567890</span>
  </div>
  <div className="flex items-center mt-4">
    <MdMessage />
    <span className="ml-4">info@donategreat.com</span>
  </div>
</div>

      <div className='p-4'>
        <div>
          <form onSubmit={handleSubmit} className="md:p-6 sm:pt-4 sm:ml-1  space-y-4 md:ml-12">
            <div className=''>
              <div className=''>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input-style border-gray-300 border-b-2 "
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className='mt-4'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input-style border-gray-300 border-b-2 "
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className='mt-4'>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="email"
                  id="email"
                  className="input-style border-gray-300 border-b-2 "
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#8faef3]">Message</label>
              <textarea
                id="message"
                className="input-style border-gray-300 border-b-2 w-96 h-28"
                value={message}
                onChange={handleMessageChange}
                placeholder='write here you message...'
                required
              ></textarea>
            </div>
            <button type="submit" className="btn bg-bg-btn-1 text-white bg-[#18b8b0] px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
            <ToastContainer className="mt-20" />
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default ContactUs;
