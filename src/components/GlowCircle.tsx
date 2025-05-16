import React from "react";
import glow from "../assets/WebDevCard/glow.svg"

interface GlowCircleProps {
  size: number; // Size prop to define the diameter of the circle
}

const GlowCircle: React.FC<GlowCircleProps> = ({ size }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          // background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 100%)",
          background: "linear-gradient(135.06deg, rgba(0, 141, 254, 0.24) 21.07%, rgba(0, 0, 0, 0.24) 130.79%)",
          // backgroundImage:`url(${glow})`,
          opacity:0.7,
          filter: "blur(3xl)",
        }}
      />
      {/* <p className="text-white z-10">Glow Center</p> */}
    </div>
  );
};

export default GlowCircle;
