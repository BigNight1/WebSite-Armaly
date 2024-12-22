import React from "react";

const FaqItem = ({ index, question, answer }) => {
  return (
    <details
      key={index}
      className="p-4  rounded-lg cursor-pointer	"
    >
      <summary className="font-medium dark:text-[#5D0F26]">{question}</summary>
      <p className="mt-2 dark:text-[#5D0F26]">{answer}</p>
    </details>
  );
};

export default FaqItem;
