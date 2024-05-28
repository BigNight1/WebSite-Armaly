import React from "react";
import Icon2 from "./Icons/Icon2";
import Iphone3D from "./Iphone3D";

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Reparacion de Celulares
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Reparación de celulares en Lima de cualquier marca y referencia. Tenemos repuestos 100% originales con mano de obra cualificada.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#0F766E]  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <Icon2 />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-none">
            <div style={{ width: "300px", height: "500px" }}>
              <Iphone3D />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
