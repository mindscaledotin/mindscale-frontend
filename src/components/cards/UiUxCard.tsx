import React, { useState } from "react";
import { motion } from "framer-motion";

import Bg from "@assets/UIUXCard/bg.svg"; // Adjust the background image path
import Bg2 from "@assets/UIUXCard/bg2.svg"; // Adjust the background image path
import icon from "@assets/UIUXCard/icon.png"; // Adjust the icon path

export const UiUxCard: React.FC = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="box-border w-full aspect-[833/468] p-6 relative rounded-xl shadow-lg"
            style={{
                // width: 688,
                // height: 368,
                // marginTop: "100px",
                marginLeft: 30,
                overflow: "hidden",
                background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute flex-auto justify-center content-center text-white z-[1] rounded-xl inset-0.5 text-left"
                style={{
                    backgroundImage: isHovered
                        ? `url(${Bg2}), linear-gradient(121.07deg, #19188B,#000000)`
                        : `url(${Bg}), linear-gradient(121.07deg, #19188B,#000000)`,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            >
                <div className="px-2 mx-10" style={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignContent: "center",
                    padding: 20,
                    height: 300,
                    // backdropFilter:'blur(10px)'
                }}>
                    <motion.h3 className="font-bold" style={{ fontSize: isHovered ? 38 : 40 , backdropFilter:'blur(10px)'}}
                        animate={{ y: isHovered ? -100 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}>
                        UI/UX Design
                    </motion.h3>
                    <motion.p style={{ fontSize: isHovered ? 18 : 22 ,backdropFilter:'blur(10px)'}}
                        animate={{ y: isHovered ? -100 : 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                       Designing beautiful experiences that users love and remember.
                       Our design-first approach drives engagement and loyalty.
                    </motion.p>

                    {isHovered && (
                        <motion.div className="space-x-5"
                            style={{ position: 'absolute', top: 100, right: 0 }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                            <img src={icon} alt="" />
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default UiUxCard;
