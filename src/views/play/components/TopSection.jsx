import React from "react";
import PriceDetails from "../utils/PriceDetails";
import SwapItem from "../utils/SwapItem";
import LogoSection from "../utils/LogoSection";
import BitCoinHeading from "../utils/BitCoinHeading";
import SocialIcons from "../utils/SocialIcons";
import Description from "../utils/Description";
import bgImage from "../../../assets/banners/descriptionbg.png";

const TopSection = ({ details, refetch, status }) => {
  const backgroundImage = details?.coin_picture
    ? details?.coin_picture
    : bgImage;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
        <div className="lg:col-span-4 col-span-1">
          <LogoSection details={details} />
          <SwapItem details={details} />
        </div>
        <div className="lg:col-span-8  bg-secondary py-5 rounded-lg border-b-2 border-[#323232] relative">
          {/* Background as watermark */}
          <div
            className="absolute left-[30%] bottom-1 lg:left-[25%] lg:bottom-[10px] w-[50%] h-[20%] lg:w-[50%] xl:lg:h-[30%]"
            style={{
              // position: "absolute",
              // left: "25%",
              // // left: "40%",
              // left: "30%",
              // // bottom: 10,
              // bottom: 0,
              // // large screens
              // width: "50%",
              // height: "30%",
              // // width: "20%",
              // // height: "30%",
              // width: "40%",
              // height: "30%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
              filter: "grayscale(100%)",
            }}
          ></div>
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
