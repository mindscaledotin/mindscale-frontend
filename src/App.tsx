import Navbar from "./components/navbar";
import StarParallax from "./components/StarParallax";
import { CardGrid } from "./components/CardGrid";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import HeroSection from "./components/HeroSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
// import MaintenancePage from "./components/MaintenancePage";



// import AiCard from "./components/cards/AiCard";


function App() {

    // return <MaintenancePage />;

   
  return (
    <>
    <div className="min-h-screen font-lato bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
      <Navbar />
      <StarParallax />
      <HeroSection/>
     
      <div className="mx-auto flex flex-col items-center gap-8 w-[90vw] max-w-[1729px] min-h-[380px] mt-12">
        <h1
          className="font-lato font-bold text-[6vw] md:text-[120px] leading-tight text-center bg-gradient-to-r from-[#35FEFE] to-white/75 bg-clip-text text-transparent px-4 py-2"
          style={{
            WebkitTextStroke: "1px #7B2CFF"
          }}
        >
          Transform Your Business with <br className="hidden md:block" /> Our Technology
        </h1>
        <p
          className="font-lato font-normal md:text-[26px] leading-relaxed text-center tracking-wide text-white/65 rounded px-4 py-3 w-full max-w-[1662px]"
        >
          Harness the power of cutting-edge technology to streamline your operations, enhance customer experiences, and drive growth. Our expert solutions are designed to transform your business into a future-ready powerhouse.
        </p>
      </div>


      <Element name="webdev" className="min-h-screen mr-10 -ml-1">
        
        <CardGrid/>
      </Element>

      <TestimonialCarousel />
      
      <Element name="contact" className="m-10 ">
        <ContactForm />
      </Element>

     

      <Footer />
    </div>
    </>
    
  );
}

export default App;
