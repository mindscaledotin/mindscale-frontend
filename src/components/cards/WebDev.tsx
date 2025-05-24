import React, { useState } from "react";
import { motion } from "framer-motion";
import BinaryCarousel from "@components/cards/BinaryCarousel";
import GlowCircle from "@components/GlowCircle";

import bgSvg from "@assets/WebDevCard/BG.svg";
import BG2 from "@assets/WebDevCard/BG2.svg";
import glow from "@assets/WebDevCard/glow.avif"

import bg_icon_png from "@assets/WebDevCard/BG_icon.png"
import { div } from "framer-motion/client";

// const hoveredCard = ()=>{
//    <motion.div className=""
//    style={{
//     backgroundImage: `url(${bgSvg}), linear-gradient(121.07deg, #19188B, #000000)`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "center",
//     // backgroundRepeat: "no-repeat",
//   }}
//    >

//    </motion.div>
// }

// export const WebDev: React.FC = () => {

//     const [isHovered, setIsHovered] = useState(false); // State to track hover
//     return(
//   <motion.div
//     className="box-border w-full  aspect-[988/468] relative rounded-xl p-6 shadow-lg hover:cursor-pointer "
//     style={{
//       overflow:"hidden",

//       // backgroundImage: `linear-gradient(135deg, #35FEFE, #2554CB, #3737B2, #35FEFE)`,
//       // background: `linear-gradient(121.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//       background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
//       // backgroundImage: `linear-gradient(121.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 36.82%, rgba(55, 55, 178, 0) 57.86%, #35FEFE 99.46%)`,
//     }}

//     onHoverStart={() => setIsHovered(true)} // Set hover state
//     onHoverEnd={() => setIsHovered(false)} // Reset hover state
//     transition={{ duration: 0.5 }}
//   >

//     <motion.div
//       className="absolute flex-auto justify-center content-center text-white z-[1]  rounded-xl inset-0.5 text-left hover:cursor-pointer"
//       style={{


//             backgroundImage: isHovered
//           ? `url(${bgSvg}), linear-gradient(121.07deg, #19188B,#000000)` // Change to the second background image on hover
//           : `url(${bgSvg}),url(${BG2}), linear-gradient(121.07deg, #19188B,#000000)`,

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
//         // margin:"4%",
//         height:"100%",



//       }}>
//       <motion.h3 
//           className={`font-bold mb-4 ${isHovered ? 'text-xl md:text-3xl lg:text-4xl -mx-5' : 'text-base md:text-4xl lg:text-5xl'}`}


//       // className=" font-bold" 
//       // style={{fontSize:isHovered? 38:40}}
//       animate={{y:isHovered ? -50 : 0}}
//       transition={{type:"spring", stiffness:100, damping:20, duration:2}}>

//         Mobile, Web App Development & Game
//         </motion.h3>
//         <motion.p 
//           className={` ${isHovered ? 'text-m md:text-l lg:text-2xl -mx-5' : 'text-sm md:text-xl lg:text-2xl'}`}


//         // style={{fontSize:isHovered ? 18 : 22}}
//         animate={{y:isHovered?-50:0}}
//         transition={{type:"spring", stiffness:100, damping:20}}
//         >
//             Empowering your ideas into seamless mobile and web
//              applications.
//             Delivering intuitive, fast, and scalable apps for every platform.
//         </motion.p>

//         {/* Images displayed on hover */}
//         {isHovered && (
//           <motion.div className=" space-x-5 "
//           style={{top:"10%", right:"40%"}}
//           initial={{y:50, opacity:0}}
//           animate={{y:"10%", opacity:1}}
//           transition={{type:"spring",stiffness:100, damping:20}}>
//             <img src={bg_icon_png} alt=""  />
//           </motion.div>
//         )}

//       </div>

//   {/* Corner Div Top left */}
//       <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
//       style={{
//         height:200,
//         width:200,
//         top:-50,
//         left:-50
//       }}>
//         <GlowCircle size={300}/>

//         <div className="flex flex-row justify-center -space-x-1 "
//         style={{
//             width:100, height:100,
//             left:-80,
//             top:0,
//             position:"relative",

