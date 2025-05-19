import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "../../assets/CloudCard/bg.svg"; // Adjust the background image path
import icon from "../../assets/CloudCard/onHover_BG.svg"; // Adjust the background image path
import dots from "../../assets/CloudCard/Cloud solution dot svg.svg"

export const CloudCard: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="box-border w-full aspect-[795/588] p-6 relative rounded-xl shadow-lg"
            style={{
                // width: 688,
                // height: 468,
                // marginTop: "100px",
                marginLeft: 30,
                overflow: "hidden",
                background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
                // aspectRatio:688/468
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-left"
                style={{
                    backgroundImage: isHovered
                        ? `url(${dots}),linear-gradient(121.07deg, #19188B,#000000)`
                        : `url(${Bg}), linear-gradient(121.07deg, #19188B,#000000)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="px-2 mx-10" style={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignContent: "center",
                    padding: 20,
                    height: 300,
                }}>
                    <motion.h3 className="font-bold" style={{ fontSize: isHovered ? 38 : 40 }}
                        animate={{ y: isHovered ? -150 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
                        Cloud Solutions
                    </motion.h3>
                    <motion.p style={{ fontSize: isHovered ? 18 : 22 }}
                        animate={{ y: isHovered ? -150 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                       Scale faster and smarter with modern cloud technologies. We help you migrate, optimize, and manage cloud infrastructure.
                    </motion.p>

                    {isHovered && (
                        <motion.div className="space-x-5"
                            style={{ position: 'absolute', top: 100, right: 90 }}
                            initial={{ y: 150, opacity: 0 }}
                            animate={{ y: 40, opacity: 1 }}
                            exit={{ y:150, opacity:0}}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                            <img src={icon} alt="" />
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CloudCard;