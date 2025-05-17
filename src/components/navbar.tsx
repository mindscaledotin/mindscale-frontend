import React from 'react';
import mindscaleLogo from '../assets/mindscale_logo.svg';
import { Button } from './button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-[8px] shadow-lg">
      <div className="container font-lato mx-auto px-4 py-3 flex justify-between items-center relative z-10">
        <img src={mindscaleLogo} alt="logo" className="h-10" />
        <Button text="Let's connect" />
      </div>
    </nav>
  );
};

export default Navbar;
