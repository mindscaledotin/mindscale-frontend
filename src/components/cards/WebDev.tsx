import React from "react";
import { motion } from "framer-motion";
import BinaryCarousel from "./BinaryCarousel";
// import BG from "../src/assets/overlays/Web_Dev_BG.png"
import Bg from "../../assets/webDevCard/BG.svg";
import Bg2 from "../../assets/WebDevCard/BG2.svg";
import BgGlow from "../../assets/WebDevCard/BG_corner_glow_left.svg";

export const WebDev: React.FC = () => {
    const binaryNumbers = ["1", "0", "0", "1", "1"]; // Example binary numbers
    const binaryNumbers2 = ["0", "1", "1", "0", "0"]; // Example binary numbers
    return(
  <motion.div
    className="absolute rounded-xl shadow-lg"
    style={{
      width: 688,
      height: 368,
      marginTop: "100px",
      padding:100,
      marginLeft:30,
      overflow:"hidden",
      
    //   background: "#ffffff", // Solid background color
    backgroundImage: `linear-gradient(135deg, #35FEFE, #2554CB, #3737B2, #35FEFE)`,
    
    }}
    // whileHover={{ backgroundImage: "linear-gradient(135deg, #00BFFF, #00F0FF)" }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute flex items-center justify-center text-white z-[1]  rounded-xl inset-0.5 text-left"
      style={{
          background: "#19188B",
            backgroundImage: `url(${Bg}),url(${Bg2}), linear-gradient(135deg,#19188B,#000000)`,
        //   backgroundImage:"linear-gradient(135deg,#19188B,#000000)"
        //   backgroundImage:`uri(${Bg})`,
          backgroundSize:"cover",
          backgroundPosition:"center"
    
      }}
    //   whileHover={{ x: -50, y: -50 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="px-2" style={{
        width:600,
        // justifyContent:"center"
        height:300,
        top:0,
        marginTop:130
      }}>
      <h3 className="text-4xl font-bold mb-3 ">

        Mobile, Web App Development & Game
        </h3>
        <p className="text-2xl">
            Empowering your ideas into seamless mobile and web applications.
            Delivering intuitive, fast, and scalable apps for every platform.
        </p>

      </div>
      

      <div className="absolute" style={{ top: 0, left: 0 }}>
      <div
        // className="bg-black z-0"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        //   backgroundColor: "rgba(0, 0, 0, 0.1)",
          position: "relative", // Position relative to the wrapper
          top: -95, // Adjust as needed
          left: -65, // Adjust as needed
          backgroundImage:`url(${BgGlow})`
          
        }}
      >
        <div 
        className="flex flex-col"
        style={{width:20, 
        height:200,
         top:-60, left:70, position:"absolute",
          transform:"translate(100%, 80%)",
        //   backgroundColor:"rgba(0,0,0,0.2)",
        color:"#fffff",
        
          }}>
           
            
           <BinaryCarousel direction="up" numbers={binaryNumbers}/>
           {/* <BinaryCarousel /> */}
            
        </div>
        <div 
        className="flex flex-col"
        style={{width:20, 
        height:150,
         top:-20, left:85, position:"absolute",
          transform:"translate(100%, 80%)",
        //   backgroundColor:"rgba(0,0,0,0.2)",
        color:"#fffff",
        fontSize:13
          }}>
           <BinaryCarousel direction="up" numbers={binaryNumbers2}/>
           {/* <BinaryCarousel/> */}
            
            
        </div>
        {/* <div className="absolute" style={{ top: 0, left: 0 }}>
          <BinaryCarousel direction="up" numbers={binaryNumbers} />
        </div> */}

        {/* Downward Scrolling Binary Carousel */}
        {/* <div className="absolute" style={{ bottom: 0, left: 0 }}>
          <BinaryCarousel direction="down" numbers={binaryNumbers} />
        </div> */}
      </div>
    </div>
    </motion.div>

    {/* Wrapper for the black div to position it correctly */}
   
  </motion.div>
)};

export default WebDev;

