import React from "react";
import TopSection from "./components/TopSection";
import DownSection from "./components/DownSection";
import BestRecords from "../home/components/Promoted";
import NewsLetter from "../home/components/NewsLetter";

const Play = () => {
  return (
    <>
      <div className="px-10">
        <TopSection />
        <DownSection />
        <BestRecords />
      </div>
      <NewsLetter />
    </>
  );
};

export default Play;
