import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const successStories = [
  {
    title: "Reparación de Pantalla de iPhone X",
    description: "El cliente trajo su iPhone X con la pantalla completamente rota. Reemplazamos la pantalla con un repuesto original y ahora el teléfono funciona perfectamente.",
    beforeImage: "/AfterAndBefore/IphoneXBefore.jpg",
    afterImage: "/AfterAndBefore/IphoneXAfter.jpg",
    testimonial: "¡El servicio fue rápido y eficiente! Mi iPhone se ve como nuevo. - Juan Pérez",
  },
  {
    title: "Recuperación de Datos de Laptop",
    description: "La laptop del cliente no arrancaba y tenía datos importantes. Recuperamos todos los datos y solucionamos el problema de arranque.",
    beforeImage: "https://via.placeholder.com/800x400?text=Before",
    afterImage: "https://via.placeholder.com/800x400?text=After",
    testimonial: "Pensé que había perdido todo, pero lograron recuperar mis datos y arreglar mi laptop. - María López",
  },
  {
    title: "Reparación de Tablet Samsung",
    description: "La tablet tenía problemas con la batería y no cargaba correctamente. Reemplazamos la batería y ahora funciona sin problemas.",
    beforeImage: "https://via.placeholder.com/800x400?text=Before",
    afterImage: "https://via.placeholder.com/800x400?text=After",
    testimonial: "Excelente servicio, mi tablet carga perfectamente ahora. - Carlos Ruiz",
  },
];

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 " id="Historias">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8 text-center">Casos de Éxito</h2>
        <Slider {...settings}>
          {successStories.map((story, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{story.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{story.description}</p>
              <div className="flex justify-between">
                <div className="w-1/2 pr-4">
                  <h4 className="text-gray-600 dark:text-gray-400 mb-2">Antes</h4>
                  <img
                    className="w-auto h-[350px] rounded-lg shadow-lg"
                    src={story.beforeImage}
                    alt={`Before ${story.title}`}
                  />                
                </div>
                <div className="w-1/2 pl-4">
                  <h4 className="text-gray-600 dark:text-gray-400 mb-2">Después</h4>
                  <img
                    className="w-auto h-[350px] rounded-lg shadow-lg"
                    src={story.afterImage}
                    alt={`After ${story.title}`}
                  />                
                </div>
              </div>
              <blockquote className="mt-6 text-gray-500 dark:text-gray-400 italic">
                "{story.testimonial}"
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;
