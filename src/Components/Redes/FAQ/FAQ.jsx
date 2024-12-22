import React from "react";
import faqs from "./faqs.json";
import FaqItem from "./FaqItem";

const FAQ = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
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
