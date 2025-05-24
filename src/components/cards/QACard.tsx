import React, { useState } from "react";
import { motion } from "framer-motion";
import GlowCircle from "../GlowCircle";


import Bg from "../../assets/QACard/bg.svg";
import Bg2 from "../../assets/QACard/OnHove_BG.svg";

import bg_icon from "../../assets/QACard/icons.png";
import icon1 from "../../assets/QACard/circuitLeft.svg"
import glow from "@assets/WebDevCard/glow.avif"

// export const QACard: React.FC = () => {
    
//     const [isHovered, setIsHovered] = useState(false); // State to track hover
//     return(
//   <motion.div
//     className=" box-border w-full aspect-[850/468] p-6 relative rounded-xl shadow-lg"
    
//     style={{
//     //   width: 638,
//       // height: 468,
//     //   marginTop: "100px",
//     //   width: 638,
//     //   height: 368,
//     //   marginTop: "100px",
//       // marginLeft:30,
//       overflow:"hidden",
      
//       // backgroundImage: `linear-gradient(135deg, #35FEFE, #2554CB, #3737B2, #35FEFE)`,
//     //   background: `linear-gradient(121.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//       backgroundImage: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//     }}

//     onHoverStart={() => setIsHovered(true)} // Set hover state
//     onHoverEnd={() => setIsHovered(false)} // Reset hover state
//     transition={{ duration: 0.5 }}
//   >
//     <motion.div
//       className="absolute flex-auto justify-center content-center text-white z-[1]  rounded-xl inset-0.5 text-left hover:cursor-pointer"
//       style={{
        
//             background:`linear-gradient(121.07deg, #19188B,#000000)`,
//             backgroundImage: isHovered
//           ? `url(${Bg2}))` // Change to the second background image on hover
//           : `url(${Bg}))`,
        
//           backgroundSize:"cover",
//           backgroundPosition:"center",
//           backgroundRepeat:"no-repeat"
//         }}
//         >

//             {/* Card Text Div */}
//       <div className="px-10 mx-10" style={{
//         // width:600,
//         justifyContent:"center",
//         textAlign:"left",
//         alignContent:"center",
//         padding:"5%",
//         height:"auto",
//         backgroundImage:`url(${Bg2})`

    
        
    

//       }}>
//       <motion.h3 
//         className={`font-bold mb-4 ${isHovered ? 'text-xl md:text-3xl lg:text-4xl -mx-10' : 'text-base md:text-4xl lg:text-5xl'}`}


//       // className=" font-bold  " style={{fontSize:isHovered? 38:40}}
//       animate={{y:isHovered ? -40 : 0}}
//       transition={{type:"spring", stiffness:100, damping:20, duration:2}}>

//         Testing & Quality Assurance
//         </motion.h3>
//         <motion.p
//           className={` ${isHovered ? 'text-m md:text-l lg:text-2xl -mx-10' : 'text-sm md:text-xl lg:text-2xl'}`}

        
//         // style={{fontSize:isHovered ? 18 : 22}}
//         animate={{y:isHovered?-40:0}}
//         transition={{type:"spring", stiffness:100, damping:20}}
//         >
//             Delivering perfection through rigorous, detailed testing.
//             We ensure your products are bug-free, reliable, and market-ready.
//         </motion.p>

//         {/* Images displayed on hover */}
//         {isHovered && (
//           <motion.div className=" space-x-5 "
//           style={{top:10, right:-30}}
//           initial={{y:50, opacity:0}}
//           animate={{y:0, opacity:1}}
//           transition={{type:"spring",stiffness:100, damping:20}}>
//             {/* <GlowCircle size={300}/> */}
//             <img src={bg_icon} alt=""  />
//             {/* <GlowCircle size={300}/> */}
            
            
//           </motion.div>
//         )}

//       </div>

//   {/* Corner Div Top left */}
//       <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl "
//       style={{
//         height:200,
//         width:300,
//         top:-50,
//         left:-50
//       }}>
       

//             <img src={icon1} alt=""  />
        
        
//       </div>


//       {/* Corner div bottom right */}

//       <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
//       style={{
//         height:200,
//         width:300,
//         bottom:-50,
//         right:-50
//       }}>
//         <img src={icon2} alt=""  />

       
        
        
        
//       </div>
       
          

    
  
      
      

     
//     </motion.div>


   
//   </motion.div>
// )};

const QACard = () => {
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
      className="max-w-[52.50rem] h-[22rem] md:h-[29.25rem] mx-4 relative"
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
            <motion.div
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
            </motion.div>

            

            {/* Enhanced Bottom-left glow */}
            <motion.div
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
                Testing & Quality Assurance
                </p>
                <p className={`text-base md:text-xl lg:text-2xl text-white my-4 md:my-6 ${isHovered ? 'scale-90' : 'scale-100'} transition-transform duration-300`}>
                Delivering perfection through rigorous, detailed testing.
                We ensure your products are bug-free, reliable, and market-ready.
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
                  src={bg_icon}
                  alt="icon"
                  className="w-11/12 h-5/6 object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export default QACard;

