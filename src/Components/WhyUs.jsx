import React from 'react';
import { FaTools, FaStar, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12" id="services">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-12">¿Por qué elegirnos?</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaTools className="text-4xl text-blue-500 dark:text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experiencia</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Con más de 3 años de experiencia, nuestros técnicos están capacitados para resolver cualquier problema.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaStar className="text-4xl text-yellow-500 dark:text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Calidad</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Utilizamos repuestos originales y ofrecemos garantía en todas nuestras reparaciones.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaUserFriends className="text-4xl text-green-500 dark:text-green-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Atención personalizada</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Nos preocupamos por cada cliente y nos esforzamos por ofrecer un servicio personalizado y amigable.</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaDollarSign className="text-4xl text-green-500 dark:text-green-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Precios competitivos</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">Ofrecemos precios justos y competitivos en todas nuestras reparaciones.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
