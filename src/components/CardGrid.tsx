import React from "react";
import WebDev from "./cards/WebDev";
import DataAnalytics from "./cards/DataAnalytics";
import QACard from "./cards/QACard";
import UiUxCard from "./cards/UiUxCard";
import CloudCard from "./cards/CloudCard";
import AiCard from "./cards/AiCard";

export const CardGrid: React.FC = () => {
  return (
    <div className=" mx-auto px-[38px] py-[38px] grid grid-cols-12 gap-[26px]">
      <div className="col-span-7 "><WebDev /></div> {/* 988x468 */}
      <div className="col-span-5 "><DataAnalytics /></div> {/* 693x468 */}
      <div className="col-span-6 "><QACard /></div> {/* 850x468 */}
      <div className="col-span-6 "><UiUxCard /></div> {/* 833x468 */}
      <div className="col-span-6 "><CloudCard /></div> {/* 795x588 */}
      <div className="col-span-6 "><AiCard /></div> {/* 888x588 */}
    </div>
    
  );
};