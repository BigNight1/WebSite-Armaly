import React from "react";
import faqs from "./faqs.json";
import FaqItem from "./FaqItem";

const FAQ = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Preguntas Frecuentes
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
