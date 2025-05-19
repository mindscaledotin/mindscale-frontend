import { useState } from "react";
import { motion } from "framer-motion";
import mindscaleLogo from "../assets/mindscale_logo.svg"; // adjust path
import {Button}  from "./button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed h-[116px] flex w-full z-50 transition-all duration-300 backdrop-blur-[8px] shadow-lg">
      <div className="w-full px-6 sm:px-16 font-lato flex justify-between items-center relative z-10">
        <img src={mindscaleLogo} alt="logo" className="h-10" />

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button text="Let's connect" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="relative w-8 h-8 flex flex-col justify-center items-center gap-[6px]">
            {/* Top Line */}
            <motion.span
              className="w-8 h-[2px] bg-white absolute"
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
          
            />
            {/* Middle Line */}
            <motion.span
              className="w-8 h-[2px] bg-white absolute"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom Line */}
            <motion.span
              className="w-8 h-[2px] bg-white absolute"
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
