import React from "react";
import WebDev from "@components/cards/WebDev";
import DataAnalytics from "@components/cards/DataAnalytics";
import QACard from "@components/cards/QACard";
import UiUxCard from "@components/cards/UiUxCard";
import CloudCard from "@components/cards/CloudCard";
import AiCard from "@components/cards/AiCard";

export const CardGrid: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center">

      <div className="flex flex-col md:flex-row w-full border border-red-500 justify-between h-[166px] md:h-[468px] my-5">
        <WebDev />  {/**988x468 */}
        <div className=""><DataAnalytics /></div> {/* 693x468 */}
      </div>
      <div className="col-span-12 md:col-span-6"><QACard /></div> {/* 850x468 */}
      <div className="col-span-12 md:col-span-6"><UiUxCard /></div> {/* 833x468 */}
      <div className="col-span-12 md:col-span-6"><CloudCard /></div> {/* 795x588 */}
      <div className="col-span-12 md:col-span-6"><AiCard /></div> {/* 888x588 */}
    </div>
  );
};