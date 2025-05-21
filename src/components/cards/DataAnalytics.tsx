import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "@assets/DACard/BG.svg";
import Bg2 from "@assets/DACard/onHover_BG.svg";
import icon from "@assets/DACard/icon.png";

export const DataAnalytics: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="box-border p-6 w-full aspect-[693/468] relative rounded-xl shadow-lg"
            style={{
                // width: 588,
                // height: 468,
                // marginTop: "100px",
                // marginLeft: 30,
                overflow: "hidden",
                background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-left hover:cursor-pointer"
                style={{
                    backgroundImage: isHovered
                        ? `url(${Bg2}), linear-gradient(121.07deg, #19188B,#000000)`
                        : `url(${Bg}), linear-gradient(121.07deg, #19188B,#000000)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat:"no-repeat"
                }}
            >
                <div 
                className="px-10 mx-10" 
                style={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignContent: "center",
                    padding: "5%",
                    height: "auto",
                }}>
                    <motion.h3 
                    // className="font-bold text-lg md:text-xl lg:text-2xl" 
                    className={`font-bold mb-4 ${isHovered ? 'text-xl md:text-3xl lg:text-4xl -mx-10' : 'text-base md:text-4xl lg:text-5xl'}`}
                    // style={{ fontSize:isHovered? 38:40 }}
                        animate={{ y: isHovered ? -140 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
                        Data Analytics
                    </motion.h3>
                    <motion.p 
                        className={` ${isHovered ? 'text-m md:text-l lg:text-2xl -mx-10' : 'text-sm md:text-xl lg:text-2xl'}`}

                    // style={{ fontSize: isHovered ? 18 : 22 }}
                        animate={{ y: isHovered ? -140 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                        Turning raw data into meaningful business 
                        insights. Drive smarter decisions with powerful 
                        analytics and reporting tools.
                    </motion.p>

                    {isHovered && (
                        <motion.div className="space-x-5"
                            style={{ position:'absolute',top: 150, right: 90 }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                                 <img src={icon} alt=""  />
                        </motion.div>
                    )}
                </div>

             

                {/* <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
                    style={{
                        height: 500,
                        width: 500,
                        bottom: -230,
                        right: -150
                    }}>
                    <div className="flex flex-row justify-center -space-x-3"
                        style={{
                            width: 100, height: 100,
                            right: -260,
                            bottom: 80,
                            position: "relative",
                        }}>
                        <BinaryCarousel direction="down" height={150} speed={90000} />
                    </div>
                    <div className="flex flex-row justify-center -space-x-3"
                        style={{
                            width: 100, height: 100,
                            right: -210,
                            bottom: 30,
                            position: "relative",
                        }}>
                        <BinaryCarousel direction="down" height={100} speed={90000} />
                    </div>
                    <GlowCircle size={200} />
                </div> */}
            </motion.div>
        </motion.div>
    );
};

export default DataAnalytics;