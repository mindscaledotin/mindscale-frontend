import React, { useState } from "react";
import { motion } from "framer-motion";
import GlowCircle from "../GlowCircle";


import Bg from "../../assets/QACard/bg.svg";
import Bg2 from "../../assets/QACard/OnHove_BG.svg";

import bg_icon from "../../assets/QACard/icons.png";
// import bg_glow from "../../assets/QACard/bg_glow_corner.png";
// import bg_hover from "../../assets/QACard/"
import icon1 from "../../assets/QACard/circuitLeft.svg"
import icon2 from "../../assets/QACard/circuitRight.svg"

export const QACard: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    return(
  <motion.div
    className=" box-border w-full aspect-[850/468] p-6 relative rounded-xl shadow-lg"
    style={{
    //   width: 638,
    //   height: 368,
    //   marginTop: "100px",
      marginLeft:30,
      overflow:"hidden",
      
      // backgroundImage: `linear-gradient(135deg, #35FEFE, #2554CB, #3737B2, #35FEFE)`,
    //   background: `linear-gradient(121.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
      backgroundImage: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
    }}

    onHoverStart={() => setIsHovered(true)} // Set hover state
    onHoverEnd={() => setIsHovered(false)} // Reset hover state
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute flex-auto justify-center content-center text-white z-[1]  rounded-xl inset-0.5 text-left"
      style={{
        
            background:`linear-gradient(121.07deg, #19188B,#000000)`,
            backgroundImage: isHovered
          ? `url(${Bg2}))` // Change to the second background image on hover
          : `url(${Bg}))`,
        
          backgroundSize:"cover",
          backgroundPosition:"center",
        }}
        >

            {/* Card Text Div */}
      <div className="px-2 mx-10 z-10" style={{
        // width:600,
        justifyContent:"center",
        textAlign:"left",
        alignContent:"center",
        padding:20,
        height:300,
        backgroundImage:`url(${Bg2})`

    
        
    

      }}>
      <motion.h3 className=" font-bold  " style={{fontSize:isHovered? 38:40}}
      animate={{y:isHovered ? -40 : 0}}
      transition={{type:"spring", stiffness:100, damping:20, duration:2}}>

        Testing & Quality Assurance
        </motion.h3>
        <motion.p style={{fontSize:isHovered ? 18 : 22}}
        animate={{y:isHovered?-40:0}}
        transition={{type:"spring", stiffness:100, damping:20}}
        >
            Delivering perfection through rigorous, detailed testing.
            We ensure your products are bug-free, reliable, and market-ready.
        </motion.p>

        {/* Images displayed on hover */}
        {isHovered && (
          <motion.div className=" space-x-5 "
          style={{top:10, right:-30}}
          initial={{y:50, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{type:"spring",stiffness:100, damping:20}}>
            {/* <GlowCircle size={300}/> */}
            <img src={bg_icon} alt=""  />
            
          </motion.div>
        )}

      </div>

  {/* Corner Div Top left */}
      <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl "
      style={{
        height:200,
        width:300,
        top:-50,
        left:-50
      }}>
       

            <img src={icon1} alt=""  />
        
        
      </div>


      {/* Corner div bottom right */}

      <div className="absolute w-full h-screen flex items-center justify-center  rounded-xl"
      style={{
        height:200,
        width:300,
        bottom:-50,
        right:-50
      }}>
        <img src={icon2} alt=""  />

       
        
        
        
      </div>
       
          

    
  
      
      

     
    </motion.div>


   
  </motion.div>
)};

export default QACard;

