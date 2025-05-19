import React, { useEffect, useRef } from "react";
import { Button } from "@components/button";
import hero_section_cards from "@assets/Hero_section_cards.svg";
import hero_grid from "@assets/hero_grid.svg";

import nSpire from "@assets/client_logo/nSpire.png";
import mukti from "@assets/client_logo/mukti.png";
import smart_geology from "@assets/client_logo/smart_geology.png";
import Tritzo from "@assets/client_logo/Tritzo.png";
import vikramshila from "@assets/client_logo/vikramshila.png";
import LotusBleu from "@assets/client_logo/LotusBleu.png";

// Client logos array
const clientLogos = [
  { id: 1, name: "Client 1", src: nSpire },
  { id: 2, name: "Client 2", src: smart_geology },
  { id: 3, name: "Client 3", src: Tritzo },
  { id: 4, name: "Client 4", src: mukti },
  { id: 5, name: "Client 5", src: vikramshila },
  { id: 6, name: "Client 6", src: LotusBleu },
];

const LogoCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Get the original logo section
    const logoSection = track.querySelector('.logo-section');
    if (!logoSection) return;

    // Clear any existing clones
    const existingClones = track.querySelectorAll('.logo-section-clone');
    existingClones.forEach(clone => clone.remove());

    // Get the width of the logo section for animation
    const logoSectionWidth = logoSection.clientWidth;
    
    // Calculate how many clones we need based on screen width
    const screenWidth = window.innerWidth;
    const cloneCount = Math.ceil((screenWidth * 2) / logoSectionWidth) + 1;

    // Create the necessary clones
    for (let i = 0; i < cloneCount; i++) {
      const clone = logoSection.cloneNode(true) as HTMLElement;
      clone.classList.add('logo-section-clone');
      track.appendChild(clone);
    }

    // Set up animation
    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${logoSectionWidth}px)` }
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) animation.pause();
      else animation.play();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle window resize
    const handleResize = () => {

      animation.cancel();
      

      const clones = track.querySelectorAll('.logo-section-clone');
      clones.forEach(clone => clone.remove());
      
      const newScreenWidth = window.innerWidth;
      const newCloneCount = Math.ceil((newScreenWidth * 2) / logoSectionWidth) + 1;
      

      for (let i = 0; i < newCloneCount; i++) {
        const clone = logoSection.cloneNode(true) as HTMLElement;
        clone.classList.add('logo-section-clone');
        track.appendChild(clone);
      }
      

      const newAnimation = track.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${logoSectionWidth}px)` }
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
      
  
      Object.assign(animation, newAnimation);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      animation.cancel();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[88px] overflow-hidden relative">
      <div 
        ref={trackRef} 
        className="flex items-center absolute whitespace-nowrap"
      >
        <div className="logo-section inline-flex items-center">
          {clientLogos.map(logo => (
            <div 
              key={logo.id} 
              className="mx-16 flex-shrink-0" 
              style={{ width: '160px' }}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-10 object-contain mx-auto" 
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
            <Button text="Let's Connect" width="378px" height="62px" />
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