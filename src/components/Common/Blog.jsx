import React from 'react';
import blog from '../../assets/blog.jpg';

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6 flex justify-center items-center">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-lg p-6 md:p-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
          <a href="#" className="text-indigo-600 hover:underline mb-4 md:mb-0">← Return to blog</a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M..." />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M..." />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M..." />
              </svg>
            </a>
          </div>
        </header>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">The Vital Role of Platforms like "aapkazone" in Elder Care</h1>
        <p className="text-gray-600 mb-6">Posted 31 October 2019 by Clare Dodd</p>
        <div className="flex justify-center items-center mb-8">
          <img src={blog} alt="Elder Care" className="w-full md:w-3/4 h-auto rounded-lg shadow-md" />
        </div>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">1. Specialized Expertise and Tailored Support</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Healthcare Management</h3>
            <p className="text-gray-600">"aapkazone" provides expert guidance on managing chronic conditions prevalent among seniors...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Emotional Support</h3>
            <p className="text-gray-600">Recognizing the emotional challenges of aging, "aapkazone" offers counseling services and mental health resources...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Practical Advice</h3>
            <p className="text-gray-600">Seniors often require adjustments in their living environments for safety and comfort...</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">2. Comprehensive Range of Services</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Daily Living Assistance</h3>
            <p className="text-gray-600">Recognizing the importance of maintaining independence in daily activities, "aapkazone" provides hands-on assistance with ADLs...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Social Engagement</h3>
            <p className="text-gray-600">Social interaction is vital for mental stimulation and overall well-being...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Education</h3>
            <p className="text-gray-600">Keeping seniors and caregivers informed is a priority for "aapkazone."...</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">3. Access to Information and Resources</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Reliable Information</h3>
            <p className="text-gray-600">Serving as a reliable resource hub, "aapkazone" provides up-to-date information on aging-related topics...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Educational Resources</h3>
            <p className="text-gray-600">Through informative articles, comprehensive guides, and instructional videos...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Community Forums</h3>
            <p className="text-gray-600">Recognizing the value of peer support, "aapkazone" facilitates community forums where caregivers and seniors can share experiences...</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">4. Building Community and Support Networks</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Support Groups</h3>
            <p className="text-gray-600">Online forums and local support groups hosted by "aapkazone" provide platforms for caregivers to connect...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Networking Opportunities</h3>
            <p className="text-gray-600">"aapkazone" creates networking opportunities for caregivers to collaborate on care strategies...</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">5. Advocacy and Awareness</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Elder Rights Advocacy</h3>
            <p className="text-gray-600">Advocating for the rights and well-being of seniors is a core mission of "aapkazone."...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Public Education</h3>
            <p className="text-gray-600">Through initiatives aimed at combating ageism and promoting positive attitudes towards aging...</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">6. Empowerment and Independence</h2>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Support for Aging in Place</h3>
            <p className="text-gray-600">Recognizing the desire of many seniors to age in place, "aapkazone" offers support through home modifications...</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">Informed Decision-Making</h3>
            <p className="text-gray-600">Providing guidance on legal and financial planning, advance directives, and long-term care options...</p>
          </div>
        </section>
        <p className="text-lg font-semibold text-gray-800 mt-6">In conclusion, platforms like "aapkazone" play a pivotal role in supporting aging individuals and their caregivers...</p>
      </div>
    </div>
  );
};

export default Blog;
