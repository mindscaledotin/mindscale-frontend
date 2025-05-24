import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "@assets/AICard/bg.avif"; // Adjust the background image path
import Bg2 from "@assets/AICard/onHover_glow.svg"; // Adjust the background image path
import icon from "@assets/AICard/icon.png"; // Adjust the icon path
import icon1 from "@assets/AICard/left_ckt.png"; // Adjust the left corner icon path
import icon2 from "@assets/AICard/right_ckt.png"; // Adjust the right corner icon path
import dots from "@assets/AICard/AI dots.svg"

// export const AiCard: React.FC = () => {
    
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//         <motion.div
//             className="box-border w-full aspect-[888/588] p-6 relative rounded-xl shadow-lg"
//             style={{
//                 // width: 688,
//                 // height: 468,
//                 // marginTop: "100px",
//                 // marginLeft: 30,
//                 overflow: "hidden",
//                 backgroundImage: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//             }}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             transition={{ duration: 0.5 }}
//         >
//             <motion.div
//                 className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-center hover:cursor-pointer"
//                 style={{
//                     background: `linear-gradient(121.07deg, #19188B,#000000)`,
//                     backgroundImage: isHovered
//                         ? `url(${Bg2}),linear-gradient(121.07deg, #19188B,#000000)`
//                         : `url(${Bg}),linear-gradient(121.07deg, #19188B,#000000)`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat:'no-repeat'
//                 }}
//             >
//                 <div className="px-10 mx-10" style={{
//                     justifyContent: "center",
//                     textAlign: "left",
//                     alignContent: "center",
//                     padding: 20,
//                     height: "auto",
//                     position:"absolute",
//                     top:180,
//                     left:isHovered?-220:50,
//                     marginLeft:220
                    
//                 }}>
//                     <motion.h3 
//                     className={`font-bold mb-4 ${isHovered ? 'text-xl md:text-3xl lg:text-4xl text-center' : 'text-base md:text-4xl lg:text-5xl text-left'}`}


//                     // className="font-bold" style={{ fontSize: isHovered ? 38 : 40 , textAlign:isHovered?"center":"left"}}
//                         animate={{ y: isHovered ? -160 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
//                         AI & Automation
//                     </motion.h3>
//                     <motion.p 
//                         className={` ${isHovered ? 'text-m md:text-l lg:text-2xl text-center' : 'text-sm md:text-xl lg:text-2xl text-left'}`}


//                     // style={{ fontSize: isHovered ? 18 : 22 ,textAlign:isHovered?"center":"left"}}
//                         animate={{ y: isHovered ? -160 : 0 }}
//                         transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                        Automate your processes and supercharge innovation with AI.
//                        We can create intelligent solutions that think, learn and act.
//                     </motion.p>

//                     {isHovered && (
//                         <motion.div className="space-x-5"
//                             style={{  position:"absolute",top: "30%", right: "20%",
//                                 backgroundImage:`url(${dots})`
//                              }}
//                             initial={{ y: 50, opacity: 0 }}
//                             animate={{ y: -90, opacity: 1 }}
//                             exit={{ y: 50, opacity:0}}
//                             transition={{ type: "spring", stiffness: 100, damping: 20 }}>
//                             <img src={icon} alt="" style={{width:"100%", height:"100%"}} />
//                         </motion.div>
//                     )}
//                 </div>
                
//                 {/* Corner Div Top left */}
//                 <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
//                     style={{
//                         height: 200,
//                         width: 300,
//                         top: -50,
//                         left: -50
//                     }}>
//                     <img src={icon1} alt="" />
//                 </div>

//                 {/* Corner div bottom right */}
//                 <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
//                     style={{
//                         height: 200,
//                         width: 300,
//                         bottom: -50,
//                         right: -50
//                     }}>
//                     <img src={icon2} alt="" />
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

const AiCard = () => {
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
        className="max-w-[53.40rem] h-[22rem] md:h-[29.25rem] mx-4 relative"
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
              className="flex flex-col h-full rounded-xl shadow-xl justify-center text-left p-6 md:p-10 relative"
              style={{
                backgroundImage: isHovered ? `url(${Bg2})` : `url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.3s ease",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Circuit Left Image (disappears on hover) */}
              <motion.div
                className="absolute top-0 left-0 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon1}
                  alt="circuit-left"
                  className="w-11/12 h-11/12" 
                />
              </motion.div>
  
              {/* Enhanced Top-right glow */}
              {/* <motion.div
                className="absolute top-0 right-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: isHovered ? 0:1,
                  filter: isHovered ? "brightness(1.5) contrast(120%)" : "brightness(1) contrast(100%)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={glow}
                  alt="glow"
                  className="w-[200%] h-[200%] top-0 right-0 mix-blend-screen"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    transform: 'rotateY(180deg) ',
                  }}
                />
              </motion.div> */}
  
              
  
              {/* Enhanced Bottom-left glow */}
              {/* <motion.div
                className="absolute bottom-0 left-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: isHovered ? 0: 1,
                  filter: isHovered ? "brightness(1.5) contrast(120%)" : "brightness(1) contrast(100%)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={glow}
                  alt="glow"
                  className="w-[200%] h-[200%] bottom-0 left-0 mix-blend-screen"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    transform: 'rotateX(180deg) ',
                  }}
                />
              </motion.div>
   */}
              <motion.div
                className="absolute bottom-0 right-0 z-10 transform rotate-180"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon1}
                  alt="circuit-left"
                  className="w-11/12 h-11/12" 
                />
              </motion.div>
  
  
              {/* Content with hover effects */}
              <div className="flex flex-col justify-center text-center md:mx-10 mx-3 relative h-full">
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
                  <p className={`text-3xl md:text-4xl lg:text-5xl text-white text-left md:pl-56 font-bold ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  AI & Automation
                  </p>
                  <p className={`text-base md:text-xl lg:text-2xl text-white text-left md:pl-56 my-4 md:my-6 ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                  Automate your processes and supercharge innovation with AI.
                  We can create intelligent solutions that think, learn and act.
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

export default AiCard;
