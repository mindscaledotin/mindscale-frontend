import React, { useState } from "react";
import { motion } from "framer-motion";
import BinaryCarousel from "./BinaryCarousel";
import GlowCircle from "../GlowCircle";

import Bg from "../../assets/webDevCard/BG.svg";
import Bg2 from "../../assets/WebDevCard/BG2.svg";

import bg_icon_png from "../../assets/WebDevCard/BG_icon.png"

export const WebDev: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    return(
  <motion.div
    className="absolute rounded-xl shadow-lg"
    style={{
      width: 688,
      height: 368,
      marginTop: "100px",
      marginLeft:30,
      overflow:"hidden",
      border:"none",
      // backgroundImage: `linear-gradient(135deg, #35FEFE, #2554CB, #3737B2, #35FEFE)`,
      background: `linear-gradient(121.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 20.82%, rgba(55, 55, 178, 0) 77.86%, #35FEFE 99.46%)`,
    }}

    onHoverStart={() => setIsHovered(true)} // Set hover state
    onHoverEnd={() => setIsHovered(false)} // Reset hover state
    transition={{ duration: 0.5 }}
  >
    
    <motion.div
      className="absolute flex-auto justify-center content-center text-white z-[1]  rounded-xl inset-0.5 text-left"
      style={{
        
        
            backgroundImage: isHovered
          ? `url(${Bg}), linear-gradient(121.07deg, #19188B,#000000)` // Change to the second background image on hover
          : `url(${Bg}),url(${Bg2}), linear-gradient(121.07deg, #19188B,#000000)`,
        
          backgroundSize:"cover",
          backgroundPosition:"center",
        }}
        >
            {/* Card Text Div */}
      <div className="px-2 mx-10" style={{
        // width:600,
        justifyContent:"center",
        textAlign:"left",
        alignContent:"center",
        padding:20,
        height:300,
        
    

      }}>
      <motion.h3 className=" font-bold  " style={{fontSize:40}}
      animate={{y:isHovered ? -40 : 0}}
      transition={{type:"spring", stiffness:100, damping:20, duration:2}}>

        Mobile, Web App Development & Game
        </motion.h3>
        <motion.p style={{fontSize:isHovered ? 17 : 18}}
        animate={{y:isHovered?-40:0}}
        transition={{type:"spring", stiffness:100, damping:20}}
        >
            Empowering your ideas into seamless mobile and web
             applications.
            Delivering intuitive, fast, and scalable apps for every platform.
        </motion.p>

        {/* Images displayed on hover */}
        {isHovered && (
          <motion.div className=" space-x-5 "
          style={{top:10, right:-30}}
          initial={{y:50, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{type:"spring",stiffness:100, damping:20}}>
            <img src={bg_icon_png} alt=""  />
          </motion.div>
        )}

      </div>

  {/* Corner Div Top left */}
      <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
      style={{
        height:200,
        width:200,
        top:-50,
        left:-50
      }}>
        <GlowCircle size={200}/>

        <div className="flex flex-row justify-center -space-x-3 "
        style={{
            width:100, height:100,
            left:-80,
            top:0,
            position:"relative",
            
        }}>
            <BinaryCarousel columnCount={8} delay={500}/>
            <BinaryCarousel columnCount={5} delay={500}/>
         
        </div>
        
      </div>


      {/* Corner div bottom right */}

      <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
      style={{
        height:500,
        width:500,
        bottom:-230,
        right:-150
      }}>

        <div className="flex flex-row justify-center -space-x-3 "
        style={{
            width:100, height:100,
            right:-260,
            bottom:100,
            position:"relative",
            
            
        }}>
            <BinaryCarousel columnCount={8} delay={500} direction="down"/>
       
         
        </div>
        <div className="flex flex-row justify-center -space-x-3 "
        style={{
            width:100, height:100,
            right:-210,
            bottom:40,
            position:"relative",
            
            
        }}>
            
            <BinaryCarousel columnCount={5} delay={500} direction="down"/>
         
        </div>
        <GlowCircle size={200}/>
        
      </div>
       
          

    
  
      
      

     
    </motion.div>


   
  </motion.div>
)};

export default WebDev;

