import { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import mindscaleLogo from "../assets/mindscale_logo.svg";
import { Button } from "./button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollLinkClass = `
    relative text-white text-[18px] font-normal transition-all duration-500 ease-out cursor-pointer
    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7B2CFF] hover:to-[#35FEFE] 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
    after:h-[2px] after:transition-all after:duration-500 after:ease-out after:bg-gradient-to-r 
    after:from-[#7B2CFF] after:to-[#35FEFE]
  `;

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed h-[116px] flex w-full z-50 transition-all duration-300 backdrop-blur-[8px] shadow-lg">
      <div className="w-full px-6 sm:px-16 font-lato flex justify-between items-center relative z-10">
        <RouterLink to="/">
          <img src={mindscaleLogo} alt="logo" className="h-10" />
        </RouterLink>
        <div className="hidden lg:flex gap-10 items-center">
          <ul className="hidden lg:flex gap-10 items-center">
            <li className="hidden md:block">
              {location.pathname === '/' ? (
                <ScrollLink 
                  to="webdev"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={scrollLinkClass}
                >
                  Services
                </ScrollLink>
              ) : (
                <a 
                  href="/#webdev" 
                  className={scrollLinkClass}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick('webdev');
                  }}
                >
                  Services
                </a>
              )}
            </li>
            {/* <li className="hidden md:block">
              {location.pathname === '/' ? (
                <ScrollLink 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={scrollLinkClass}
                >
                  Customer Success
                </ScrollLink>
              ) : (
                <a 
                  href="/#contact" 
                  className={scrollLinkClass}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick('contact');
                  }}
                >
                  Customer Success
                </a>
              )}
            </li> */}
            <li className="hidden md:block">
              <NavLink 
                to="/blogs" 
                className={({ isActive }) => `
                  relative text-white text-[18px] font-normal transition-all duration-500 ease-out 
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7B2CFF] hover:to-[#35FEFE] 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
                  after:h-[2px] after:transition-all after:duration-500 after:ease-out after:bg-gradient-to-r 
                  after:from-[#7B2CFF] after:to-[#35FEFE]
                  ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CFF] to-[#35FEFE] after:w-full' : ''}
                `}
              >
                Blogs
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink 
                to="/career" 
                className={({ isActive }) => `
                  relative text-white text-[18px] font-normal transition-all duration-500 ease-out 
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7B2CFF] hover:to-[#35FEFE] 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
                  after:h-[2px] after:transition-all after:duration-500 after:ease-out after:bg-gradient-to-r 
                  after:from-[#7B2CFF] after:to-[#35FEFE]
                  ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CFF] to-[#35FEFE] after:w-full' : ''}
                `}
              >
                Career
              </NavLink>
            </li>
            <li className="hidden md:block">
              {location.pathname === '/' ? (
                <ScrollLink 
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={scrollLinkClass}
                >
                  About Us
                </ScrollLink>
              ) : (
                <a 
                  href="/#about" 
                  className={scrollLinkClass}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick('about');
                  }}
                >
                  About Us
                </a>
              )}
            </li>
          </ul>
          <div>
            <Button text="Let's connect" />
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block lg:hidden">
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