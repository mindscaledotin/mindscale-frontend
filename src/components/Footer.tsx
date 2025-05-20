import React from "react";
import {Linkedin, Instagram } from "lucide-react";  


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#052275] to-[#040A19] text-white py-4 w-full">
      <div className="w-full px-[3%] md:px-[2%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:flex text-center md:text-left md:ml-8">
            <p className="text-[18px] font-normal leading-[28px] tracking-normal">
              © 2025 Mindscale Infinity Solutions. All rights reserved.
            </p>
          </div> 

          <div className="flex items-center gap-3 md:mr-8 mt-4 md:mt-0">
            <span className="text-[20px] font-normal leading-[30px] tracking-normal mr-4">
              Find us on:
            </span>
            <div className="flex items-center gap-4">
                {/* <a href="https://www.linkedin.com/company/mindscale-solutions/" target="_blank" rel="noopener noreferrer">

              <Youtube className="w-6 h-6 hover:opacity-80 cursor-pointer" /> </a> */}



                <a href="https://www.linkedin.com/company/mindscale-solutions/" target="_blank" rel="noopener noreferrer">

              <Linkedin className="w-5 h-5 hover:opacity-80 cursor-pointer" /> </a>

                <a href="https://www.linkedin.com/company/mindscale-solutions/" target="_blank" rel="noopener noreferrer">

              <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer" /></a>

                {/* <a href="https://www.linkedin.com/company/mindscale-solutions/" target="_blank" rel="noopener noreferrer">

              <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer" /> </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

