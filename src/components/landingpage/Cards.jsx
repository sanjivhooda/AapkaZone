import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  HeartOutlined,
  SafetyOutlined,
  MobileOutlined,
  DollarOutlined,
  SmileOutlined,
  CarOutlined,
  ToolOutlined,
  ExperimentOutlined
} from '@ant-design/icons';

const namesAndIcons = [
  { name: 'Emergency Support', icon: <SafetyOutlined /> },
  { name: 'Health & Hospitalisation', icon: <HeartOutlined /> },
  { name: 'Home Care', icon: <HomeOutlined /> },
  { name: 'Convenience', icon: <ToolOutlined /> },
  { name: 'Technology', icon: <MobileOutlined /> },
  { name: 'Payments & Finances', icon: <DollarOutlined /> },
  { name: 'Social Engagement', icon: <SmileOutlined /> },
  { name: 'Safety & Security', icon: <SafetyOutlined /> },
  { name: 'Mobility & Travel', icon: <CarOutlined /> },
  { name: 'Labs & Diagnostics', icon: <ExperimentOutlined /> }
];

const ServiceCard = ({ name, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className='flex flex-col items-center justify-center h-36 w-36 rounded-3xl bg-[#18b8b0] text-white cursor-pointer p-4 shadow-md'
    >
      <div className='text-3xl'>{icon}</div>
      <div className='mt-2 text-center'>{name}</div>
    </div>
  );
};

const Cards = () => (
  <div className='bg-[#ffffff] min-h-[25vh] shadow-md flex flex-col justify-center items-center'>
    <div className='flex items-center justify-center'>
      <h1 className='pt-4 text-2xl md:text-3xl'>Elderly Care Services</h1>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-24 mx-4 sm:mx-8 md:mx-16 mt-6 pb-6'>
      {namesAndIcons.map((item) => (
        <ServiceCard key={item.name} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>
);

export default Cards;
