import React, { useEffect, useRef } from "react";
import { Button } from "./button";
import hero_section_cards from "../assets/Hero_section_cards.svg";
import hero_grid from "../assets/hero_grid.svg";

import logo1 from "../assets/client_logo/logo1.png";
import logo2 from "../assets/client_logo/logo2.png";
import logo3 from "../assets/client_logo/logo3.png";
import logo4 from "../assets/client_logo/logo4.png";
import logo5 from "../assets/client_logo/logo5.png";
import logo6 from "../assets/client_logo/logo6.png";
import logo7 from "../assets/client_logo/logo7.png";
import logo8 from "../assets/client_logo/logo8.png";
import logo9 from "../assets/client_logo/logo9.png";
import logo10 from "../assets/client_logo/logo10.png";

// Client logos array
const clientLogos = [
  { id: 1, name: "Client 1", src: logo1 },
  { id: 2, name: "Client 2", src: logo2 },
  { id: 3, name: "Client 3", src: logo3 },
  { id: 4, name: "Client 4", src: logo4 },
  { id: 5, name: "Client 5", src: logo5 },
  { id: 6, name: "Client 6", src: logo6 },
  { id: 7, name: "Client 7", src: logo7 },
  { id: 8, name: "Client 8", src: logo8 },
  { id: 9, name: "Client 9", src: logo9 },
  { id: 10, name: "Client 10", src: logo10 },
];

const LogoCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Calculate the width of a single set of logos
    const logoSection = track.querySelector('.logo-section');
    if (!logoSection) return;
    
    const logoSectionWidth = logoSection.clientWidth;
    
    // Clone the necessary number of logo sections to fill the screen width plus extra
    const trackWidth = track.clientWidth;
    const cloneCount = Math.ceil(trackWidth / logoSectionWidth) + 1;
    
    // Remove existing clones before adding new ones (for resizing support)
    const existingClones = track.querySelectorAll('.logo-section-clone');
    existingClones.forEach(clone => clone.remove());
    
    // Clone and append logo sections
    for (let i = 0; i < cloneCount; i++) {
      const clone = logoSection.cloneNode(true) as HTMLElement;
      clone.classList.add('logo-section-clone');
      track.appendChild(clone);
    }
    
    // Animation setup
    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${logoSectionWidth}px)` }
      ],
      {
        duration: 20000, // 20 seconds for one complete cycle
        iterations: Infinity,
        easing: 'linear'
      }
    );
    
    // Handle pause/resume on window visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        animation.pause();
      } else {
        animation.play();
      }
    });
    
    return () => {
      animation.cancel();
      document.removeEventListener('visibilitychange', () => {});
    };
  }, []);
  
  return (
    <div className="w-[1924px] h-[88px] overflow-hidden relative left-[-4px]">
      <div 
        ref={trackRef} 
        className="flex items-center absolute whitespace-nowrap"
      >
        <div className="logo-section inline-flex items-center">
          {clientLogos.map(logo => (
            <div key={logo.id} className="mx-16 flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section relative min-h-[1093px] w-full flex flex-col items-center justify-center overflow-hidden z-0" style={{ backgroundImage: `url(${hero_grid})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Main bracket border container */}
      <div className="relative w-full max-w-[1774px] h-[706px] mx-auto md:border-x-2 md:rounded-[156px] overflow-hidden z-0">
        {/* Content container */}
        <div className="relative w-full h-full px-6 lg:px-10 flex flex-col lg:flex-row items-center z-0">
          {/* Left Content */}
          <div className="hero-content text-white max-w-[700px] lg:max-w-[800px] lg:ml-12 mt-8 lg:mt-0 text-center lg:text-left relative z-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[78px] font-[500] leading-[120%] mb-6 font-lato text-white">
              Smart Tech, Seamless Execution
            </h1>
            <p className="text-xl lg:text-[23px] text-gray-300 mb-8 pr-4 font-lato font-[400] leading-[120%]">
              We help you move faster with custom low-code solutions that scale effortlessly.
            </p>
            <div>
            <Button text="let's Connect" width="378px" height="62px" />
              {/* <Button text="Let's connect" size="lg" className="w-full bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500" /> */}
            </div>
          </div>

          {/* Right Graphic */}
          <div className="hero-graphic lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 mt-12 lg:mt-0 z-0">
            <img
              src={hero_section_cards}
              alt="Hero Graphic"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Logo Carousel - positioned at top 1004px */}
      <div className="absolute top-[1004px] w-full">
        <LogoCarousel />
      </div>
    </div>
  );
};

export default HeroSection;