import Navbar from "./components/navbar";
import StarParallax from "./components/StarParallax";
// import { CardGrid } from "./components/CardGrid";
import WebDev from "./components/cards/WebDev";
// import DataAnalytics from "./components/cards/DataAnalytics";
// import QACard from "./components/cards/QACard";
// import UiUxCard from "./components/cards/UiUxCard";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import HeroSection from "./components/HeroSection";
// import AiCard from "./components/cards/AiCard";


function App() {
   
  return (
    <>
    <div className="min-h-screen font-lato bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
      <Navbar />
      <StarParallax />


      <Element name="webdev" className="min-h-screen ">
        <WebDev />
      </Element>

      <Element name="contact" className="m-10 ">
        <ContactForm />
      </Element>

      {/* <DataAnalytics/> */}
      {/* <QACard/> */}
      {/* <UiUxCard/> */}
      {/* <AiCard/> */}

      
      
      {/* <CardGrid/> */}

      <Footer />
    </div>
    </>
    
  );
}

export default App;