//         }}>
//             {/* <BinaryCarousel columnCount={8} delay={500}/>
//             <BinaryCarousel columnCount={5} delay={500}/> */}

//             <BinaryCarousel direction="up" height={150} speed={90000} />
//             <BinaryCarousel direction="up" height={100} speed={90000} />

//         </div>

//       </div>


//       {/* Corner div bottom right */}

//       <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
//       style={{
//         height:500,
//         width:500,
//         bottom:-230,
//         right:-150
//       }}>

//         <div className="flex flex-row justify-center -space-x-3 "
//         style={{
//             width:100, height:100,
//             right:-260,
//             bottom:80,
//             position:"relative",


//         }}>
//             {/* <BinaryCarousel columnCount={8} delay={500} direction="down"/> */}
//             {/* <BinaryCarousel direction="down" height={150} speed={90000} />
//             <BinaryCarousel direction="down" height={100} speed={90000} /> */}
//             <BinaryCarousel direction="down" height={150} speed={90000} />




//         </div>
//         <div className="flex flex-row justify-center -space-x-3 "
//         style={{
//             width:100, height:100,
//             right:-210,
//             bottom:30,
//             position:"relative",


//         }}>

//             {/* <BinaryCarousel columnCount={5} delay={500} direction="down"/> */}
//             <BinaryCarousel direction="down" height={100} speed={90000} />


//         </div>
//         <GlowCircle size={250}/>

//       </div>









//     </motion.div>



//   </motion.div>
// )};

// export default WebDev;


const WebDev = () => {
  return (
    <div className="max-w-[61.75rem] h-[25rem] md:h-[29.25rem] p-4 relative group">
      <div className="flex flex-col h-full rounded-xl shadow-xl justify-center text-left p-6 md:p-10" style={{
        backgroundColor: "rgb(12, 12, 48)",
        backgroundImage: `url(${bgSvg}), url(${BG2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        {/* Top-left glow */}
        <div className="absolute top-4 left-4 rounded-xl">
          <img
            src={glow}
            alt="glow"
            className="w-[200%] h-[200%] top-0 left-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300
                      filter brightness-300 contrast-100
                      mix-blend-screen rounded-xl"
          />
        </div>

        {/* Top-left BinaryCarousels */}
        <div className="absolute top-4 left-4 z-10 flex gap-2 mx-4">
          <BinaryCarousel direction="up" height={150} speed={90000} />
          <BinaryCarousel direction="up" height={80} speed={90000} />
        </div>

        {/* Bottom-right glow */}
        <div className="absolute bottom-4 right-4 rounded-xl overflow-hidden">
          <img
            src={glow}
            alt="glow"
            className="w-[200%] h-[200%] -bottom-1/2 -right-1/2 opacity-80 group-hover:opacity-100 transition-opacity duration-300
                      filter brightness-300 contrast-100
                      mix-blend-screen rounded-xl transform rotate-180"
          />
        </div>

        {/* Bottom-right BinaryCarousels */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-2 mx-4">
          <BinaryCarousel direction="down" height={150} speed={90000} />
          <BinaryCarousel direction="down" height={80} speed={90000} />
        </div>

        {/* Content with hover effects */}
        <div className="flex flex-col justify-center text-left mx-10 relative h-full">
          {/* Text Container */}
          <motion.div
            className="relative z-20"
            initial={false}
            animate={{
              y: 0,
              fontSize: "100%"
            }}
            whileHover={{
              y: -40,
              fontSize: "90%"
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl md:text-4xl lg:text-5xl text-white font-bold">
              Mobile, Web App Development & Game
            </p>
            <p className="text-base md:text-xl lg:text-2xl text-white my-4 md:my-6">
              Empowering your ideas into seamless mobile and
              web applications.
              Delivering intuitive, fast, and scalable apps for every platform.
            </p>
          </motion.div>

          {/* Image (hidden by default, shown on hover) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ 
              opacity: 1,
              scale: 1,
              transition: { delay: 0.1 } // Slight delay for better staging
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={bg_icon_png} 
              alt="icon" 
              className="w-40 h-40 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default WebDev;