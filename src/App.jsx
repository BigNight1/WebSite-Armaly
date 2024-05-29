import Hero from "./Components/Hero";
import Location from "./Components/Location";
import NavBar from "./Components/NavBar.jsx";
import Sections from "./Components/Sections";
import { WhatsAppWidget } from "react-whatsapp-widget";
import 'react-whatsapp-widget/dist/index.css';
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Services from "./Components/Services";

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <Sections/>
      <Services/>
      <Location/>
      <Testimonials/>
      <FAQ/>
      <WhatsAppWidget 
        phoneNumber="+51924548268" 
        companyName="ArmalyCell"
        message="Hola! ¿Cómo podemos ayudarte?"
        replyTimeText="Normalmente respondemos en unos minutos"
      />
    </div>
  );
}

export default App;
