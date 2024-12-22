import React from "react";
import "./redes.css";
import FAQ from "./FAQ/FAQ";

const Redes = () => {
  return (
    <div className="fondo">
      <div className="Box_Redes">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://taplink.st/a/8/2/3/8/b75e4c.jpg?3"
              alt="Logo"
              className="h-[125px] rounded-full "
            />
          </div>

          <div className="sub-description">
            <h3 className="color-titulo">SAMYS POP</h3>
            <span className="text-[#5d0f26]">Funko Pops en porcelana fria</span>
            <span className="text-[#5d0f26]">Lima - Peru</span>
          </div>
        </div>
        <div className="box-redes">
          {/* Enlace a Instagram */}
          <a
            href="https://www.instagram.com/" /* Cambia por la URL de Instagram */
            target="_blank"
            rel="noopener noreferrer"
            className="caja-redes"
          >
            INSTAGRAM
          </a>

          {/* Enlace a WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=%2B51924548268&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="caja-redes"
          >
            WHATSAPP
          </a>
        </div>
        {/* PREGUNTAS Y RESPUESTAS  */}
        <FAQ />
      </div>
    </div>
  );
};

export default Redes;
