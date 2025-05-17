import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "../../assets/AICard/bg.svg"; // Adjust the background image path
import Bg2 from "../../assets/AICard/onHover_glow.svg"; // Adjust the background image path
import icon from "../../assets/AICard/icon.png"; // Adjust the icon path
import icon1 from "../../assets/AICard/left_ckt.png"; // Adjust the left corner icon path
import icon2 from "../../assets/AICard/right_ckt.png"; // Adjust the right corner icon path
import dots from "../../assets/AICard/AI dots.svg"

export const AiCard: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="box-border w-full aspect-[888/588] p-6 relative rounded-xl shadow-lg"
            style={{
                // width: 688,
                // height: 468,
                // marginTop: "100px",
                marginLeft: 30,
                overflow: "hidden",
                backgroundImage: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-center"
                style={{
                    background: `linear-gradient(121.07deg, #19188B,#000000)`,
                    backgroundImage: isHovered
                        ? `url(${Bg2}),linear-gradient(121.07deg, #19188B,#000000)`
                        : `url(${Bg}),linear-gradient(121.07deg, #19188B,#000000)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="px-2 mx-10 z-10" style={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignContent: "center",
                    padding: 20,
                    height: 300,
                    position:"absolute",
                    top:85,
                    left:isHovered?-200:-10,
                    marginLeft:220
                    
                }}>
                    <motion.h3 className="font-bold" style={{ fontSize: isHovered ? 38 : 40 , textAlign:isHovered?"center":"left"}}
                        animate={{ y: isHovered ? -160 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
                        AI & Automation
                    </motion.h3>
                    <motion.p style={{ fontSize: isHovered ? 18 : 22 ,textAlign:isHovered?"center":"left"}}
                        animate={{ y: isHovered ? -160 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                       Automate your processes and supercharge innovation with AI.
                       We can create intelligent solutions that think, learn and act.
                    </motion.p>

                    {isHovered && (
                        <motion.div className="space-x-5"
                            style={{  position:"absolute",top: 100, right: 102,
                                backgroundImage:`url(${dots})`
                             }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: -90, opacity: 1 }}
                            exit={{ y: 50, opacity:0}}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                            <img src={icon} alt="" style={{width:"400px", height:"320.65px"}} />
                        </motion.div>
                    )}
                </div>
                
                {/* Corner Div Top left */}
                <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
                    style={{
                        height: 200,
                        width: 300,
                        top: -50,
                        left: -50
                    }}>
                    <img src={icon1} alt="" />
                </div>

                {/* Corner div bottom right */}
                <div className="absolute w-full h-screen flex items-center justify-center rounded-xl"
                    style={{
                        height: 200,
                        width: 300,
                        bottom: -50,
                        right: -50
                    }}>
                    <img src={icon2} alt="" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AiCard;
