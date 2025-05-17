import Navbar from "./components/navbar";
import StarParallax from "./components/StarParallax";
import { CardGrid } from "./components/CardGrid";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import HeroSection from "./components/HeroSection";




function App() {
   
  return (
    <>
    <div className="min-h-screen font-lato bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
      <Navbar />
      <StarParallax />


      <Element name="webdev" className="justify-center content-center text-center">
        
        <CardGrid/>
      </Element>

      <Element name="contact" className="m-10  ">
        <ContactForm />
      </Element>

     

      <Footer />
    </div>
    </>
    
  );
}

export default App;
