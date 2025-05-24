import React, { useState } from "react";
import { motion } from "framer-motion";
import BinaryCarousel from "@components/cards/BinaryCarousel";
import bgSvg from "@assets/WebDevCard/BG.svg";
import BG2 from "@assets/WebDevCard/BG2.avif";
import glow from "@assets/WebDevCard/glow.avif"
import bg_icon_png from "@assets/WebDevCard/BG_icon.png"

const WebDev = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverDirection, setHoverDirection] = useState({ x: 0, y: 0 });

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // Normalized x (0 to 1)
    const y = (e.clientY - rect.top) / rect.height; // Normalized y (0 to 1)

    // Calculate tilt based on hover position
    const tiltX = (y - 0.5) * 10; // Tilt more if hovered toward top/bottom
    const tiltY = (0.5 - x) * 10; // Tilt more if hovered toward left/right

    setHoverDirection({ x: tiltX, y: tiltY });
    // Only set hover state if screen is larger than sm (640px)
    setIsHovered(window.innerWidth > 640);
  };

  return (
    <motion.div
      className="max-w-[61.75rem] h-[22rem] md:h-[29.25rem] mx-6 md:mx-4 relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="w-full h-full p-[1px] rounded-xl bg-gradient-to-br from-[#35FEFE] via-transparent to-[#35FEFE]"
        whileHover={{
          rotateX: hoverDirection.x,
          rotateY: hoverDirection.y,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            mass: 0.5
          }
        }}
        onMouseMove={handleHover}
        onMouseEnter={() => setIsHovered(window.innerWidth > 640)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoverDirection({ x: 0, y: 0 });
        }}
      >
        <div className="w-full h-full rounded-xl bg-[#0A113C]">
          <div
            className="flex flex-col h-full rounded-xl shadow-sm justify-center text-left p-6 md:p-8 lg:p-10 relative"
            style={{
              backgroundImage: `url(${bgSvg}), url(${BG2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Enhanced Top-left glow */}
            <motion.div
              className="absolute top-0 left-0 rounded-xl"
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                filter: isHovered ? "brightness(2) contrast(120%)" : "brightness(1) contrast(150%)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={glow}
                alt="glow"
                className="w-[200%] h-[200%] top-0 left-0 mix-blend-screen rounded-xl"
              />
            </motion.div>

            {/* Top-left BinaryCarousels (hidden in tablet view) */}
            <div className="absolute top-4 left-4 z-10 flex gap-2 mx-4 lg:visible invisible">
              <BinaryCarousel direction="up" height={150} speed={90000} />
              <BinaryCarousel direction="up" height={80} speed={90000} />
            </div>

            {/* Enhanced Bottom-right glow */}
            <motion.div
              className="absolute bottom-0 right-0 rounded-xl overflow-hidden"
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                filter: isHovered ? "brightness(1.5) contrast(120%)" : "brightness(1) contrast(100%)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={glow}
                alt="glow"
                className="w-[200%] h-[200%] -bottom-1/2 -right-1/2 mix-blend-screen rounded-xl transform rotate-180"
              />
            </motion.div>

            {/* Bottom-right BinaryCarousels (hidden in tablet view) */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2 mx-4 lg:visible invisible">
              <BinaryCarousel direction="down" height={150} speed={90000} />
              <BinaryCarousel direction="down" height={80} speed={90000} />
            </div>

            {/* Content with adjusted padding for tablet */}
            <div className="flex flex-col justify-center text-left md:mx-6 lg:mx-10 mx-3 relative h-full">
              {/* Text Container with responsive lift */}
              <motion.div
                className="relative z-20"
                animate={{
                  y: isHovered ?
                    window.innerWidth < 768 ? -40 :
                      window.innerWidth < 1024 ? -60 :
                        -95 : // -95px on desktop
                    0
                }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-3xl md:text-4xl lg:text-5xl text-white font-bold ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  Mobile, Web App Development & Game
                </p>
                <p className={`text-base md:text-xl lg:text-2xl text-white my-4 md:my-6 ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  Empowering your ideas into seamless mobile and
                  web applications.
                  Delivering intuitive, fast, and scalable apps for every platform.
                </p>
              </motion.div>

              {/* Image (shown only when hovered and screen > sm) */}
              <motion.div
                className="absolute left-10 bottom-0 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
              >
                <img
                  src={bg_icon_png}
                  alt="icon"
                  className="w-11/12 h-11/12 object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WebDev;