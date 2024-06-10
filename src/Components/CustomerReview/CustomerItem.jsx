import React from "react";

const CustomerItem = ({ index, review, name, rating }) => {
  return (
    <div
      key={index}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <p className="mt-2 text-gray-700 dark:text-gray-300 italic">"{review}"</p>
      <p className="mt-4 text-gray-900 dark:text-white font-semibold">
        - {name}
      </p>
      <div className="mt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-500">
            ★
          </span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomerItem;
