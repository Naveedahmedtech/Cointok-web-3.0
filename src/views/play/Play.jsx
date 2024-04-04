import React from "react";
import TopSection from "./components/TopSection";
import DownSection from "./components/DownSection";
import BestRecords from "../home/components/Promoted";
import NewsLetter from "../home/components/NewsLetter";

const Play = () => {
  return (
    <>
      <div className="px-5">
        <TopSection />
        <DownSection />
        <BestRecords />
      </div>
      <NewsLetter />
    </>
  );
};

export default Play;
