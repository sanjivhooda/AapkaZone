import React, { useState } from 'react';
import { Card, Button, Radio } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const plans = [
  {
    title: "Engage Plan",
    individualPrice: "₹599",
    couplePrice: "₹999",
    duration: "for 12 months/person",
    features: [
      "Access To Online Events",
      "Exclusive Value-Added Services",
      "24/7 Emergency Support",
      "Emergency Doctor On Call",
      "+ 3 Additional Care Services",
      ".",
    ],
  },
  {
    title: "Empower Plan",
    individualPrice: "₹59,999",
    couplePrice: "₹1,09,999",
    duration: "for 12 months/person",
    features: [
      "Access To Online Events",
      "Assistance From Emoha Daughter",
      "24/7 Emergency Support",
      "Exclusive Value-Added Services",
      "+ 18 Additional Care Services",
      ".",
    ],
  },
  {
    title: "Enhance Plan",
    individualPrice: "₹1,49,999",
    couplePrice: "₹2,89,999",
    duration: "for 12 months/person",
    features: [
      "Access To Online Events",
      "Assistance From Emoha Daughter",
      "24/7 Emergency Support",
      "Exclusive Value-Added Services",
      "Unlimited Doctor Teleconsultation",
      "+ 28 Additional Care Services",
    ],
  },
];

const App = () => {
  const [isCouple, setIsCouple] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleToggle = (e) => {
    setIsCouple(e.target.value === 'couple');
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 mt-20">
      <div className="mb-4">
        <Radio.Group defaultValue="individual" buttonStyle="solid" onChange={handleToggle}>
          <Radio.Button value="individual">For Individual</Radio.Button>
          <Radio.Button value="couple">For Couple</Radio.Button>
        </Radio.Group>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            className={`w-full md:w-[25vw] ${selectedPlan === index ? 'bg-[#18b8b0] text-white' : 'bg-white'} shadow-lg rounded-3xl flex flex-col justify-between`}
            headStyle={{ fontSize: '1.25rem', fontWeight: 'bold' }}
            bodyStyle={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
            onClick={() => setSelectedPlan(index)}
          >
            <div>
              <div className={`text-2xl md:text-4xl font-bold py-6 ${selectedPlan === index ? 'text-white' : 'text-black'}`}>
                {isCouple ? plan.couplePrice : plan.individualPrice}
              </div>
              <div className="text-sm font-medium mb-4">{plan.duration}</div>
              <ul className="list-none mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`mb-2 py-1 ${selectedPlan === index ? 'text-white' : 'text-black'}`}>
                    <CheckOutlined className="mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button type="primary" className={`${selectedPlan === index ? 'bg-white text-[#18b8b0]' : 'bg-[#18b8b0] text-white'}`} block>
              Request callback
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
