import React from "react";
import PriceDetails from "../utils/PriceDetails";
import SwapItem from "../utils/SwapItem";
import LogoSection from "../utils/LogoSection";
import BitCoinHeading from "../utils/BitCoinHeading";
import SocialIcons from "../utils/SocialIcons";
import Description from "../utils/Description";

const TopSection = ({ details, refetch, status }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
        <div className="lg:col-span-4 col-span-1">
          <LogoSection />
          <SwapItem details={details} />
        </div>
        <div className="lg:col-span-8  bg-secondary py-5 rounded-lg border-b-2 border-[#323232]">
          <BitCoinHeading details={details} refetch={refetch} status={status} />
          <SocialIcons details={details} />
          <PriceDetails details={details} />
          <Description
            description={details?.coin_description}
            coinImage={details?.coin_picture}
          />
        </div>
      </div>
    </>
  );
};

export default TopSection;
