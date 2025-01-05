import React, { useState } from "react";

const Terms = () => {
  const [selectedSection, setSelectedSection] = useState("introduccion");

  const sections = {
    introduccion: (
      <>
        <h2 className="text-2xl font-bold mb-4">Introducción</h2>
        <p>
          Bienvenido a Armalytech. Al utilizar nuestro sitio web, aceptas estos
          términos y condiciones. Te recomendamos leerlos cuidadosamente antes
          de interactuar con nuestros servicios.
        </p>
      </>
    ),
    productosYServicios: (
      <>
        <h2 className="text-2xl font-bold mb-4">Productos y Servicios</h2>
        <p>
          Ofrecemos servicios de reparación de dispositivos móviles y venta de
          componentes tecnológicos. Los detalles específicos de cada producto o
          servicio se encuentran en sus respectivas páginas.
        </p>
      </>
    ),
    garantia: (
      <>
        <h2 className="text-2xl font-bold mb-4">Garantía</h2>
        <p>
          <strong>Cobertura:</strong> La garantía cubre defectos de fábrica y
          problemas de calidad en los siguientes casos:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Batería:</strong> Problemas de duración o carga defectuosa,
            siempre que no haya manipulación indebida.
          </li>
          <li>
            <strong>Pantalla:</strong> Cubierta si no presenta daños por
            impacto, humedad o intervención no autorizada.
          </li>
          <li>
            <strong>Software:</strong> Incluye problemas no derivados de
            software no autorizado o virus.
          </li>
        </ul>
        <p>
          <strong>Exclusiones:</strong> Daños por uso indebido, accidentes,
          manipulación no autorizada o condiciones extremas.
        </p>
      </>
    ),
    privacidad: (
      <>
        <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
        <p>
          En Armalytech, respetamos tu privacidad y valoramos tu confianza. Nos comprometemos a proteger tu información personal y garantizar que nuestros servicios sean transparentes y seguros.
        </p>
        <h3 className="text-xl font-semibold mt-4">Acceso a tus Dispositivos</h3>
        <p>
          Armalytech no accede ni revisa el contenido almacenado en tus dispositivos, como archivos, imágenes, videos o información personal, sin tu consentimiento explícito. Solo en caso de que sea necesario para diagnosticar y solucionar el problema técnico que presentes, pediremos tu autorización previa para realizar una revisión específica.
        </p>
        <p>
          Nuestro equipo está capacitado para manejar esta información con estricta confidencialidad y únicamente con el propósito de brindarte soporte técnico y resolver el inconveniente reportado. No compartiremos ni utilizaremos esta información para ningún otro fin.
        </p>
        {/* <h3 className="text-xl font-semibold mt-4">Protección de Datos</h3>
        <p>
          Toda la información proporcionada por el cliente, ya sea durante la revisión del dispositivo o mediante formularios en nuestra web, será tratada conforme a la legislación vigente en materia de protección de datos. Consulta nuestra <a href="/privacy-policy" className="text-blue-500 underline">Política de Privacidad Completa</a> para más detalles.
        </p> */}
      </>
    ),
    
    limitaciones: (
      <>
        <h2 className="text-2xl font-bold mb-4">Limitación de Responsabilidad</h2>
        <p>
          No nos hacemos responsables por daños indirectos, incidentales o
          consecuentes derivados del uso de nuestros productos o servicios.
        </p>
      </>
    ),
    contacto: (
      <>
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p>
          Si tienes dudas o consultas, contáctanos:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Correo Electrónico:</strong> armalycell@gmail.com

          </li>
          <li>
            <strong>Teléfono:</strong> +51 924 548 268
          </li>
          <li>
            <strong>Dirección:</strong> Lima, Perú
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex justify-center items-center mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/logoarmaly.webp"
              className="h-10 rounded-full"
              alt="Armalytech Logo"
            />
            <span className="self-center text-2xl font-extrabold font-OpenSans uppercase">
              Armalytech
            </span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-900 shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            {Object.keys(sections).map((key) => (
              <li key={key}>
                <button
                  onClick={() => setSelectedSection(key)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedSection === key
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Section */}
        <main className="w-full md:w-3/4 bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 md:ml-4 mt-4 md:mt-0">
          {sections[selectedSection]}
        </main>
      </div>
    </div>
  );
};

export default Terms;
