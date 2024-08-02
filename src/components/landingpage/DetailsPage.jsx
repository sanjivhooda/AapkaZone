import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  SafetyOutlined,
  MobileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";

const namesAndIcons = [
  {
    name: "Medical equipment",
    icon: <HeartOutlined />,
    description: `High-quality medical equipment for elderly care. Our range of medical equipment ensures that seniors receive the best care possible. From mobility aids like walkers and wheelchairs to advanced medical devices such as blood pressure monitors and oxygen concentrators, our products are designed to meet the unique needs of the elderly. Each item is chosen for its reliability, ease of use, and durability, helping to improve the quality of life for seniors.`,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Elder tech",
    icon: <MobileOutlined />,
    description: `Advanced technology solutions designed for the elderly. Our elder tech products include smart home devices, wearable health monitors, and easy-to-use communication tools. These technologies are specifically tailored to help seniors stay connected, safe, and healthy. From emergency alert systems to voice-activated assistants, our elder tech solutions empower seniors to live more independently and confidently.`,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Health support",
    icon: <HeartOutlined />,
    description: `Comprehensive health support services for seniors. Our health support services include personalized care plans, regular health check-ups, and access to a network of healthcare professionals. We focus on preventive care, chronic disease management, and rehabilitation services to ensure that seniors maintain their health and well-being. Our dedicated team is committed to providing compassionate and effective care tailored to each individual's needs.`,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Home health care",
    icon: <HomeOutlined />,
    description: `In-home health care services tailored to elderly needs. Our home health care services offer a range of support, including skilled nursing, physical therapy, and personal care. We strive to create a comfortable and safe home environment for seniors, allowing them to receive medical care and assistance with daily activities without leaving their homes. Our caregivers are trained professionals who are dedicated to enhancing the quality of life for our clients.`,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tele consultation",
    icon: <SafetyOutlined />,
    description: `Convenient teleconsultation services for seniors. Our teleconsultation services allow seniors to connect with healthcare providers from the comfort of their homes. This service includes virtual appointments, follow-up visits, and access to medical advice without the need to travel. Teleconsultation is a valuable tool for managing chronic conditions, receiving timely medical attention, and maintaining regular contact with healthcare professionals.`,
    image: "https://via.placeholder.com/150",
  },
];

const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const decodedName = decodeURIComponent(name);
  const [selectedName, setSelectedName] = useState(decodedName);
  const carouselRef = useRef();

  const handleClick = (itemName) => {
    const index = namesAndIcons.findIndex((item) => item.name === itemName);
    setSelectedName(itemName);
    carouselRef.current.goTo(index);
    navigate(`/details/${encodeURIComponent(itemName)}`);
  };

  const handleCarouselChange = (index) => {
    const selectedName = namesAndIcons[index].name;
    setSelectedName(selectedName);
    navigate(`/details/${encodeURIComponent(selectedName)}`);
  };

  const selectedService = namesAndIcons.find(
    (item) => item.name === selectedName
  );

  return (
    <div className="min-h-screen mt-24">
      <div className="">
        <div className="flex items-center justify-between w-full px-12">
          <h1 className="pt-4 text-2xl font-semibold">Elderly Care Services</h1>
          <div>
            <button
              onClick={() => carouselRef.current.prev()}
              className="text-gray-600 hover:text-gray-900"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={() => carouselRef.current.next()}
              className="text-gray-600 hover:text-gray-900 ml-2"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
        <div className="w-full px-12 mt-4">
          <Carousel
            ref={carouselRef}
            dots={false}
            arrows={false}
            slidesToShow={5}
            slidesToScroll={1}
            beforeChange={(current, next) => handleCarouselChange(next)}
          >
            {namesAndIcons.map((item, index) => (
              <div key={index} onClick={() => handleClick(item.name)}>
                <div
                  className={`flex flex-col items-center justify-center h-48 w-48 rounded-3xl ${
                    item.name === selectedName ? "bg-[#18b8b0]" : "bg-gray-200"
                  } text-black cursor-pointer p-4 shadow-md`}
                >
                  <div className="text-5xl">{item.icon}</div>
                  <div className="mt-2 text-center text-lg">{item.name}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="grid grid-cols-7 gap-4 mx-20 mt-16">
          <div className="col-span-4">
            <h2 className="text-xl font-semibold">{selectedService?.name}</h2>
            <p className="mt-2 text-gray-600">{selectedService?.description}</p>
          </div>
          <div className="mt-4 col-span-3">
            <img
              src={selectedService?.image}
              alt={selectedService?.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
