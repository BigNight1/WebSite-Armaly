import React from 'react';

const customerReviews = [
  {
    name: "Juan Pérez",
    review: "¡El servicio fue rápido y eficiente! Mi iPhone se ve como nuevo.",
    rating: 5,
  },
  {
    name: "María López",
    review: "Pensé que había perdido todo, pero lograron recuperar mis datos y arreglar mi laptop.",
    rating: 4,
  },
  {
    name: "Carlos Ruiz",
    review: "Excelente servicio, mi tablet carga perfectamente ahora.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12" id="reviews">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">Opiniones de Clientes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {customerReviews.map((review, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <p className="mt-2 text-gray-700 dark:text-gray-300 italic">"{review.review}"</p>
              <p className="mt-4 text-gray-900 dark:text-white font-semibold">- {review.name}</p>
              <div className="mt-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
