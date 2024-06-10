import React from "react";

const ServicesItem = ({index,icon,title,description}) => {
  return (
    <div
      key={index}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ServicesItem;
