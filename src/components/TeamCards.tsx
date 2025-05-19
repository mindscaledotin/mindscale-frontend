import { motion } from "framer-motion";
import { useState } from "react";
import VioletSparkles from "../assets/Violet_Sparkles.svg";

const TeamCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[1693px] h-[214px] mx-auto my-[155px] rounded-[10px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with blur and gradient on hover */}
      <motion.div
        className="absolute inset-0 rounded-[10px]"
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{
          backdropFilter: isHovered ? "blur(28px)" : "blur(0px)",
          background: isHovered
            ? "linear-gradient(90.96deg, rgba(0, 141, 254, 0.02) 0%, rgba(53, 254, 254, 0.02) 99.34%)"
            : "transparent",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Left Sparkle */}
      <motion.img
        src={VioletSparkles}
        alt="Left Sparkle"
        className="absolute left-[109px] top-[163px] w-[154.17px] h-[99.4px]"
        style={{ transform: "rotate(-90deg) scaleX(-1)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Right Sparkle */}
      <motion.img
        src={VioletSparkles}
        alt="Right Sparkle"
        className="absolute right-[109px] top-[193px] w-[154.17px] h-[99.4px]"
        style={{ transform: "rotate(-90deg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Content Container */}
      <div className="flex items-center justify-between h-full relative z-10">
        {/* H1 Text */}
        <motion.h1
          className="w-[822px] text-[89px] leading-[100%] font-bold font-lato bg-clip-text text-transparent bg-gradient-to-r from-[#35FEFE] to-[rgba(255,255,255,0.75)]"
          animate={{ 
            x: isHovered ? -900 : 0,
            opacity: isHovered ? 0 : 1 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 20,
            duration: 0.5 
          }}
        >
          Meet Our Dreamers, Doers, and Experts
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="w-[647px] text-[24px] leading-[36px] font-normal font-lato text-[#FFFFFFCF]"
          animate={{ 
            x: isHovered ? 900 : 0,
            opacity: isHovered ? 0 : 1 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 20,
            duration: 0.5 
          }}
        >
          We're a team of curious minds, bold thinkers, and skilled professionals who turn ideas into impactful solutions. From strategy to execution, each member brings passion, precision, and purpose to everything we do — united by a shared vision to innovate and inspire.
        </motion.p>

        {/* Center Text (appears after hover) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0}}
          animate={{ 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ 
            duration: 0.5
          }}
        >
          <h2 className="text-[60px] font-bold font-lato-700 bg-clip-text text-transparent bg-gradient-to-r from-[#35FEFE] to-[rgba(255,255,255,0.75)] mb-4">
            Get to Know Us!
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamCards;
