import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la reparación?",
      answer: "El tiempo de reparación varía según el problema, pero usualmente toma entre 1 y 3 días hábiles.",
    },
    {
      question: "¿Ofrecen garantía?",
      answer: "Sí, ofrecemos una garantía de 3 meses en todas nuestras reparaciones.",
    },
    // Más FAQs...
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer	">
              <summary className="font-medium text-gray-900 dark:text-white">{faq.question}</summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
