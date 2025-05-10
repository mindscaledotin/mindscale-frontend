import React, { useState, useEffect } from 'react';
import mindscaleLogo from '../assets/mindscale_logo.svg';
import { Button } from './button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-sm shadow-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/20 after:to-transparent after:pointer-events-none' 
        : 'bg-transparent'
    }`}>
      <div className="container font-lato mx-auto px-4 py-3 flex justify-between items-center relative z-10">
        <img src={mindscaleLogo} alt="logo" className="h-10" />
        <Button text="Let's connect" />
      </div>
    </nav>
  );
};

export default Navbar;
