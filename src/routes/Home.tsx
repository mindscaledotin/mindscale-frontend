import StarParallax from "@components/StarParallax";
import { CardGrid } from "@components/CardGrid";
import ContactForm from "@components/ContactForm";
import { Element } from 'react-scroll';
import HeroSection from "@components/HeroSection";
// import TestimonialCarousel from "@components/TestimonialCarousel";
import TeamCards from "@components/TeamCards";
import GlowCircleNew from "@components/GlowCircleNew";

const Home = () => {
  return (
    <>
      <StarParallax />
      {/* 🟣 Add Glow in Background */}
      <section className="hidden md:block">
        <GlowCircleNew
          className="top-[660px] left-[-159px] z-100"
        />
      </section>

      <HeroSection />

      <Element name="webdev" id="webdev" className="m-0 md:m-10">
      <div className="mx-auto flex flex-col items-center w-[90vw] max-w-[1729px] min-h-[380px] mt-12">
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
        <CardGrid />
      </Element>

       {/* <Element name="testimonials" id="testimonials">

           <TestimonialCarousel />
        </Element> */}
      
      <Element name="about" id="about" >
        <TeamCards />
      </Element>
      
      <Element name="contact" id="contact" className="m-10">
        <ContactForm />
      </Element>
    </>
  );
};

export default Home;