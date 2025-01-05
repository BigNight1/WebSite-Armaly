import React from "react";

const FaqItem = ({ index, question, answer }) => {
  return (
    <details
      key={index}
      className="p-4  rounded-lg cursor-pointer	"
    >
      <summary className="font-medium dark:text-white">{question}</summary>
      <p className="mt-2 dark:text-white">{answer}</p>
    </details>
  );
};

export default FaqItem;
