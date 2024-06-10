import React from "react";

const SuccessItem = ({index,title,description,beforeImage,afterImage,testimonial}) => {
  return (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-1/2 ">
          <h4 className="text-gray-600 dark:text-gray-400 mb-2">Antes</h4>
          <img
            className="w-auto h-auto md:h-[450px] lg:h-[500px] rounded-lg shadow-lg"
            src={beforeImage}
            alt={`Before ${title}`}
          />
        </div>
        <div className="w-1/2 ">
          <h4 className="text-gray-600 dark:text-gray-400 mb-2">Después</h4>
          <img
            className="w-auto h-auto md:h-[450px] lg:h-[500px] rounded-lg shadow-lg"
            src={afterImage}
            alt={`After ${title}`}
          />
        </div>
      </div>
      <blockquote className="mt-6 text-gray-500 dark:text-gray-400 italic">
        "{testimonial}"
      </blockquote>
    </div>
  );
};

export default SuccessItem;
