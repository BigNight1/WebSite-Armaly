import React from "react";

const services = [
  {
    title: "Reparación de Celulares",
    description: "Reparación de todas las marcas y modelos de celulares con repuestos originales.",
    icon: "📱",
  },
  {
    title: "Reparación de Tablets",
    description: "Reparación de tablets, incluidos problemas de pantalla, batería y más.",
    icon: "📲",
  },
  {
    title: "Reparación de Laptops",
    description: "Reparación de hardware y software para todas las marcas de laptops.",
    icon: "💻",
  },
  {
    title: "Asesoramiento Técnico",
    description: "Asistencia para resolver cualquier problema técnico con sus dispositivos.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">Nuestros Servicios</h2>
        <div className="grid gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
