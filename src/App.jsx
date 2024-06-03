import Hero from "./Components/Hero";
import Location from "./Components/Location";
import NavBar from "./Components/NavBar.jsx";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import FAQ from "./Components/FAQ";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import SuccessStories from "./Components/SuccessStories";
import WhyUs from "./Components/WhyUs";
import CustomerReviews from "./Components/CustomerReviews";
import RepairSection from "./Components/RepairSection";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <RepairSection/>
      <WhyUs/>
      <Services />
      <SuccessStories />
      <Location />
      <CustomerReviews />
      <FAQ />
      <Footer />
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
