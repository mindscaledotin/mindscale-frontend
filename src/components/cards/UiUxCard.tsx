import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "@assets/UIUXCard/bg.svg"; 
import Bg2 from "@assets/UIUXCard/bg2.svg"; // Adjust the background image path
import icon from "@assets/UIUXCard/icon.png"; // Adjust the icon path

// export const UiUxCard: React.FC = () => {
    
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//         <motion.div
//             className="box-border w-full aspect-[833/468] p-6 relative rounded-xl shadow-lg"
//             style={{
//                 // width: 688,
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
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat:"no-repeat"
//                 }}
//             >
//                 <div className="px-10 mx-10" style={{
//                     justifyContent: "center",
//                     textAlign: "left",
//                     alignContent: "center",
//                     padding: "5%",
//                     height: "auto",
//                     // backdropFilter:'blur(10px)'
//                 }}>
//                     <motion.h3 
//                     className={`font-bold mb-4  ${isHovered ? 'text-xl md:text-3xl lg:text-4xl -mx-10 backdrop-blur' : 'text-base md:text-4xl lg:text-5xl'}`}


//                     // className="font-bold" style={{ fontSize: isHovered ? 38 : 40 , backdropFilter:'blur(10px)'}}
//                         animate={{ y: isHovered ? -100 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
//                         UI/UX Design
//                     </motion.h3>
//                     <motion.p 
//                         className={` ${isHovered ? 'text-m md:text-l lg:text-2xl -mx-10 backdrop-blur' : 'text-sm md:text-xl lg:text-2xl'}`}

                    
//                     // style={{ fontSize: isHovered ? 18 : 22 ,backdropFilter:'blur(10px)'}}
//                         animate={{ y: isHovered ? -100 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                        Designing beautiful experiences that users love and remember.
//                        Our design-first approach drives engagement and loyalty.
//                     </motion.p>

//                     {isHovered && (
//                         <motion.div className="space-x-5"
//                             style={{ position: 'absolute', top: "40%", right: 0 }}
//                             initial={{ y: 50, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                             <img src={icon} alt="" />
//                         </motion.div>
//                     )}
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

const UiUxCard = () => {
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
        className="max-w-[52.06rem] h-[22rem] md:h-[29.25rem] mx-4 relative"
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
          <div className="w-full h-full rounded-xl bg-[#0A113C]">
            <div
              className="flex flex-col h-full rounded-xl shadow-sm justify-center text-left p-6 md:p-10 relative"
              style={{
                backgroundImage: `url(${Bg}), url(${Bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transformStyle: "preserve-3d"
              }}
            >
              
  
              {/* Content with hover effects */}
              <div className="flex flex-col justify-center text-left md:mx-10 mx-3 relative h-full">
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
                  UI/UX Design
                  </p>
                  <p className={`text-base md:text-xl lg:text-2xl text-white my-4 md:my-6 ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  Designing beautiful experiences that users love and remember.
                  Our design-first approach drives engagement and loyalty.
                  </p>
                </motion.div>
  
                {/* Image (shown only when hovered) */}
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

export default UiUxCard;
