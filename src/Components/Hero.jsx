import React from "react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="Home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Reparación de Celulares
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Reparación de celulares en Lima de cualquier marca y referencia.
            Tenemos repuestos 100% originales con mano de obra cualificada.
          </p>
          <div className="flex space-x-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Nuestros Servicios
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold dark:text-white">
              Testimonios
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              "El servicio fue excelente y rápido, mi teléfono está como nuevo."
              - Juan P.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              "Muy profesionales, resolvieron mi problema en poco tiempo." -
              María L.
            </p>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-none justify-center items-center">
          <img className="mx-auto" src="/phone-mockup.webp" alt="MockUp A21" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
