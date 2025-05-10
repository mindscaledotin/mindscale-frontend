import { motion } from "framer-motion";
import React from "react";

type Size = "sm" | "md" | "lg";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?: Size;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = "md",
  className = "",
}) => {
  let sizeClass = "";

  if (size === "sm") sizeClass = "px-4 py-2 text-sm";
  else if (size === "lg") sizeClass = "px-8 py-4 text-lg";
  else sizeClass = "px-6 py-3 text-base";

  const combinedClassName = `
    relative font-semibold rounded overflow-hidden 
    transition-all duration-300 
    border border-[#FFFFFF3B]
    ${!className ? sizeClass : ""}
    ${className}
  `;

  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={combinedClassName}
      variants={{
        rest: {
          background:
            "linear-gradient(266.26deg, #000000 6.32%, #7B2CFF 40.4%, #7B2CFF 61.06%, #000000 92.69%)",
          color: "#ffffff",
        },
        hover: {
            background: "linear-gradient(263.29deg, #000000 5.44%, #06257F 51.1%, #000000 91.73%, #06257F 117.25%)",

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
