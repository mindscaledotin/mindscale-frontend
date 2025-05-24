import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "@assets/DACard/BG.svg";
import Bg2 from "@assets/DACard/onHover_BG.svg";
import icon from "@assets/DACard/icon.png";
import glow from "@assets/WebDevCard/glow.avif"

// export const DataAnalytics: React.FC = () => {
    
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//         <motion.div
//             className="max-w-[61.75rem] border border-red-500 p-4 h-auto relative"
//             style={{
//                 // width: 588,
//                 // height: 468,
//                 // marginTop: "100px",
//                 // marginLeft: 30,
//                 overflow: "hidden",
//                 background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//             }}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             transition={{ duration: 0.5 }}
//         >
//             <motion.div
//                 className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-left hover:cursor-pointer"
//                 style={{
//                     backgroundImage: isHovered
//                         ? `url(${Bg2}), linear-gradient(121.07deg, #19188B,#000000)`
//                         : `url(${Bg}), linear-gradient(121.07deg, #19188B,#000000)`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         backgroundRepeat:"no-repeat"
//                 }}
//             >
//                 <div 
//                 className="px-10 mx-10" 
//                 style={{
//                     justifyContent: "center",
//                     textAlign: "left",
//                     alignContent: "center",
//                     padding: "5%",
//                     height: "auto",
//                 }}>
//                     <motion.h3 
//                     // className="font-bold text-lg md:text-xl lg:text-2xl" 
//                     className={`font-bold mb-4 ${isHovered ? 'text-xl md:text-3xl lg:text-4xl -mx-10' : 'text-base md:text-4xl lg:text-5xl'}`}
//                     // style={{ fontSize:isHovered? 38:40 }}
//                         animate={{ y: isHovered ? -140 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
//                         Data Analytics
//                     </motion.h3>
//                     <motion.p 
//                         className={` ${isHovered ? 'text-m md:text-l lg:text-2xl -mx-10' : 'text-sm md:text-xl lg:text-2xl'}`}

//                     // style={{ fontSize: isHovered ? 18 : 22 }}
//                         animate={{ y: isHovered ? -140 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                         Turning raw data into meaningful business 
//                         insights. Drive smarter decisions with powerful 
//                         analytics and reporting tools.
//                     </motion.p>

//                     {isHovered && (
//                         <motion.div className="space-x-5"
//                             style={{ position:'absolute',top: 150, right: 90 }}
//                             initial={{ y: 50, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                                  <img src={icon} alt=""  />
//                         </motion.div>
//                     )}
//                 </div>

             

//                 {/* <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
//                     style={{
//                         height: 500,
//                         width: 500,
//                         bottom: -230,
//                         right: -150
//                     }}>
//                     <div className="flex flex-row justify-center -space-x-3"
//                         style={{
//                             width: 100, height: 100,
//                             right: -260,
//                             bottom: 80,
//                             position: "relative",
//                         }}>
//                         <BinaryCarousel direction="down" height={150} speed={90000} />
//                     </div>
//                     <div className="flex flex-row justify-center -space-x-3"
//                         style={{
//                             width: 100, height: 100,
//                             right: -210,
//                             bottom: 30,
//                             position: "relative",
//                         }}>
//                         <BinaryCarousel direction="down" height={100} speed={90000} />
//                     </div>
//                     <GlowCircle size={200} />
//                 </div> */}
//             </motion.div>
//         </motion.div>
//     );
// };

const DataAnalytics = () => {
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
    setIsHovered(true);
  };

  return (
    <motion.div 
      className="max-w-[43.31rem] h-[22rem] md:h-[29.25rem] mx-4 relative"
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoverDirection({ x: 0, y: 0 });
        }}
      >
        <div className="w-full h-full rounded-xl bg-[rgb(18,18,73)]">
          <div 
            className="flex flex-col h-full rounded-xl shadow-xl justify-center text-left p-2 md:p-5 relative"
            style={{
              backgroundImage: `url(${Bg}), url(${Bg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Enhanced Top-left glow */}
            <motion.div
              className="absolute top-0 left-0 rounded-xl"
              initial={{ opacity: 1 }}
              animate={{
                opacity: isHovered ? 0.1: 1,
                filter: isHovered ? "brightness(1) contrast(150%)" : "brightness(2) contrast(120%)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={glow}
                alt="glow"
                className="w-[200%] h-[200%] top-0 left-0 mix-blend-screen rounded-xl"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 rounded-xl overflow-hidden"
              initial={{ opacity: 1 }}
              animate={{
                opacity: isHovered ? 0.1: 1,
                filter: isHovered ? "brightness(1) contrast(150%)" : "brightness(2) contrast(120%)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={glow}
                alt="glow"
                className="w-[200%] h-[200%] -bottom-1/2 -right-1/2 mix-blend-screen rounded-xl transform rotate-180"
              />
            </motion.div>
          
            {/* Content with hover effects */}
            <div className="flex flex-col justify-center text-left md:mx-5 mx-1 relative h-full">
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
                Data Analytics
                </p>
                <p className={`text-base md:text-xl lg:text-2xl text-white my-4 md:my-6 ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                Turning raw data into meaningful business 
                insights. Drive smarter decisions with powerful 
                analytics and reporting tools.
                </p>
              </motion.div>

              {/* Image (shown only when hovered) */}
              <motion.div
                className="absolute right-3 bottom-0 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
              >
                <img 
                  src={icon} 
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
export default DataAnalytics;