// WhyUs.jsx
import React from 'react';
import { FaTools, FaStar, FaUserFriends, FaDollarSign } from 'react-icons/fa';
import whyUsData from './whyUsData.json';
import WhyUsItem from './WhyUsItem.jsx';

const iconMap = {
  FaTools: FaTools,
  FaStar: FaStar,
  FaUserFriends: FaUserFriends,
  FaDollarSign: FaDollarSign,
};

const WhyUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12" id="services">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-12">¿Por qué elegirnos?</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {whyUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <WhyUsItem
                key={index}
                IconComponent={IconComponent}
                color={item.color}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
