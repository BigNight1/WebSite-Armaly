import React from "react";

const FaqItem = ({ index, question, answer }) => {
  return (
    <details
      key={index}
      className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer	"
    >
      <summary className="font-medium text-gray-900 dark:text-white">
        {question}
      </summary>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{answer}</p>
    </details>
  );
};

export default FaqItem;
