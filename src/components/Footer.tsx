const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#052275] to-[#040A19] text-white py-4 w-full">
      <div className="w-full px-[3%] md:px-[2%]"> 
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="md:flex-[1.1] text-center md:text-left md:ml-8"> 
            <p className="text-[17px] font-normal leading-[30px] tracking-normal">
              © 2025 Mindscale Infinity Solutions. All rights reserved.
            </p>
          </div>

          
          <div className="flex items-center gap-3 md:mr-8 mt-4 md:mt-0"> 
            <span className="text-[17px] font-normal leading-[30px] tracking-normal mr-4">
              Find us on:
            </span>
            <div className="flex items-center gap-4">
              <img src="/src/assets/icons/youtube.svg" alt="YouTube" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src="/src/assets/icons/twitter.svg" alt="Twitter" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src="/src/assets/icons/instagram.svg" alt="Instagram" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src="/src/assets/icons/facebook.svg" alt="Facebook" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;