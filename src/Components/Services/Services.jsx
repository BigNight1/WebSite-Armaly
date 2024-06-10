import React from "react";
import services from "./services.json";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12" id="services">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <ServicesItem
              key={index}
              description={service.description}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
