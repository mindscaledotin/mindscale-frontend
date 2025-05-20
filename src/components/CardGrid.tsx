import React from "react";
import WebDev from "@components/cards/WebDev";
import DataAnalytics from "@components/cards/DataAnalytics";
import QACard from "@components/cards/QACard";
import UiUxCard from "@components/cards/UiUxCard";
import CloudCard from "@components/cards/CloudCard";
import AiCard from "@components/cards/AiCard";

export const CardGrid: React.FC = () => {
  return (
    <div className="mx-auto px-[38px] py-[38px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[26px]">
      <div className="col-span-12 md:col-span-7"><WebDev /></div> {/* 988x468 */}
      <div className="col-span-12 md:col-span-5"><DataAnalytics /></div> {/* 693x468 */}
      <div className="col-span-12 md:col-span-6"><QACard /></div> {/* 850x468 */}
      <div className="col-span-12 md:col-span-6"><UiUxCard /></div> {/* 833x468 */}
      <div className="col-span-12 md:col-span-6"><CloudCard /></div> {/* 795x588 */}
      <div className="col-span-12 md:col-span-6"><AiCard /></div> {/* 888x588 */}
    </div>
  );
};