import React from "react";
import banner1 from "../../../assets/banners/banner1.png";
import Text from "../../../components/text/Text";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        <Text className="text-text-light font-bold text-center md:text-left md:max-w-[400px] mb-6 lg:mb-0 md:mr-10 md:text-xl">
          #1 Platform to discover newest coins!
        </Text>
        <div className="max-w-full md:max-w-[700px]">
          <img src={banner1} alt="Banner 1" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Banner;
