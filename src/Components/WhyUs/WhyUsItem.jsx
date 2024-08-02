import React from "react";

// Función para generar la clase de color
const getColorClass = (color) => {
  switch (color) {
    case "blue-500":
      return "text-blue-500 dark:text-blue-300";
    case "yellow-500":
      return "text-yellow-500 dark:text-yellow-300";
    case "green-500":
      return "text-green-500 dark:text-green-300";
    case "green-700": // Nuevo caso para un verde más oscuro
      return "text-green-700 dark:text-green-500";
    default:
      return "";
  }
};

const WhyUsItem = ({ IconComponent, color, title, description }) => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
      <IconComponent className={`text-4xl ${getColorClass(color)} mb-4`} />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
};

export default WhyUsItem;
