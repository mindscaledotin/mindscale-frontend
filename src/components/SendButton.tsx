import { motion } from "framer-motion";
import React from "react";

interface SendButtonProps {
  text: string;
  onClick?: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative px-10 py-4 font-lato font-semibold text-white text-base md:text-lg rounded border border-white/25 overflow-hidden transition-all duration-300"
      variants={{
        rest: {
          background:
             "linear-gradient(263.29deg, #000000 5.44%, #06257F 51.1%, #000000 91.73%, #06257F 117.25%)",
        },
        hover: {
          background:
            
            "linear-gradient(266.26deg, #000000 6.32%, #7B2CFF 40.4%, #7B2CFF 61.06%, #000000 92.69%)",

        },
      }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-1/2 h-0.5 bg-white z-0"
        variants={{
          rest: { width: "0%", x: "-50%" },
          hover: { width: "100%", x: "-50%" },
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};

export default SendButton;
