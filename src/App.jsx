import Hero from "./Components/Hero";
import Location from "./Components/Location";
import NavBar from "./Components/Navbar/NavBar.jsx";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import FAQ from "./Components/FAQ/FAQ.jsx";
import Services from "./Components/Services/Services.jsx";
import Footer from "./Components/Footer";
import SuccessStories from "./Components/SuccessStories/SuccessStories.jsx";
import WhyUs from "./Components/WhyUs/WhyUs.jsx";
import CustomerReviews from "./Components/CustomerReview/CustomerReviews.jsx";
import RepairSection from "./Components/RepairSection";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <RepairSection />
      <WhyUs />
      <Services />
      <SuccessStories />
      <Location />
      <CustomerReviews />
      <Comments/>
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
