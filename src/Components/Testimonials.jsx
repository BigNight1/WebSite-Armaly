import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juan Pérez",
      feedback: "Servicio excelente y rápido. Mi celular quedó como nuevo.",
      image: "/Img-testimonio/cliente1.jpeg", // Actualiza esta ruta con la imagen correspondiente
    },
    {
      name: "María López",
      feedback: "Muy profesionales y amables. Totalmente recomendados.",
      image: "/Img-testimonio/cliente2.jpeg", // Actualiza esta ruta con la imagen correspondiente
    },
    {
      name: "María López",
      feedback: "Muy profesionales y amables. Totalmente recomendados.",
      image: "/Img-testimonio/cliente3.jpeg", // Actualiza esta ruta con la imagen correspondiente
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">Testimonios</h2>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <img 
                src={testimonial.image} 
                alt={`Foto de ${testimonial.name}`} 
                className="w-24 h-24 mx-auto rounded-full object-cover bg-center border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <p className="mt-4 mb-4 text-gray-700 dark:text-gray-300">{testimonial.feedback}</p>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
