// WhyUsItem.jsx
import React from 'react';

const WhyUsItem = ({ IconComponent, color, title, description }) => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
      <IconComponent className={`text-4xl text-${color} dark:text-${color.replace('500', '300')} mb-4`} />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default WhyUsItem;
