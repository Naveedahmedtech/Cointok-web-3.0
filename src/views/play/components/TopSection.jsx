import React from "react";
import PriceDetails from "../utils/PriceDetails";
import SwapItem from "../utils/SwapItem";
import LogoSection from "../utils/LogoSection";
import BitCoinHeading from "../utils/BitCoinHeading";
import SocialIcons from "../utils/SocialIcons";
import Description from "../utils/Description";

const TopSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
        <div className="lg:col-span-4 col-span-1">
          <LogoSection />
          <SwapItem platform="PancakeSwap" />
        </div>
        <div className="lg:col-span-8 col-span-1 bg-secondary p-5 rounded-lg">
          <BitCoinHeading />
          <SocialIcons />
          <PriceDetails />
          <Description />
        </div>
      </div>
    </>
  );
};

export default TopSection;
