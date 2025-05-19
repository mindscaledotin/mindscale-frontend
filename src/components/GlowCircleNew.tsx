import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface GlowCircleNewProps {
  size?: number; // default: 824px
  className?: string;
}

const GlowCircleNew: React.FC<GlowCircleNewProps> = ({
  size = 824,
  className = "",
}) => {
  const sizeClass = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <motion.div
      className={clsx(
        "absolute rounded-full bg-[#8243EA]/20 blur-[150px] pointer-events-none z-[1]",
        className
      )}
      style={sizeClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default GlowCircleNew;
