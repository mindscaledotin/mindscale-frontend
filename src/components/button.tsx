import { motion } from "framer-motion";
import React from "react";

type Size = "sm" | "md" | "lg";

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  size?: Size;
  className?: string;
  width?: string;
  height?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = "md",
  className = "",
  width,
  height,
}) => {
  let sizeClass = "";

  if (size === "sm") sizeClass = "px-4 py-2 text-sm";
  else if (size === "lg") sizeClass = "px-8 py-4 text-lg";
  else sizeClass = "px-6 py-3 text-base";

  const combinedClassName = `
    relative font-lato font-semibold rounded overflow-hidden 
    transition-all duration-300 ease-in-out
    border border-[#FFFFFF94]
    group
    ${!className ? sizeClass : ""}
    ${className}
  `;

  const buttonStyle = {
    width: width || "auto",
    height: height || "auto",
  };

  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={combinedClassName}
      style={buttonStyle}
      variants={{
        rest: {
          background: "linear-gradient(262.6deg, #000000 11.85%, #4A0EAC 34.73%, #4A0EAC 64.29%, #000000 98.68%)",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.5)",
        },
        hover: {
          background: "linear-gradient(263.29deg, #000000 5.44%, #06257F 51.1%, #000000 91.73%, #06257F 117.25%)",
          borderColor: "rgba(255, 255, 255, 0.23)",
        },
      }}
    >
      <span 
        className="relative z-10 inline-block transition-all duration-300 ease-in-out group-hover:after:opacity-100 after:opacity-0 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[1px] after:bg-white after:transition-all after:duration-300 after:ease-in-out"
      >
        {text}
      </span>
    </motion.button>
  );
};
